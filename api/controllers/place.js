const express = require('express')

const placeController = express.Router()

placeController.get('/', (req, res) => {
  res.json({ type: 'collection of places' })
})

placeController.get('/:placeId', (req, res) => {
  res.json({ description: `single place: ${req.params.placeId}` })
})

module.exports = placeController
