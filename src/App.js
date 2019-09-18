import React from 'react'
import Center from './components/Center'
import Place from './containers/Place'

function getRandomPlaceId() {
  return Math.round(Math.random() * 500)
}

function App() {
  return (
    <Center>
      <Place placeId={getRandomPlaceId()} />
    </Center>
  )
}

export default App
