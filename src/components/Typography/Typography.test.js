import createTestHelpers from '../../utils/test-helpers'
import css from './Typography.module.css'
import { H1, H2, H3, H4, P } from '.'

const helpers = createTestHelpers(expect, it, document)

/* ===
 * H1
 * == */

it('H1 renders without crashing', () => {
  helpers.rendersWithoutCrashing(H1)
})

it('H1 renders children', () => {
  helpers.rendersChildren(H1)
})

it('H1 passes through props', () => {
  helpers.passesThroughProps(H1)
})

it('H1 has dark mode', () => {
  helpers.hasDarkMode(H1, `${css.h1}.${css.dark}`)
})

/*
 * H2
 * */

it('H2 renders without crashing', () => {
  helpers.rendersWithoutCrashing(H2)
})

it('H2 renders children', () => {
  helpers.rendersChildren(H2)
})

it('H2 passes through props', () => {
  helpers.passesThroughProps(H2)
})

it('H2 has dark mode', () => {
  helpers.hasDarkMode(H2, `${css.h2}.${css.dark}`)
})

/*
 * H3
 * */

it('H3 renders without crashing', () => {
  helpers.rendersWithoutCrashing(H3)
})

it('H3 renders children', () => {
  helpers.rendersChildren(H3)
})

it('H3 passes through props', () => {
  helpers.passesThroughProps(H3)
})

it('H3 has dark mode', () => {
  helpers.hasDarkMode(H3, `${css.h3}.${css.dark}`)
})

/*
 * H4
 * */

it('H4 renders without crashing', () => {
  helpers.rendersWithoutCrashing(H4)
})

it('H4 renders children', () => {
  helpers.rendersChildren(H4)
})

it('H4 passes through props', () => {
  helpers.passesThroughProps(H4)
})

it('H4 has dark mode', () => {
  helpers.hasDarkMode(H4, `${css.h4}.${css.dark}`)
})

/*
 * P
 * */

it('P renders without crashing', () => {
  helpers.rendersWithoutCrashing(P)
})

it('P renders children', () => {
  helpers.rendersChildren(P)
})

it('P passes through props', () => {
  helpers.passesThroughProps(P)
})

it('P has dark mode', () => {
  helpers.hasDarkMode(P, `${css.p}.${css.dark}`)
})
