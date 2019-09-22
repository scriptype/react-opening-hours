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

function parseSeconds(seconds) {
  const second = 1
  const minute = second * 60
  const hour = minute * 60

  const hours = seconds / hour
  const minutes = (seconds % hour) / minute
  return {
    hours: Math.floor(hours),
    minutes: Math.floor(minutes)
  }
}

function toTwelveHourClock({ hours, minutes }) {
  const time = [(hours % 12) || 12]
  if (minutes > 0) {
    time.push(`0${minutes}`.slice(-2))
  }
  const suffix = hours < 12 ? 'AM' : 'PM'
  return [time.join(':'), suffix].join(' ')
}

function times(howMany, toWhat) {
  return [...Array(howMany).keys()].map(toWhat)
}

export {
  capitalize,
  normalizedDayIndex,
  isToday,
  parseSeconds,
  toTwelveHourClock,
  times
}
