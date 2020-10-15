var express = require('express')
var router = express.Router()
const pool = require('../db/index')

router.get('/songwriter', async (req, res) => {
    try {
        const {
            rows
        } = await pool.query('SELECT * FROM songwriter')
        res.json(rows)
    } catch (err) {
        res.json(err.message)
    }
})

router.get('/songwriter/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const {
            rows,
        } = await pool.query('SELECT * FROM songwriter WHERE name=($1)', [id])
        res.json(rows)
    } catch (err) {
        res.json(err.message)
    }
})

router.get('/songwriter/:id/discography', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const {
            rows,
        } = await pool.query('SELECT * FROM discography WHERE name=($1)', [id])
        res.json(rows)
    } catch (err) {
        res.json(err.message)
    }
})

router.get('/songwriter/:id/bio', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const {
            rows
        } = await pool.query('SELECT * FROM bio WHERE name=($1)', [
            id,
        ])
        res.json(rows)
    } catch (err) {
        res.json(err.message)
    }
})

module.exports = router