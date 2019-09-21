import React, { useState, useEffect } from 'react'
import OpeningHours from './OpeningHours'
import PlaceModel from './model'

const model = new PlaceModel()

function Place({ placeId }) {
  const [place, setPlace] = useState({})

  useEffect(() => {
    model.setPlace(placeId).then(() => {
      setPlace(model.data)
    })
  }, [placeId])

  return <OpeningHours data={place.openingHours} />
}

export default Place
