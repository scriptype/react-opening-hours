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
      <H1 className={css.title}>{content}</H1>
    </div>
  )
}

function decorateData(data) {
  return data.map(row => {
    const props = {}
    if (row.labelDecorator) {
      props.labelDecorator = (
        <span className={css['label-decorator']}>
          {row.labelDecorator}
        </span>
      )
    }
    if (row.valueDecorator) {
      props.valueDecorator = (
        <span className={css['value-decorator']}>
          {row.valueDecorator}
        </span>
      )
    }
    if (Array.isArray(row.value)) {
      props.value = row.value.map(value => (
        <span key={value} className={css['multi-line-value']}>
          {value}
        </span>
      ))
    }
    return {
      label: row.label,
      value: row.value,
      ...props
    }
  })
}

function TimeTable({ title, data = [], id }) {
  const decoratedData = decorateData(data)
  return (
    <RoundBox className={css.container}>
      <MiniTable
        id={id}
        modifiers={{ isLiquid: true }}
        title={Headline(title)}
        data={decoratedData} />
    </RoundBox>
  )
}

export default TimeTable
