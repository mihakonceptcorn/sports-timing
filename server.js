const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000
const passport = require('passport')
const userRoutes = require('./routes/users')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(passport.initialize())
require('./middleware/passport')(passport)

userRoutes(app)

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))