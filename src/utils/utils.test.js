import {
  capitalize,
  normalizedDayIndex,
  isToday,
  secondsToHours,
  toTwelveHourClock,
  times
} from './utils'

describe('utils.capitalize', () => {
  it('should capitalize the string', () => {
    expect(capitalize('lorem')).toBe('Lorem')
  })

  it('should have no effect on already capitalized string', () => {
    expect(capitalize('Lorem')).toBe('Lorem')
  })
})

describe('utils.normalizedDayIndex', () => {
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ]

  it('should return 0 for sunday', () => {
    const sundayIndex = days.indexOf('sunday')
    expect(normalizedDayIndex(sundayIndex)).toBe(0)
  })

  it('should return +1 for all other days', () => {
    const daysExceptSunday = days.filter(day => day !== 'sunday')
    daysExceptSunday.forEach((day, index) => {
      expect(normalizedDayIndex(index)).toBe(index + 1)
    })
  })
})

describe('utils.isToday', () => {
  it('should return true if given dayIndex today\'s index', () => {
    function mockToday(todayDate, todayIndex) {
      const OldDate = window.Date
      window.Date = function Date() {
        return new OldDate(todayDate)
      }
      expect(isToday(todayIndex)).toBe(true)
      window.Date = OldDate
    }

    const days = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday'
    ]

    days.forEach((day, index) => {
      // 01.03.2000 is a monday
      mockToday(`01.0${3 + index}.2000`, index)
    })
  })

  it('should return false if given dayIndex is not today\'s index', () => {
    function mockNotToday(notTodayDate, notTodayIndex) {
      const OldDate = window.Date
      window.Date = function Date() {
        return new OldDate(notTodayDate)
      }
      expect(isToday(notTodayIndex)).toBe(false)
      window.Date = OldDate
    }

    const days = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday'
    ]

    days.forEach((day, index) => {
      // 01.04.2000 is a wednesday
      mockNotToday(`01.0${5 + index}.2000`, index)

      // 01.02.2000 is a sunday
      mockNotToday(`01.0${2 + index}.2000`, index)
    })
  })
})

describe('utils.secondsToHours', () => {
  it('should convert given number as seconds to hours', () => {
    const conversions = {
      3600: 1,
      7200: 2
    }
    Object.keys(conversions).forEach(seconds => {
      expect(secondsToHours(seconds)).toBe(conversions[seconds])
    })
  })

  it('should floor the resulting hour', () => {
    const conversions = {
      3650: 1,
      7300: 2
    }
    Object.keys(conversions).forEach(seconds => {
      expect(secondsToHours(seconds)).toBe(conversions[seconds])
    })
  })
})

describe('utils.toTwelveHourClock', () => {
  it('should convert given hour to AM/PM', () => {
    const conversions = {
      0: '12 AM',
      3: '3 AM',
      12: '12 PM',
      18: '6 PM'
    }
    Object.keys(conversions).forEach(hour => {
      expect(toTwelveHourClock(hour)).toBe(conversions[hour])
    })
  })
})

describe('utils.times', () => {
  it('Should create array with as many elements as given, mapped to given fn', () => {
    const conversions = {
      0: 0,
      1: 1,
      2: 4,
      3: 9,
      4: 16,
      5: 25
    }
    const squares = times(6, i => i * i)
    expect(squares.length).toBe(6)
    Object.keys(conversions).forEach(index => {
      expect(squares[index]).toBe(conversions[index])
    })
  })
})
