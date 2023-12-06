import DebugInstance from 'debug';

let Vue;
// install
function install(_Vue, options) {
  if (Vue) return console.error('already installed.');

  Vue = _Vue;

  // caches
  const __debug_caches = {};

  // enabled
  const __debugEnabled = Vue.config.productionTip;

  // log
  if (__debugEnabled) {
    DebugInstance.log = console.log || (() => { });
  } else {
    DebugInstance.log = (() => { });
  }

  // debug
  const debug = {
    instance: DebugInstance,
    get(namespace) {
      if (!__debug_caches[namespace]) {
        __debug_caches[namespace] = DebugInstance(namespace);
        if (!__debugEnabled) {
          __debug_caches[namespace].enabled = false;
        }
      }
      return __debug_caches[namespace];
    },
  };

  // enable
  const namespaces = options && options.namespaces;
  DebugInstance.enable(namespaces);

  // $debug
  Vue.prototype.$debug = debug;

  return debug;
}

// export
export default {
  install,
};
