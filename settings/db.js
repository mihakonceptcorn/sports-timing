const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'sports_timing'
})

connection.connect((error) => {
  if (error) {
    return console.log('DataBase connection error:', error)
  } else {
    return console.log('DataBase connection success!')
  }
})

module.exports = connection