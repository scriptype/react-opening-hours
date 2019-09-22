import React from 'react'
import { number } from 'prop-types'
import css from './Skeleton.module.css'

function SkeletonText({ length = 10, ...props }) {
  const content = ' '.repeat(length)
  return (
    <span className={css.text} {...props}>
      {content}
    </span>
  )
}

SkeletonText.propTypes = {
  length: number
}

export {
  SkeletonText
}
