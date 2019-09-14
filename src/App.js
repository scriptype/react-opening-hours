import React from 'react'
import css from './App.module.css'

function App() {
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
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
