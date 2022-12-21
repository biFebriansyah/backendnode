const { Pool } = require('pg')

const pool = new Pool({
    user: 'user_db',
    host: 'localhost',
    database: 'db_name',
    password: 'db_password',
    port: 5432
})

module.exports = pool
