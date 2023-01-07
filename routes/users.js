const passport = require("passport");
const usersController = require("../controllers/UserController");
module.exports = (app) => {
  app
    .route('/api/auth/signup')
    .post(usersController.signup)

  app
    .route('/api/auth/signin')
    .post(usersController.signin)

  app
    .route('/api/users')
    .get(passport.authenticate('jwt', { session: false }), usersController.getAllUsers)

  app
    .route('/api/user/:id')
    .get(passport.authenticate('jwt', { session: false }), usersController.getUserById)
}