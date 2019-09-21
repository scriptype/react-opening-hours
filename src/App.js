import React from 'react'
import Place from './containers/Place'

function getRandomPlaceId() {
  return Math.round(Math.random() * 500)
}

function getPlaceId() {
  return document.location.hash.slice(1) || getRandomPlaceId()
}

function App() {
  return <Place placeId={getPlaceId()} />
}

export default App
