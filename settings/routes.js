'use strict'

module.exports = (app) => {
  const indexController = require('./../controllers/indexController')
  const usersController = require('./../controllers/UserController')

  app.route('/').get(indexController.index)
  app.route('/users').get(usersController.users)
  app.route('/users/add').post(usersController.add)
}