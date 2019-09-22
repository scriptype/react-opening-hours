import React from 'react'
import Place from './containers/Place'

function getRandomPlaceId() {
  return Math.round(Math.random() * 500)
}

function getPlaceId() {
  const hash = document.location.hash
  if (hash) {
    return Number(hash.slice(1))
  }
  return getRandomPlaceId()
}

function App() {
  return <Place placeId={getPlaceId()} />
}

export default App
