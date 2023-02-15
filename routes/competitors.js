const passport = require("passport")
const competitorsController = require("../controllers/CompetitorsController")
module.exports = (app) => {
  app
    .route('/api/competitors/:competitionId')
    .get(
      passport.authenticate('jwt', { session: false }),
      competitorsController.getCompetitorsByCompetitionId
    )

  app
    .route('/api/competitors/add')
    .post(
      passport.authenticate('jwt', { session: false }),
      competitorsController.addCompetitor
    )
}
