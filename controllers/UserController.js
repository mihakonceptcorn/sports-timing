const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('./../settings/config')

const response = require('./../response')
const db = require('./../settings/db')

exports.getAllUsers = (req, res) => {
  const sql = 'SELECT `id`, `name`, `second_name`, `email` FROM `users`'
  db.query(sql, (error, rows, fields) => {
    if (error) {
      response.status(400, error, res)
    } else {
      response.status(200, rows, res)
    }
  })
}

exports.getUserById = (req, res) => {
  const sql = "SELECT `id`, `name`, `second_name`, `email` FROM `users` WHERE `id` = '" + req.params.id + "'"
  db.query(sql, (error, rows, fields) => {
    if (error) {
      response.status(400, error, res)
    } else {
      response.status(200, rows, res)
    }
  })
}

exports.signup = (req, res) => {
  db.query("SELECT `id`, `email`, `name` FROM `users` WHERE `email` = '" + req.body.email + "'", (error, rows, fields) => {
    if (error) {
      response.status(400, error, res)
    } else if (typeof rows !== 'undefined' && rows.length) {
      const row = JSON.parse(JSON.stringify(rows))
      row.map(rw => {
        response.status(302, {message: `User with email ${rw.email} exists!`}, res)
        return true
      })
    } else {
      const name = req.body.name
      const secondName = req.body.second_name ?? ''
      const email = req.body.email
      const salt = bcrypt.genSaltSync(15)
      const password = bcrypt.hashSync(req.body.password, salt)

      const sql = "INSERT INTO `users` (`name`, `second_name`, `email`, `password`) VALUES('" + name + "', '" + secondName + "', '" + email + "', '" + password + "')"

      db.query(sql, (error, results) => {
        if (error) {
          response.status(400, error, res)
        } else {
          response.status(200, {message: `Registration success.`, results}, res)
        }
      })
    }
  })
}

exports.signin = (req, res) => {
  db.query("SELECT `id`, `email`, `password` FROM `users` WHERE `email` = '" + req.body.email + "'", (error, rows, fields) => {
    if (error) {
      response.status(400, error, res)
    } else if (!rows.length) {
      response.status(401, {message: `User ${req.body.email} not found.`}, res)
    } else {
      const row = JSON.parse(JSON.stringify(rows))
      row.map(rw => {
        const password = bcrypt.compareSync(req.body.password, rw.password)
        if (password) {
          const token = jwt.sign(
            {
              userId: rw.id,
              email: rw.email
            },
            config.jwt,
            { expiresIn: 120 * 120 }
          )
          response.status(200, {token: `Bearer ${token}`}, res)
        } else {
          response.status(401, {message: `Wrong password.`}, res)
        }

        return true
      })
    }
  })
}