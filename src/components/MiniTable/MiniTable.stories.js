import React from 'react'
import Center from '../Center'
import MiniTable from '.'
import { H1 } from '../Typography'

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
  <Center>
    <MiniTable title="Basic Table" data={data} />
  </Center>
)

export const dynamicCaption = () => (
  <Center>
    <MiniTable title={<H1>Table Caption with H1</H1>} data={data} />
  </Center>
)

export const liquidLayout = () => {
  const modifiers = {
    isLiquid: true
  }
  return (
    <Center>
      <MiniTable title="Liquid Table" data={data} modifiers={modifiers} />
    </Center>
  )
}
