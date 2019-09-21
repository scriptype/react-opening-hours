module.exports = {

  'Opening hours data is properly shown in the page': function(browser) {
    browser
      .url('http://localhost:3000#4')
      .pause(1000)

    const expectTable = browser.expect.element('#opening-hours-table')
    expectTable.text.to.contain('Opening hours')

    const expectRow = (rowNumber) =>
      browser.expect.element(`#opening-hours-table tr:nth-child(${rowNumber})`)

    expectRow(1).text.to.contain('Monday')
    expectRow(1).text.to.contain('9 AM - 6 PM')

    expectRow(2).text.to.contain('Tuesday')
    expectRow(2).text.to.contain('9 AM - 6 PM')

    expectRow(3).text.to.contain('Wednesday')
    expectRow(3).text.to.contain('Closed')

    expectRow(4).text.to.contain('Thursday')
    expectRow(4).text.to.contain('9 AM - 12 PM')
    expectRow(4).text.to.contain('2 PM - 6 PM')

    expectRow(5).text.to.contain('Friday')
    expectRow(5).text.to.contain('8 PM - 3 AM')

    expectRow(6).text.to.contain('Saturday')
    expectRow(6).text.to.contain('8 PM - 3 AM')

    expectRow(7).text.to.contain('Sunday')
    expectRow(7).text.to.contain('8 PM - 3 AM')
  }

}
