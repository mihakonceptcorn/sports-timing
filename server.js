const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000
const passport = require('passport')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(passport.initialize())
require('./middleware/passport')(passport)

const routes = require('./settings/routes')
routes(app)

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))