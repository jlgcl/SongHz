var express = require('express')
var router = express.Router()
var { body, vadliationResult, sanitizeBody } = require('express-validator')
const pool = require('../db/index')

router.post('/songselect', async (req, res) => {
    try {
        let rows
        switch (req.body.length) {
            case 3:
                rows = await pool.query(
                    'SELECT title from songs ORDER BY (CASE WHEN ($1)=ANY(labels) THEN 1 ELSE 0 END + CASE WHEN ($2)=ANY(labels) THEN 1 ELSE 0 END + CASE WHEN ($3)=ANY(labels) THEN 1 ELSE 0 END) DESC',
                    [req.body[0], req.body[1], req.body[2]]
                )
                break
            case 2:
                rows = await pool.query(
                    'SELECT title from songs ORDER BY (CASE WHEN ($1)=ANY(labels) THEN 1 ELSE 0 END + CASE WHEN ($2)=ANY(labels) THEN 1 ELSE 0 END) DESC',
                    [req.body[0], req.body[1]]
                )
                break
            case 1:
                rows = await pool.query(
                    'SELECT title from songs ORDER BY (CASE WHEN ($1)=ANY(labels) THEN 1 ELSE 0 END) DESC',
                    [req.body[0]]
                )
                break
        }
        res.json(rows['rows'])
    } catch (err) {
        res.json(err.message)
    }
})

module.exports = router
