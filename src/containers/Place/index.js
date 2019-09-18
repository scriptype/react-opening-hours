import React, { useState, useEffect } from 'react'
import TimeTable from '../../components/TimeTable'
import PlaceModel from './model'

const model = new PlaceModel()

function Place({ placeId }) {
  const [place, setPlace] = useState({})

  useEffect(() => {
    model.setPlace(placeId).then(() => {
      setPlace(model.parse())
    })
  }, [placeId])

  console.log({ place })

  const data = [
    { label: 'Monday', valueDecorator: 'Closed' },
    { label: 'Tuesday', valueDecorator: 'Closed' },
    { label: 'Wednesday', valueDecorator: 'Closed' },
    { label: 'Thursday', valueDecorator: 'Closed' },
    { label: 'Friday', valueDecorator: 'Closed' },
    { label: 'Saturday', valueDecorator: 'Closed' },
    { label: 'Sunday', valueDecorator: 'Closed' }
  ]

  return <TimeTable title="Opening hours" data={data} />
}

export default Place
