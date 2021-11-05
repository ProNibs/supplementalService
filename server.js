'use strict'

const express = require('express')

// Create the server
const server = express()

// Start the server
server.listen(3001, error => {
  if (error) {
    console.error(error)
  } else {
    console.log('Started at http://localhost:3001')
  }
})

server.use('/api/v1', [require('./routes/api')])
