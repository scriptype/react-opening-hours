import React from 'react'
import ReactDOM from 'react-dom'
import { H1, H2, H3, H4, P } from '.'

it('H1 renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<H1 />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('H2 renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<H2 />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('H3 renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<H3 />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('H4 renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<H4 />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('P renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<P />, div)
  ReactDOM.unmountComponentAtNode(div)
})
