import React from 'react'
import ReactDOM from 'react-dom'
import createTestHelpers from '../../utils/test-helpers'
import css from './MiniTable.module.css'
import MiniTable from '.'

const helpers = createTestHelpers(expect, it, document)

it('renders without crashing', () => {
  helpers.rendersWithoutCrashing(MiniTable)
})

it('renders title', () => {
  const props = {
    title: `My Table ${Math.random()}`
  }
  const div = document.createElement('div')
  ReactDOM.render(<MiniTable {...props} />, div)
  const caption = div.querySelector(`.${css.caption}`)
  expect(caption.innerHTML).toBe(props.title)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders correct number of rows', () => {
  const props = {
    data: [
      { label: 'row 1', value: 'is a thing' },
      { label: 'row 2', value: 'is also a thing' }
    ]
  }
  const div = document.createElement('div')
  ReactDOM.render(<MiniTable {...props} />, div)
  const rows = div.querySelectorAll(`.${css.row}`)
  expect(rows.length).toBe(props.data.length)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders labelDecorator', () => {
  const decoId = 'deco'
  const props = {
    data: [
      {
        label: 'row 1',
        value: 'is a thing'
      },
      {
        label: 'row 2',
        value: 'is also a thing',
        labelDecorator() {
          return <span id={decoId}>deco</span>
        }
      },
      {
        label: 'row 3',
        value: 'is yet another thing'
      }
    ]
  }
  const div = document.createElement('div')
  ReactDOM.render(<MiniTable {...props} />, div)
  const rows = div.querySelectorAll(`.${css.row}`)
  const decorator = rows[1].querySelector(`#${decoId}`)
  expect(decorator).toBeTruthy()
  ReactDOM.unmountComponentAtNode(div)
})

it('renders valueDecorator', () => {
  const decoId = 'deco'
  const props = {
    data: [
      {
        label: 'row 1',
        value: 'is a thing'
      },
      {
        label: 'row 2',
        value: 'is also a thing'
      },
      {
        label: 'row 3',
        value: 'is yet another thing',
        valueDecorator() {
          return <span id={decoId}>deco</span>
        }
      }
    ]
  }
  const div = document.createElement('div')
  ReactDOM.render(<MiniTable {...props} />, div)
  const rows = div.querySelectorAll(`.${css.row}`)
  const decorator = rows[2].querySelector(`#${decoId}`)
  expect(decorator).toBeTruthy()
  ReactDOM.unmountComponentAtNode(div)
})
