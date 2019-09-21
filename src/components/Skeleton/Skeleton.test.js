import React from 'react'
import ReactDOM from 'react-dom'
import createTestHelpers from '../../utils/test-helpers'
import { SkeletonText } from '.'

const helpers = createTestHelpers(expect, it, document)

it('SkeletonText renders without crashing', () => {
  helpers.rendersWithoutCrashing(SkeletonText)
})

it('SkeletonText passes through props', () => {
  helpers.passesThroughProps(SkeletonText)
})

it('SkeletonText renders content with the given length', () => {
  const props = {
    id: 'my-skeleton',
    length: Math.round(Math.random() * 100)
  }
  const div = document.createElement('div')
  ReactDOM.render(<SkeletonText {...props} />, div)
  const element = div.querySelector(`#${props.id}`)
  expect(element.innerHTML.length).toBe(props.length)
  ReactDOM.unmountComponentAtNode(div)
})
