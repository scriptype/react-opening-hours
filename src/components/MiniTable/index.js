import React from 'react'
import css from './MiniTable.module.css'

function MiniTable({ title, data = [], modifiers = {} }) {
  const { isLiquid } = modifiers
  const tableClassNames = [css.table]
  if (isLiquid) {
    tableClassNames.push(css['is-liquid'])
  }
  return (
    <table className={tableClassNames.join(' ')}>
      {title && (
        <caption className={css.caption}>{title}</caption>
      )}
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={css.row}>
            <td className={`${css.cell} ${css['label-cell']}`}>
              {row.label} {row.labelDecorator}
            </td>
            <td className={`${css.cell} ${css['value-cell']}`}>
              {row.value} {row.valueDecorator}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default MiniTable
