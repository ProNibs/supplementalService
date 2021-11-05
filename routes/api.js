'use strict'

const express = require('express')

// Create express router
const router = express.Router()

// GET /
router.get('/:id', (req, res) => {
  res.json({
    id: req.params.id,
    airTemperature: 87.0,
    barometricPressure: 30.19,
    windSpeed: 4.7,
    soilMoisture: 65,
  })
})

// Export router
module.exports = router
