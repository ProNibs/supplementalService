'use strict'

const express = require('express')

// Create the server
const server = express()

// Pull in environment variables
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3001;

// Start the server
server.listen(PORT, error => {
  if (error) {
    console.error(error)
  } else {
    console.log('Started at http://'+HOSTNAME+':'+PORT)
  }
})

server.use('/api/v1', [require('./routes/api')])
