// Utilities
import { computed, inject, provide, shallowRef, useId } from 'vue';

// Types

// Depth
export const DepthKey = Symbol.for('vuetify:depth');
export function useDepth(hasPrepend) {
  const parent = inject(DepthKey, shallowRef(-1));
  const depth = computed(() => parent.value + 1 + (hasPrepend?.value ? 1 : 0));
  provide(DepthKey, depth);
  return depth;
}

// List
export const ListKey = Symbol.for('vuetify:list');
export function createList() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    filterable: false
  };
  const parent = inject(ListKey, {
    filterable: false,
    hasPrepend: shallowRef(false),
    updateHasPrepend: () => null,
    trackingIndex: shallowRef(-1),
    navigationStrategy: shallowRef('focus'),
    uid: ''
  });
  const {
    filterable,
    trackingIndex = parent.trackingIndex,
    navigationStrategy = parent.navigationStrategy,
    uid = parent.uid || useId()
  } = options;
  const data = {
    filterable: parent.filterable || filterable,
    hasPrepend: shallowRef(false),
    updateHasPrepend: value => {
      if (value) data.hasPrepend.value = value;
    },
    trackingIndex,
    navigationStrategy,
    uid
  };
  provide(ListKey, data);
  return parent;
}
export function useList() {
  return inject(ListKey, null);
}
//# sourceMappingURL=list.js.map