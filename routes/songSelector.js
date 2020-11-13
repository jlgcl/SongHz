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
                    'SELECT title, count(*), artist FROM (SELECT UNNEST(array[($1), ($2), ($3)]) as tag, * FROM songs) as w WHERE labels @> array[tag] GROUP BY title, artist ORDER BY 2 DESC',
                    [req.body[0], req.body[1], req.body[2]]
                )
                break
            case 2:
                rows = await pool.query(
                    'SELECT title, count(*), artist FROM (SELECT UNNEST(array[($1), ($2)]) as tag, * FROM songs) as w WHERE labels @> array[tag] GROUP BY title, artist ORDER BY 2 DESC',
                    [req.body[0], req.body[1]]
                )
                break
            case 1:
                rows = await pool.query(
                    'SELECT title, count(*), artist FROM (SELECT UNNEST(array[($1)]) as tag, * FROM songs) as w WHERE labels @> array[tag] GROUP BY title, artist ORDER BY 2 DESC',
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
