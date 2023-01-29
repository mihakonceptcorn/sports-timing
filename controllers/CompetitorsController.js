const db = require("../settings/db")
const response = require("../response")

exports.addCompetitor = (req, res) => {
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

  const sql = "INSERT INTO `competitors` (`competitionId`, `name`, `secondName`, `gender`, `category`, `dob`, `team`, `country`, `region`, `locality`, `competitionNumber`)" +
    "VALUES('" + competitionId + "', '" + name + "', '" + secondName + "', '" + gender + "', '" + category + "', '" + dob + "', '" + team + "', '" + country + "', '" + region + "', '" + locality + "', '" + competitionNumber + "')"

  db.query(sql, (error, result) => {
    if (error) {
      response.status(400, error, res)
    } else {
      response.status(200, {message: `Competitor added successfully.`, result}, res)
    }
  })
}