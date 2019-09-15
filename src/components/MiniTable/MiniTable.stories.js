import React from 'react'
import MiniTable from '.'

const data = [
  {
    label: 'Proper with number',
    value: 5
  },
  {
    label: 'Decorated value',
    value: 'foo',
    valueDecorator() {
      return <span>**</span>
    }
  },
  {
    label: 'Decorated label',
    labelDecorator() {
      return <span>**</span>
    },
    value: 'bar'
  },
  {
    label: '',
    labelDecorator() {
      return <span>Only Decoration Label</span>
    },
    value: 'proper value'
  },
  {
    label: 'Ipsum',
    value: '',
    valueDecorator() {
      return <span>Only Decoration value</span>
    }
  },
  {
    label: '',
    value: ''
  },
  {
    label: 'Above was',
    value: 'an empty row'
  }
]

export const basic = () => (
  <MiniTable data={data} />
)

export const liquidLayout = () => {
  const modifiers = {
    isLiquid: true
  }
  return <MiniTable data={data} modifiers={modifiers} />
}
