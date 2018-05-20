const express = require('express')
const router = express.Router()
const OpenWeatherClient = require('../clients/OpenWeatherClient')

router.get('/:zipCode', async (req, res) => {
  const zipCode = req.params.zipCode
  const weather = await OpenWeatherClient.getWeatherByZip(zipCode)
  res.json({ weather })
})

module.exports = router
