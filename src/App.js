import React, { useState, useEffect } from 'react'
import css from './App.module.css'

function App() {
  const [place, setPlace] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/places/345')
      .then(res => res.json())
      .then(setPlace)
  }, [])

  return (
    <div className={css.container}>
      <header className={css.header}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={css.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-test-name="react-link"
        >
          Learn React
        </a>
        <pre data-test-name="place-description">{place.description}</pre>
      </header>
    </div>
  )
}

export default App
