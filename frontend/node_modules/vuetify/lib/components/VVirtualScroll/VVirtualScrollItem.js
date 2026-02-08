import { Fragment as _Fragment, createElementVNode as _createElementVNode, mergeProps as _mergeProps } from "vue";
// Composables
import { makeComponentProps } from "../../composables/component.js";
import { useResizeObserver } from "../../composables/resizeObserver.js"; // Utilities
import { watch } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVVirtualScrollItemProps = propsFactory({
  renderless: Boolean,
  ...makeComponentProps()
}, 'VVirtualScrollItem');
export const VVirtualScrollItem = genericComponent()({
  name: 'VVirtualScrollItem',
  inheritAttrs: false,
  props: makeVVirtualScrollItemProps(),
  emits: {
    'update:height': height => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      resizeRef,
      contentRect
    } = useResizeObserver(undefined, 'border');
    watch(() => contentRect.value?.height, height => {
      if (height != null) emit('update:height', height);
    });
    useRender(() => props.renderless ? _createElementVNode(_Fragment, null, [slots.default?.({
      itemRef: resizeRef
    })]) : _createElementVNode("div", _mergeProps({
      "ref": resizeRef,
      "class": ['v-virtual-scroll__item', props.class],
      "style": props.style
    }, attrs), [slots.default?.()]));
  }
});
//# sourceMappingURL=VVirtualScrollItem.js.map