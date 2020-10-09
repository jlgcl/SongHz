const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'psqlpass',
    host: 'localhost',
    port: 5432,
    database: 'songhz',
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0,
})

module.exports = pool
