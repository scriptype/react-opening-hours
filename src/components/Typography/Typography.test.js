import createTestHelpers from '../../utils/test-helpers'
import css from './Typography.module.css'
import { H1, H2, H3, H4, P } from '.'

const helpers = createTestHelpers(expect, it, document)

it('H1 renders without crashing', () => {
  helpers.rendersWithoutCrashing(H1)
})

it('H1 has dark mode', () => {
  helpers.hasDarkMode(H1, `${css.h1}.${css.dark}`)
})

it('H1 passes through props', () => {
  helpers.passesThroughProps(H1)
})

it('H2 renders without crashing', () => {
  helpers.rendersWithoutCrashing(H2)
})

it('H2 has dark mode', () => {
  helpers.hasDarkMode(H2, `${css.h2}.${css.dark}`)
})

it('H2 passes through props', () => {
  helpers.passesThroughProps(H2)
})

it('H3 renders without crashing', () => {
  helpers.rendersWithoutCrashing(H3)
})

it('H3 has dark mode', () => {
  helpers.hasDarkMode(H3, `${css.h3}.${css.dark}`)
})

it('H3 passes through props', () => {
  helpers.passesThroughProps(H3)
})

it('H4 renders without crashing', () => {
  helpers.rendersWithoutCrashing(H4)
})

it('H4 has dark mode', () => {
  helpers.hasDarkMode(H4, `${css.h4}.${css.dark}`)
})

it('H4 passes through props', () => {
  helpers.passesThroughProps(H4)
})

it('P renders without crashing', () => {
  helpers.rendersWithoutCrashing(P)
})

it('P has dark mode', () => {
  helpers.hasDarkMode(P, `${css.p}.${css.dark}`)
})

it('P passes through props', () => {
  helpers.passesThroughProps(P)
})
