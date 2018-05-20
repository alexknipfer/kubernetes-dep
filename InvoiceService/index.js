const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const getWeatherByZip = require('./api/getWeatherByZip')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/api/getWeatherByZip/', getWeatherByZip)

app.get('/api/invoices/:id', (req, res) => {
  const id = parseInt(req.params.id)
  res.json({
    id: id,
    ref: `INV-${id}`,
    amount: id * 100,
    balance: id * 100 - 10
  })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Invoice service running on ${port}`)
})
