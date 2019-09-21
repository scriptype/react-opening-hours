import React from 'react'
import TimeTable from '../../components/TimeTable'
import { SkeletonText } from '../../components/Skeleton'
import {
  capitalize,
  isToday,
  secondsToHours,
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
    const values = day.openingHours.map(hours => {
      return hours
        .map(secondsToHours)
        .map(toTwelveHourClock)
        .join(' - ')
    })
    const valueDecorator = !values.length && 'Closed'
    const labelDecorator = isToday(index) && 'today'
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

  return <TimeTable title="Opening hours" data={openingHours} />
}

export default OpeningHours