const db = require("../settings/db")
const response = require("../response")

exports.getCompetitorsByCompetitionId = (req, res) => {
  const sql = "SELECT * FROM `competitors` WHERE `competition_id` = '" + req.params.competitionId + "'"
  db.query(sql, (error, rows, fields) => {
    if (error) {
      response.status(400, error, res)
    } else {
      response.status(200, rows, res)
    }
  })
}

exports.addCompetitor = (req, res) => {
  console.log(req.body)
  const competitionId = req.body.competitionId
  const name = req.body.name
  const secondName = req.body.secondName
  const gender = req.body.gender
  const category = req.body.category
  const dob = req.body.dob
  const team = req.body.team
  const country = req.body.country
  const region = req.body.region
  const locality = req.body.locality
  const competitionNumber = req.body.competitionNumber

  const sql = "INSERT INTO `competitors` (`competition_id`, `name`, `second_name`, `gender`, `category`, `dob`, `team`, `country`, `region`, `locality`, `competition_number`)" +
    "VALUES('" + competitionId + "', '" + name + "', '" + secondName + "', '" + gender + "', '" + category + "', '" + dob + "', '" + team + "', '" + country + "', '" + region + "', '" + locality + "', '" + competitionNumber + "')"

  db.query(sql, (error, result) => {
    if (error) {
      response.status(400, error, res)
    } else {
      response.status(200, {message: `Competitor added successfully.`, result}, res)
    }
  })
}