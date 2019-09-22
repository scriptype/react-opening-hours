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
  },

  {
    monday: [
      { type: 'close', value: 3600 }
    ],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [{ type: 'open', value: 79200 }],
    saturday: [
      { type: 'close', value: 14400 },
      { type: 'open', value: 75600 }
    ],
    sunday: [
      { type: 'close', value: 7200 },
      { type: 'open', value: 72000 }
    ]
  },

  {
    monday: [
      { type: 'open', value: 28800 },
      { type: 'close', value: 64800 }
    ],
    tuesday: [
      { type: 'open', value: 28800 },
      { type: 'close', value: 64800 }
    ],
    wednesday: [
      { type: 'open', value: 28800 },
      { type: 'close', value: 64800 }
    ],
    thursday: [
      { type: 'open', value: 28800 },
      { type: 'close', value: 64800 }
    ],
    friday: [
      { type: 'open', value: 36000 },
      { type: 'close', value: 57600 }
    ],
    saturday: [
      { type: 'open', value: 43200 },
      { type: 'close', value: 54000 }
    ],
    sunday: []
  },

  {
    monday: [
      { type: 'close', value: 10800 },
      { type: 'open', value: 39600 }
    ],
    tuesday: [
      { type: 'close', value: 10800 },
      { type: 'open', value: 39600 }
    ],
    wednesday: [
      { type: 'close', value: 10800 },
      { type: 'open', value: 39600 }
    ],
    thursday: [
      { type: 'close', value: 10800 },
      { type: 'open', value: 39600 }
    ],
    friday: [
      { type: 'close', value: 10800 },
      { type: 'open', value: 39600 }
    ],
    saturday: [
      { type: 'close', value: 10800 },
      { type: 'open', value: 57600 }
    ],
    sunday: [
      { type: 'close', value: 10800 },
      { type: 'open', value: 57600 }
    ]
  },

  {
    monday: [
      { type: 'close', value: 10800 },
      { type: 'open', value: 32400 },
      { type: 'close', value: 64800 }
    ],
    tuesday: [
      { type: 'open', value: 32400 },
      { type: 'close', value: 64800 }
    ],
    wednesday: [],
    thursday: [
      { type: 'open', value: 32400 },
      { type: 'close', value: 43200 },
      { type: 'open', value: 52200 },
      { type: 'close', value: 65100 }
    ],
    friday: [
      { type: 'open', value: 72000 }
    ],
    saturday: [
      { type: 'close', value: 10800 },
      { type: 'open', value: 72000 }
    ],
    sunday: [
      { type: 'close', value: 10800 },
      { type: 'open', value: 72000 }
    ]
  }

]

function mockOpeningHoursData(index) {
  if (typeof index === 'number' && collection[index]) {
    return collection[index]
  }
  return collection[floor(random() * collection.length)]
}

module.exports = mockOpeningHoursData
