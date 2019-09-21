import {
  capitalize,
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

describe('utils.isToday', () => {
  it('should return true if given dayIndex today\'s index', () => {
    // date.getDay() returns number starting from 1, so subtract 1
    const todayIndex = new Date().getDay() - 1
    expect(isToday(todayIndex)).toBe(true)
  })

  it('should return true if given dayIndex today\'s index', () => {
    const notTodayIndex = new Date().getDay() + 1
    expect(isToday(notTodayIndex)).toBe(false)
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
