var express = require('express')
var router = express.Router()
const pool = require('../db/index')

router.get('/songs', async (req, res) => {
    try {
        const {
            rows
        } = pool.query('SELECT * FROM songs')
        res.json(rows)
    } catch (err) {
        res.json(err.message)
    }
})

router.get('/songs/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const {
            rows
        } = pool.query('SELECT * FROM songs WHERE id=($1)', [id])
        res.json(rows)
    } catch (err) {
        res.json(err.message)
    }
})

module.exports = router