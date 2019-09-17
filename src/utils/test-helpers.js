import React from 'react'
import ReactDOM from 'react-dom'

function createTestHelpers(expect, it, document) {
  return {
    rendersWithoutCrashing(Component) {
      const div = document.createElement('div')
      ReactDOM.render(<Component />, div)
      ReactDOM.unmountComponentAtNode(div)
    },

    hasDarkMode(Component, darkClassName) {
      const div = document.createElement('div')
      ReactDOM.render(<Component dark={true} />, div)
      expect(div.querySelector(darkClassName)).toBeTruthy()
      ReactDOM.unmountComponentAtNode(div)
    },

    passesThroughProps(Component) {
      const div = document.createElement('div')
      ReactDOM.render(<Component id="lorem" className="ipsum" />, div)
      const selector = '#lorem.ipsum'
      expect(div.querySelector(selector)).toBeTruthy()
      ReactDOM.unmountComponentAtNode(div)
    }
  }
}

export default createTestHelpers
