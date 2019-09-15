module.exports = {

  'Place description is correct': function(browser) {
    browser.url('http://localhost:3000')
    return browser
      .pause(1000)
      .assert.containsText(
        '[data-test-name="place-description"]',
        'single place: 345'
      )
  }

}
