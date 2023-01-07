const mysql = require('mysql')
const config = require('./config')

const connection = mysql.createPool({
  host: config.HOST,
  port: config.PORT,
  user: config.DBUSER,
  password: config.DBPASSWORD,
  database: config.DBNAME,
  connectionLimit: 10
})

connection.on('connect', function () {
  return console.log('DB Connection established')
})

connection.on('error', function (err) {
  return console.error(new Date(), 'MySQL error', err.code)
})

connection.on('close', function (err) {
  return console.error(new Date(), 'MySQL close', err)
})

module.exports = connection