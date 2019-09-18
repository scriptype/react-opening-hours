import { mixed, array, object, number, string } from 'yup'
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
      this.data = data
      return this
    } catch (validationError) {
      console.error('PlaceModel validation error', validationError)
      throw validationError
    }
  }

  parse() {
    // To be implemented
    return this.data
  }
}

export default PlaceModel
