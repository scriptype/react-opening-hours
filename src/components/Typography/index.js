import React from 'react'
import css from './Typography.module.css'

function H1({ children, className = '', dark, ...restProps }) {
  const classNames = [css.h1, className]
  if (dark) {
    classNames.push(css.dark)
  }
  return (
    <h1 className={classNames.join(' ')} {...restProps}>
      {children}
    </h1>
  )
}

function H2({ children, className = '', dark, ...restProps }) {
  const classNames = [css.h2, className]
  if (dark) {
    classNames.push(css.dark)
  }
  return (
    <h2 className={classNames.join(' ')} {...restProps}>
      {children}
    </h2>
  )
}

function H3({ children, className = '', dark, ...restProps }) {
  const classNames = [css.h3, className]
  if (dark) {
    classNames.push(css.dark)
  }
  return (
    <h3 className={classNames.join(' ')} {...restProps}>
      {children}
    </h3>
  )
}

function H4({ children, className = '', dark, ...restProps }) {
  const classNames = [css.h4, className]
  if (dark) {
    classNames.push(css.dark)
  }
  return (
    <h4 className={classNames.join(' ')} {...restProps}>
      {children}
    </h4>
  )
}

function P({ children, className = '', dark, ...restProps }) {
  const classNames = [css.p, className]
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
