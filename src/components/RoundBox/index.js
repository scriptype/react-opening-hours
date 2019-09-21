import React from 'react'
import css from './RoundBox.module.css'

function RoundBox({ children, className, ...props }) {
  const classes = [
    css.container,
    className
  ]
  return (
    <section className={classes.join(' ')} {...props}>
      {children}
    </section>
  )
}

export default RoundBox
