import React, { useState, useEffect } from 'react'
import { number } from 'prop-types'
import Center from '../../components/Center'
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

  return (
    <Center>
      <OpeningHours data={place.openingHours} />
    </Center>
  )
}

Place.propTypes = {
  placeId: number
}

export default Place
