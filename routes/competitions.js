const passport = require("passport")
const competitionController = require("../controllers/CompetitionController")
module.exports = (app) => {
  app
    .route('/api/competitions')
    .get(passport.authenticate('jwt', { session: false }), competitionController.getCompetitions)

  app
    .route('/api/competition/:id')
    .get(passport.authenticate('jwt', { session: false }), competitionController.getCompetitionById)

  app
    .route('/api/competition/create')
    .post(passport.authenticate('jwt', { session: false }), competitionController.createCompetition)
}