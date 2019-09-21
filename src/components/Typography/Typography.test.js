import createTestHelpers from '../../utils/test-helpers'
import css from './Typography.module.css'
import { H1, H2, H3, H4, P } from '.'

const helpers = createTestHelpers(expect, it, document)

describe('H1', () => {
  it('renders without crashing', () => {
    helpers.rendersWithoutCrashing(H1)
  })

  it('renders children', () => {
    helpers.rendersChildren(H1)
  })

  it('passes through props', () => {
    helpers.passesThroughProps(H1)
  })

  it('has dark mode', () => {
    helpers.hasDarkMode(H1, `${css.h1}.${css.dark}`)
  })
})

describe('H2', () => {
  it('renders without crashing', () => {
    helpers.rendersWithoutCrashing(H2)
  })

  it('renders children', () => {
    helpers.rendersChildren(H2)
  })

  it('passes through props', () => {
    helpers.passesThroughProps(H2)
  })

  it('has dark mode', () => {
    helpers.hasDarkMode(H2, `${css.h2}.${css.dark}`)
  })
})

describe('H3', () => {
  it('renders without crashing', () => {
    helpers.rendersWithoutCrashing(H3)
  })

  it('renders children', () => {
    helpers.rendersChildren(H3)
  })

  it('passes through props', () => {
    helpers.passesThroughProps(H3)
  })

  it('has dark mode', () => {
    helpers.hasDarkMode(H3, `${css.h3}.${css.dark}`)
  })
})

describe('H4', () => {
  it('renders without crashing', () => {
    helpers.rendersWithoutCrashing(H4)
  })

  it('renders children', () => {
    helpers.rendersChildren(H4)
  })

  it('passes through props', () => {
    helpers.passesThroughProps(H4)
  })

  it('has dark mode', () => {
    helpers.hasDarkMode(H4, `${css.h4}.${css.dark}`)
  })
})

describe('P', () => {
  it('renders without crashing', () => {
    helpers.rendersWithoutCrashing(P)
  })

  it('renders children', () => {
    helpers.rendersChildren(P)
  })

  it('passes through props', () => {
    helpers.passesThroughProps(P)
  })

  it('has dark mode', () => {
    helpers.hasDarkMode(P, `${css.p}.${css.dark}`)
  })
})
