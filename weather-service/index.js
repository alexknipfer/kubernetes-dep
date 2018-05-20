const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const getWeatherByZip = require('./api/getWeatherByZip')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/api/getWeatherByZip/', getWeatherByZip)

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Invoice service running on ${port}`)
})
