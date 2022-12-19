const mysql = require('mysql')
const env = require('./dbenv')

const connection = mysql.createConnection({
  host: env.HOST,
  port: env.PORT,
  user: env.DBUSER,
  password: env.DBPASSWORD,
  database: env.DBNAME
})

connection.connect((error) => {
  if (error) {
    return console.log('DataBase connection error:', error)
  } else {
    return console.log('DataBase connection success!')
  }
})

module.exports = connection