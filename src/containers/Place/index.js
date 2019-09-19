import React, { useState, useEffect } from 'react'
import TimeTable from '../../components/TimeTable'
import PlaceModel from './model'

const model = new PlaceModel()

function Place({ placeId }) {
  const [place, setPlace] = useState({})

  useEffect(() => {
    model.setPlace(placeId).then(() => {
      setPlace(model.data)
    })
  }, [placeId])

  console.log({ place })

  let openingHours
  if (place.openingHours) {
    openingHours = place.openingHours.map(day => {
      const value = day.openingHours.map(h => h.join(' - ')).join(', ')
      const valueDecorator = value ? '' : 'Closed'
      return {
        label: day.label,
        value,
        valueDecorator
      }
    })
  } else {
    openingHours = [
      { label: 'Monday', valueDecorator: 'Closed' },
      { label: 'Tuesday', valueDecorator: 'Closed' },
      { label: 'Wednesday', valueDecorator: 'Closed' },
      { label: 'Thursday', valueDecorator: 'Closed' },
      { label: 'Friday', valueDecorator: 'Closed' },
      { label: 'Saturday', valueDecorator: 'Closed' },
      { label: 'Sunday', valueDecorator: 'Closed' }
    ]
  }


  return <TimeTable title="Opening hours" data={openingHours} />
}

export default Place
