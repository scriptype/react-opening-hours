import createTestHelpers from '../../utils/test-helpers'
import RoundBox from '.'

const helpers = createTestHelpers(expect, it, document)

it('renders without crashing', () => {
  helpers.rendersWithoutCrashing(RoundBox)
})

it('renders children', () => {
  helpers.rendersChildren(RoundBox)
})

it('passes through props', () => {
  helpers.passesThroughProps(RoundBox)
})
