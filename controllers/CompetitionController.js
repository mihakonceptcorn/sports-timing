const db = require("../settings/db")
const response = require("../response")
const bcrypt = require("bcryptjs")

exports.getCompetitions = (req, res) => {
  const limit = req.params.limit || 20
  const skip = req.params.skip || 0
  const sql = 'SELECT `id`, `name`, `date`, `stages`, `rounds`, `finished` FROM `competitions` LIMIT ' + limit + ' OFFSET ' + skip + ''
  db.query(sql, (error, rows, fields) => {
    if (error) {
      response.status(400, error, res)
    } else {
      response.status(200, rows, res)
    }
  })
}

exports.getCompetitionById = (req, res) => {
  const sql = "SELECT `id`, `name`, `date`, `stages`, `rounds`, `finished` FROM `competitions` WHERE `id` = '" + req.params.id + "'"
  db.query(sql, (error, rows, fields) => {
    if (error) {
      response.status(400, error, res)
    } else {
      response.status(200, rows, res)
    }
  })
}

exports.createCompetition = (req, res) => {
  const name = req.body.name
  const date = req.body.date
  const stages = req.body.stages
  const rounds = req.body.rounds

  const sql = "INSERT INTO `competitions` (`name`, `date`, `stages`, `rounds`) VALUES('" + name + "', '" + date + "', '" + stages + "', '" + rounds + "')"

  db.query(sql, (error, results) => {
    if (error) {
      response.status(400, error, res)
    } else {
      response.status(200, {message: `Competition created successfully.`, results}, res)
    }
  })
}