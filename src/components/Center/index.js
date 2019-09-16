import React from 'react'
import css from './Center.module.css'

function Center({ children }) {
  return <div className={css.container}>{children}</div>
}

export default Center
