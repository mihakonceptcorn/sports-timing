'use strict'

const usersController = require("../controllers/UserController");
module.exports = (app) => {
  const usersController = require('./../controllers/UserController')

  app
    .route('/api/users')
    .get(usersController.getAllUsers)

  app
    .route('/api/auth/signup')
    .post(usersController.signup)

  app
    .route('/api/auth/signin')
    .get(usersController.signin)
}