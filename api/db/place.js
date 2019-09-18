const mockOpeningHoursData = require('./opening-hours')

const { floor, random } = Math

const placeNames = [
  'Brooklyn Cafe',
  'Green Hippo',
  'Espresso House',
  'Robert\'s Coffee',
  'Cafe Eira',
  'The Old Skiffer',
  'Ravintola Sea Horse',
  'Ravintola Pontus',
  'Nar Cafe',
  'Via Tribunali',
  'Onda',
  'Bun2Bun',
  'Cafe Engel'
]

function createPlace(id, name) {
  return {
    id,
    name,
    openingHours: mockOpeningHoursData()
  }
}

function mockPlaceData(placeId) {
  const placeName = placeNames[floor(random() * placeNames.length)]
  return createPlace(placeId, placeName)
}

module.exports = mockPlaceData
