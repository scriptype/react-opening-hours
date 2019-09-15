import React from 'react'
import css from './Typography.module.css'

function H1({ children, ...props }) {
  const classNames = [css.h1]
  if (props.dark) {
    classNames.push(css.dark)
  }
  return (
    <h1 className={classNames.join(' ')} {...props}>
      {children}
    </h1>
  )
}

function H2({ children, ...props }) {
  const classNames = [css.h2]
  if (props.dark) {
    classNames.push(css.dark)
  }
  return (
    <h2 className={classNames.join(' ')} {...props}>
      {children}
    </h2>
  )
}

function H3({ children, ...props }) {
  const classNames = [css.h3]
  if (props.dark) {
    classNames.push(css.dark)
  }
  return (
    <h3 className={classNames.join(' ')} {...props}>
      {children}
    </h3>
  )
}

function H4({ children, ...props }) {
  const classNames = [css.h4]
  if (props.dark) {
    classNames.push(css.dark)
  }
  return (
    <h4 className={classNames.join(' ')} {...props}>
      {children}
    </h4>
  )
}

function P({ children, ...props }) {
  const classNames = [css.p]
  if (props.dark) {
    classNames.push(css.dark)
  }
  return (
    <p className={classNames.join(' ')} {...props}>
      {children}
    </p>
  )
}

export {
  H1,
  H2,
  H3,
  H4,
  P
}
