vue-plugin-debug

## Installation

```sh
npm install vue-plugin-debug
```

## Usage

```js

import VuePluginDebug from 'vue-plugin-debug';

// install
Vue.use(VuePluginDebug);

```

You can then use debug anywhere:

```js
// debug in the vue component
const debug = this.$debug.get('layout');
debug('page path: %s', 'hello-world');

// debug in the others
const debug = Vue.prototype.$debug.get('layout'); 
debug('page path: %s', 'hello-world');
```

## License

MIT