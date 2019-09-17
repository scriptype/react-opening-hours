import createTestHelpers from '../../utils/test-helpers'
import TimeTable from '.'

const helpers = createTestHelpers(expect, it, document)

it('renders without crashing', () => {
  helpers.rendersWithoutCrashing(TimeTable)
})
