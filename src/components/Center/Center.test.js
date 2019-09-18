import createTestHelpers from '../../utils/test-helpers'
import Center from '.'

const helpers = createTestHelpers(expect, it, document)

it('renders without crashing', () => {
  helpers.rendersWithoutCrashing(Center)
})

it('renders children', () => {
  helpers.rendersChildren(Center)
})
