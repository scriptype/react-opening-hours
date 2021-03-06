import { configure, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y';
import '@storybook/addon-console'
import '../src/style/index.css'

addDecorator(withA11y)

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module)
