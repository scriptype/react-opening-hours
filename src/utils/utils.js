function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1)
}

function normalizedDayIndex(dayIndex) {
  // Make sunday the first day
  if (dayIndex === 6) {
    return 0
  }
  // Move other days one right
  return dayIndex + 1
}

function isToday(dayIndex) {
  const dayNumber = new Date().getDay()
  return normalizedDayIndex(dayIndex) === dayNumber
}

function secondsToHours(seconds) {
  const second = 1
  const minute = second * 60
  const hour = minute * 60

  const hours = seconds / hour
  return Math.floor(hours)
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
  normalizedDayIndex,
  isToday,
  secondsToHours,
  toTwelveHourClock,
  times
}
