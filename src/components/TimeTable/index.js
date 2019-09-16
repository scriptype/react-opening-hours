import React from 'react'
import RoundBox from '../RoundBox'
import MiniTable from '../MiniTable'
import { H1 } from '../Typography'
import { ReactComponent as TimeIcon } from '../Icons/time.svg'
import css from './TimeTable.module.css'

function Headline(content) {
  return (
    <div className={css.headline}>
      <TimeIcon className={css.icon} />
      <H1>{content}</H1>
    </div>
  )
}

function decorateData(data) {
  return data.map(row => {
    const decorators = {}
    if (row.labelDecorator) {
      decorators.labelDecorator = () => (
        <span className={css['label-decorator']}>
          {row.labelDecorator}
        </span>
      )
    }
    if (row.valueDecorator) {
      decorators.valueDecorator = () => (
        <span className={css['value-decorator']}>
          {row.valueDecorator}
        </span>
      )
    }
    return {
      label: row.label,
      value: row.value,
      ...decorators
    }
  })
}

function TimeTable({ title, data }) {
  const decoratedData = decorateData(data)
  return (
    <RoundBox>
      <MiniTable title={Headline(title)} data={decoratedData} />
    </RoundBox>
  )
}

export default TimeTable
