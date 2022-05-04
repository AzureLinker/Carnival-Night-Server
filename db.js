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
