const { Pool } = require('pg')
require('dotenv').config()

const devConfig = {
    user: 'postgres',
    password: 'psqlpass',
    host: 'localhost',
    port: 5432,
    database: 'songhz',
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0,
}

const proConfig = {
    connectinoString: process.env.DATABASE_URL, // heroku addons
}

const pool = new Pool(
    process.env.NODE_ENV === 'production' ? proConfig : devConfig
)

module.exports = pool
