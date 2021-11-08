'use strict'

const airTemperature = require('../services/airTemperature')
const barometricPressure = require('../services/barometricPressure')
const soilMoisture = require('../services/soilMoisture')
const windSpeed = require('../services/windSpeed')

const express = require('express')

// Create express router
const router = express.Router()

// GET /
router.get('/:id', (req, res) => {
  res.json({
    id: req.params.id,
    airTemperature: airTemperature(),
    barometricPressure: barometricPressure(),
    windSpeed: windSpeed(),
    soilMoisture: soilMoisture(),
  })
})

// Export router
module.exports = router
