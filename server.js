const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const routes = require('./settings/routes')
routes(app)

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))