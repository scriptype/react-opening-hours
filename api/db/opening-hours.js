const { floor, random } = Math

// Collection of dummy opening hours data
const collection = [

  {
    monday: [],
    tuesday: [
      { type: 'open', value: 36000 },
      { type: 'close', value: 64800 }
    ],
    wednesday: [],
    thursday: [
      { type: 'open', value: 36000 },
      { type: 'close', value: 64800 }
    ],
    friday: [{ type: 'open', value: 36000 }],
    saturday: [
      { type: 'close', value: 3600 },
      { type: 'open', value: 36000 }
    ],
    sunday: [
      { type: 'close', value: 3600 },
      { type: 'open', value: 43200 },
      { type: 'close', value: 75600 }
    ]
  }

]

function mockOpeningHoursData() {
  return collection[floor(random() * collection.length)]
}

module.exports = mockOpeningHoursData
