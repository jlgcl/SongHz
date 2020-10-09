var express = require('express')
var http_errors = require('http-errors')
var cookie_parser = require('cookie-parser')
var router = express.Router()
var cors = require('cors')
var multer = require('multer')
const bodyParser = require('body-parser')

var app = express()

/// ROUTERS ///
var artistRoutes = require('./routes/artistRoutes')
var songwriterRoutes = require('./routes/songwriterRoutes')
var songsRoutes = require('./routes/songsRoutes')

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
app.use(artistRoutes);
app.use(songwriterRoutes);
app.use(songsRoutes);

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