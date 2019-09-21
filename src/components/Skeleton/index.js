import React from 'react'
import css from './Skeleton.module.css'

function SkeletonText({ length = 10, ...props }) {
  const content = ' '.repeat(length)
  return (
    <span className={css.text} {...props}>
      {content}
    </span>
  )
}

export {
  SkeletonText
}
