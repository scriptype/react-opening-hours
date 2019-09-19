import { array, object, number, string } from 'yup'
import Api from '../../lib/api'

const openingHoursDaySchema = array().of(
  object().shape({
    type: string().oneOf(['open', 'close']).required(),
    value: number().required()
  })
)

const openingHoursSchema = object().shape({
  monday: openingHoursDaySchema,
  tuesday: openingHoursDaySchema,
  wednesday: openingHoursDaySchema,
  thursday: openingHoursDaySchema,
  friday: openingHoursDaySchema,
  saturday: openingHoursDaySchema,
  sunday: openingHoursDaySchema
})

const placeSchema = object().shape({
  id: number(),
  name: string(),
  openingHours: openingHoursSchema
})

class PlaceModel {
  constructor(data = {}) {
    this.data = data
    this.schema = placeSchema
  }

  fetch(placeId) {
    return Api.getPlace(placeId)
  }

  validate(data) {
    return this.schema.validate(data, { strict: true })
  }

  async setPlace(placeId) {
    const data = await this.fetch(placeId)
    try {
      await this.validate(data)
      this.data = {
        ...data,
        openingHours: this.parseOpeningHours(data.openingHours)
      }
      return this
    } catch (validationError) {
      console.error('PlaceModel validation error', validationError)
      throw validationError
    }
  }

  parseOpeningHours(rawOpeningHours) {
    const days = Object.keys(rawOpeningHours)
    return days.map((label, index) => {
      const day = rawOpeningHours[label]
      const nextDayName = days[index + 1] || days[0]
      const nextDay = rawOpeningHours[nextDayName]
      return {
        label,
        openingHours: parseHours(day, nextDay)
      }
    })
  }
}

function parseHours(day, nextDay) {
  return day.reduce((tuples, entry, entryIndex, entries) => {
    if (entry.type === 'close') {
      if (entryIndex === 0) {
        return tuples
      }
      // Append entry value to last tuple in tuples
      return Object.assign([], tuples, {
        [tuples.length - 1]: tuples[tuples.length - 1].concat(entry.value)
      })
    }
    // It's not last entry, just create a new tuple for the day
    if (entryIndex < entries.length - 1) {
      return tuples.concat([[entry.value]])
    }
    // It's the last entry and it's 'open', so find the 'close' in the next day
    return tuples.concat([[entry.value, nextDay[0].value]])
  }, [])
}

export default PlaceModel
