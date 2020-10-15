var express = require('express')
var router = express.Router()
const pool = require('../db/index')

router.get('/artist', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM artists')
        res.json(rows)
    } catch (err) {
        res.json(err.message)
    }
})

router.get('/artist/:id', async (req, res) => {
    try {
        const { id } = req.params
        const {
            rows,
        } = await pool.query('SELECT * FROM artists WHERE name=($1)', [id])
        res.json(rows)
    } catch (err) {
        res.json(err.message)
    }
})

router.get('/artist/:id/discography', async (req, res) => {
    try {
        const { id } = req.params
        const {
            rows,
        } = await pool.query('SELECT * FROM discography WHERE artist=($1)', [
            id,
        ])
        res.json(rows)
    } catch (err) {
        res.json(err.message)
    }
})

router.get('/artist/:id/bio', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await pool.query('SELECT * FROM bio WHERE name=($1)', [
            id,
        ])
        res.json(rows[0])
    } catch (err) {
        res.json(err.message)
    }
})

module.exports = router
