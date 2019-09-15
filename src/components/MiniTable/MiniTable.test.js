import React from 'react'
import ReactDOM from 'react-dom'
import MiniTable from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MiniTable />, div)
  ReactDOM.unmountComponentAtNode(div)
})
