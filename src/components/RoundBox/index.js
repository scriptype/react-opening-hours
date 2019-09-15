import React from 'react'
import css from './RoundBox.module.css'

function Box({ children }) {
  return (
    <section className={css.container}>
      {children}
    </section>
  )
}

export default Box
