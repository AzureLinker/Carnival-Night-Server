<<<<<<< HEAD
const { Client } = require('pg')
const client = new Client({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: "5432",
    database: "promitey"
})
client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  })

module.exports = client
=======
const Pool = require('pg').Pool
const pool = new Poll({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: "5432",
    database: "Promitey"
})

module.exports = pool
>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
