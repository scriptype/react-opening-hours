import React from 'react'
import { string, number, arrayOf, exact } from 'prop-types'
import TimeTable from '../../components/TimeTable'
import { SkeletonText } from '../../components/Skeleton'
import {
  capitalize,
  isToday,
  parseSeconds,
  toTwelveHourClock,
  times
} from '../../utils/utils'

function createEmptyOpeningHours() {
  const day = () => ({
    label: <SkeletonText length={12} />,
    value: <SkeletonText length={8} />
  })

  return times(7, day)
}

function OpeningHours({ data = [] }) {
  const formattedOpeningHours = data.map((day, index) => {
    const values = day.openingHours.map(seconds => {
      return seconds
        .map(parseSeconds)
        .map(toTwelveHourClock)
        .join(' - ')
    })
    const valueDecorator = values.length ? '' : 'Closed'
    const labelDecorator = isToday(index) ? 'today' : ''
    return {
      label: capitalize(day.label),
      labelDecorator,
      value: values,
      valueDecorator
    }
  })

  const openingHours = data.length
    ? formattedOpeningHours
    : createEmptyOpeningHours()

  const modifiers = {}

  if (!data.length) {
    modifiers.isAnimated = false
  }

  return (
    <TimeTable
      id="opening-hours-table"
      title="Opening hours"
      data={openingHours}
      modifiers={modifiers} />
  )
}

OpeningHours.propTypes = {
  data: arrayOf(
    exact({
      label: string,
      openingHours: arrayOf(arrayOf(number))
    })
  )
}

export default OpeningHours
