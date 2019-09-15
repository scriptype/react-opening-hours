import React from 'react'
import ReactDOM from 'react-dom'
import RoundBox from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<RoundBox />, div)
  ReactDOM.unmountComponentAtNode(div)
})
