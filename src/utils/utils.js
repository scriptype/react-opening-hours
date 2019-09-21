function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1)
}

function isToday(dayIndex) {
  return dayIndex === new Date().getDay() - 1
}

function secondsToHours(seconds) {
  const second = 1
  const minute = second * 60
  const hour = minute * 60

  const hours = seconds / hour
  return hours
}

function toTwelveHourClock(hour) {
  const newHour = (hour % 12) || 12
  const suffix = hour < 12 ? 'AM' : 'PM'
  return `${newHour} ${suffix}`
}

function times(howMany, toWhat) {
  return [...Array(howMany).keys()].map(toWhat)
}

export {
  capitalize,
  isToday,
  secondsToHours,
  toTwelveHourClock,
  times
}
