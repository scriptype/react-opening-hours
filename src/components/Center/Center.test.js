import React from 'react'
import ReactDOM from 'react-dom'
import Center from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Center />, div)
  ReactDOM.unmountComponentAtNode(div)
})
