var express = require('express')
var http_errors = require('http-errors')
var cookie_parser = require('cookie-parser')
var router = express.Router()
var cors = require('cors')
const multer = require('multer')
const uploadImage = require('./helpers/helpers')
const bodyParser = require('body-parser')
const path = require('path')

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')))
}

// GCS setup
const gc = require('./config/')
const bucket = gc.bucket('songhz')

var app = express()

/// ROUTERS ///
var artistRoutes = require('./routes/artistRoutes')
var songwriterRoutes = require('./routes/songwriterRoutes')
var songsRoutes = require('./routes/songsRoutes')
var songSelectorRoutes = require('./routes/songSelector')

/// SETUP MIDDLEWARE ///
app.use(cors())
app.use(express.json())
app.use(
    express.urlencoded({
        extended: false,
    })
)
app.use(cookie_parser())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

/// MAIN BODY ///

// ROUTERS
app.use(artistRoutes)
app.use(songwriterRoutes)
app.use(songsRoutes)
app.use(songSelectorRoutes)

/// MULTER ///
const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // no larger than 5mb.
    },
})

app.disable('x-powered-by')
app.use(multerMid.single('file'))

app.post('/uploads', (req, res, next) => {})

// FILE UPLOAD TO GCS
app.post('/uploads', async (req, res, next) => {
    try {
        const myFile = req.file
        const imageUrl = await uploadImage(myFile)
        res.status(200).json({
            message: 'Upload was successful',
            data: imageUrl,
        })
    } catch (error) {
        next(error)
    }
})

app.use((err, req, res, next) => {
    res.status(500).json({
        error: err,
        message: 'Internal server error',
    })
    next()
})

/// FILE ACCESS FROM GCS ///

// By artist name (directory name)
app.get('/gcs/:id', async (req, res) => {
    // get signed URL options
    const options = {
        version: 'v2',
        action: 'read',
        expires: Date.now() + 1000 * 60 * 60, // one hour access period
    }
    let urlCollection = []
    try {
        const [files] = await bucket.getFiles({ prefix: `${req.params.id}/` })
        for (const file of files) {
            let [url, metaData] = await Promise.all([
                bucket.file(file.name).getSignedUrl(options),
                bucket.file(file.name).getMetadata(),
            ])
            urlCollection.push([url, metaData[0]['metadata']])
        }

        res.json(urlCollection)
    } catch (error) {
        console.log(error.message)
    }
})

/// ---------- ERROR HANDLERS ---------- ///
app.use((req, res, next) => {
    next(createError(404))
})

app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.json({ error: err })
})

module.exports = app
