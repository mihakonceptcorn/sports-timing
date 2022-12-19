'use strict'

const response = require('./../response')
const db = require('./../settings/db')

exports.users = (req, res) => {
  const sql = 'SELECT * FROM `users`'
  db.query(sql, (error, rows, fields) => {
    if (error) {
      console.log(error)
    } else {
      response.status(rows, res)
    }
  })
}

exports.add = (req, res) => {
  const name = req.query.name
  const second_name = req.query.second_name
  const email = req.query.email
  const sql = "INSERT INTO `users` (`name`, `second_name`, `email`) VALUES('" + name + "', '" + second_name + "', '" + email + "')"
  db.query(sql, (error, results) => {
    if (error) {
      console.log(error)
    } else {
      response.status(results, res)
    }
  })
}