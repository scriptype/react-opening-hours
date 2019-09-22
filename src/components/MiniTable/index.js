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
import css from './MiniTable.module.css'

function MiniTable({ id, title, data = [], modifiers = {} }) {
  const {
    isLiquid,
    isAnimated = true
  } = modifiers
  const tableClassNames = [css.table]
  if (isLiquid) {
    tableClassNames.push(css['is-liquid'])
  }
  if (isAnimated) {
    tableClassNames.push(css['is-animated'])
  }
  return (
    <table className={tableClassNames.join(' ')} id={id}>
      {title && (
        <caption className={css.caption}>{title}</caption>
      )}
      <tbody>
        {data.map((row, index) => (
          <tr key={row.label + index} style={{ '--row-index': index }} className={css.row}>
            <td className={`${css.cell} ${css['label-cell']} ${css.animatable}`}>
              {row.label} {row.labelDecorator}
            </td>
            <td className={`${css.cell} ${css['value-cell']} ${css.animatable}`}>
              {row.value} {row.valueDecorator}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

MiniTable.propTypes = {
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

export default MiniTable
