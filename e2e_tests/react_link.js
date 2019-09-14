module.exports = {

  'React link is visible': function(browser) {
    browser.url('http://localhost:3000')
    return browser
      .expect
      .element('[data-test-name="react-link"]')
      .to.be.visible
  }

}
