import React from 'react'
import { string } from 'prop-types'
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

RoundBox.propTypes = {
  className: string
}

export default RoundBox
