import React from 'react'
import css from './Typography.module.css'

function H1({ children, dark, ...restProps }) {
  const classNames = [css.h1]
  if (dark) {
    classNames.push(css.dark)
  }
  return (
    <h1 className={classNames.join(' ')} {...restProps}>
      {children}
    </h1>
  )
}

function H2({ children, dark, ...restProps }) {
  const classNames = [css.h2]
  if (dark) {
    classNames.push(css.dark)
  }
  return (
    <h2 className={classNames.join(' ')} {...restProps}>
      {children}
    </h2>
  )
}

function H3({ children, dark, ...restProps }) {
  const classNames = [css.h3]
  if (dark) {
    classNames.push(css.dark)
  }
  return (
    <h3 className={classNames.join(' ')} {...restProps}>
      {children}
    </h3>
  )
}

function H4({ children, dark, ...restProps }) {
  const classNames = [css.h4]
  if (dark) {
    classNames.push(css.dark)
  }
  return (
    <h4 className={classNames.join(' ')} {...restProps}>
      {children}
    </h4>
  )
}

function P({ children, dark, ...restProps }) {
  const classNames = [css.p]
  if (dark) {
    classNames.push(css.dark)
  }
  return (
    <p className={classNames.join(' ')} {...restProps}>
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
