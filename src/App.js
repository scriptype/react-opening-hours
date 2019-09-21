import React from 'react'
import Place from './containers/Place'

function getRandomPlaceId() {
  return Math.round(Math.random() * 500)
}

function App() {
  return <Place placeId={getRandomPlaceId()} />
}

export default App
