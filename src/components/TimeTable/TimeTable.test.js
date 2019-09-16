import React from 'react'
import ReactDOM from 'react-dom'
import TimeTable from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TimeTable />, div)
  ReactDOM.unmountComponentAtNode(div)
})
