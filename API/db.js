const {Pool} = require('pg')
const { database, password } = require('pg/lib/defaults')

const pool = new Pool({
    user: 'postgres',
    database: 'Olimp',
    host: 'localhost',
    port:5432,
    password:'123',
})

module.exports = pool;