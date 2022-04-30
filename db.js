const Pool = require('pg').Pool
const pool = new Poll({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: "5432",
    database: "Promitey"
})

module.exports = pool
