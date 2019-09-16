import React from 'react'
import TimeTable from '.'

export const openingHours = () => {
  const data = [
    { label: 'Monday', value: '', valueDecorator: 'Closed' },
    { label: 'Tuesday', value: '10 AM - 6 PM' },
    { label: 'Wednesday', value: '', valueDecorator: 'Closed' },
    { label: 'Thursday', value: '10 AM - 6 PM' },
    { label: 'Friday', value: '10 AM - 1 AM', labelDecorator: 'Today' },
    { label: 'Saturday', value: '10 AM - 1 AM' },
    { label: 'Sunday', value: '12 PM - 9 PM' }
  ]
  return <TimeTable title="Opening hours" data={data} />
}
