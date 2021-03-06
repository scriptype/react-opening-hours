import React from 'react'
import {
  string,
  number,
  arrayOf,
  bool,
  shape,
  oneOfType,
  element
} from 'prop-types'
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

function TimeTable({ id, title, data = [], modifiers = {} }) {
  const defaultModifiers = {
    isLiquid: true,
    isAnimated: true
  }
  const decoratedData = decorateData(data)
  return (
    <RoundBox className={css.container}>
      <MiniTable
        id={id}
        title={Headline(title)}
        data={decoratedData}
        modifiers={Object.assign({}, defaultModifiers, modifiers)} />
    </RoundBox>
  )
}

TimeTable.propTypes = {
  id: string,
  title: oneOfType([string, element]),
  data: arrayOf(
    shape({
      label: oneOfType([string, number, element]),
      value: oneOfType([
        string,
        number,
        element,
        arrayOf(oneOfType([string, number, element]))
      ]),
      labelDecorator: oneOfType([string, element]),
      valueDecorator: oneOfType([string, element])
    })
  ),
  modifiers: shape({
    isLiquid: bool,
    isAnimated: bool
  })
}

export default TimeTable
