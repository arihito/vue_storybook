import { configure } from '@storybook/vue';
import {setOptions} from '@storybook/addon-options'
import '../node_modules/bulma/css/bulma.css'

setOptions({
  hierarchyRootSeparator: /\|/,
})

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
