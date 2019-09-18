const express = require('express')
const mockPlaceData = require('../db/place')

const placeController = express.Router()

placeController.get('/', (req, res) => {
  res.status(501).json({ error: 'Not Implemented' })
})

placeController.get('/:placeId', (req, res) => {
  const { placeId } = req.params
  const formattedPlaceId = Number(placeId)
  if (!formattedPlaceId) {
    return res.status(400).json({ error: 'Incorrect type for place id' })
  }
  const place = mockPlaceData(formattedPlaceId)
  res.json(place)
})

module.exports = placeController
