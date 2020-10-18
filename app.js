var express = require('express')
var http_errors = require('http-errors')
var cookie_parser = require('cookie-parser')
var router = express.Router()
var cors = require('cors')
const multer = require('multer')
const uploadImage = require('./helpers/helpers')
const bodyParser = require('body-parser')

var app = express()

/// ROUTERS ///
var artistRoutes = require('./routes/artistRoutes')
var songwriterRoutes = require('./routes/songwriterRoutes')
var songsRoutes = require('./routes/songsRoutes')

/// SETUP MIDDLEWARE ///
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

// FILE UPLOAD TO GCP
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

/// MAIN BODY ///

// ROUTERS
app.use(artistRoutes)
app.use(songwriterRoutes)
app.use(songsRoutes)

// route to song/album controller
// song selector controller

/// ---------- ERROR HANDLERS ---------- ///
app.use((req, res, next) => {
    next(createError(404))
})

app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
