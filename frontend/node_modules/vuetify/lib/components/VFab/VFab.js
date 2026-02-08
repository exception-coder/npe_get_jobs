import { vShow as _vShow, mergeProps as _mergeProps, createVNode as _createVNode, withDirectives as _withDirectives, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VFab.css";

// Components
import { makeVBtnProps, VBtn } from "../VBtn/VBtn.js"; // Composables
import { makeLayoutItemProps, useLayoutItem } from "../../composables/layout.js";
import { makeLocationProps } from "../../composables/location.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { useResizeObserver } from "../../composables/resizeObserver.js";
import { useToggleScope } from "../../composables/toggleScope.js";
import { makeTransitionProps, MaybeTransition } from "../../composables/transition.js"; // Utilities
import { computed, ref, shallowRef, toRef, watchEffect } from 'vue';
import { genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVFabProps = propsFactory({
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  layout: Boolean,
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: true
  },
  ...omit(makeVBtnProps({
    active: true
  }), ['location', 'spaced']),
  ...makeLayoutItemProps(),
  ...makeLocationProps(),
  ...makeTransitionProps({
    transition: 'fab-transition'
  })
}, 'VFab');
export const VFab = genericComponent()({
  name: 'VFab',
  props: makeVFabProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const height = shallowRef(56);
    const layoutItemStyles = ref();
    const {
      resizeRef
    } = useResizeObserver(entries => {
      if (!entries.length) return;
      height.value = entries[0].target.clientHeight;
    });
    const hasPosition = toRef(() => props.app || props.absolute);
    const position = computed(() => {
      if (!hasPosition.value) return false;
      return props.location?.split(' ').shift() ?? 'bottom';
    });
    const orientation = computed(() => {
      if (!hasPosition.value) return false;
      return props.location?.split(' ')[1] ?? 'end';
    });
    useToggleScope(() => props.app, () => {
      const layout = useLayoutItem({
        id: props.name,
        order: computed(() => parseInt(props.order, 10)),
        position,
        layoutSize: computed(() => props.layout ? height.value + 24 : 0),
        elementSize: computed(() => height.value + 24),
        active: computed(() => props.app && model.value),
        absolute: toRef(() => props.absolute)
      });
      watchEffect(() => {
        layoutItemStyles.value = layout.layoutItemStyles.value;
      });
    });
    const vFabRef = ref();
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return _createElementVNode("div", {
        "ref": vFabRef,
        "class": _normalizeClass(['v-fab', {
          'v-fab--absolute': props.absolute,
          'v-fab--app': !!props.app,
          'v-fab--extended': props.extended,
          'v-fab--offset': props.offset,
          [`v-fab--${position.value}`]: hasPosition.value,
          [`v-fab--${orientation.value}`]: hasPosition.value
        }, props.class]),
        "style": _normalizeStyle([props.app ? {
          ...layoutItemStyles.value
        } : {
          height: props.absolute ? '100%' : 'inherit'
        }, props.style])
      }, [_createElementVNode("div", {
        "class": "v-fab__container"
      }, [_createVNode(MaybeTransition, {
        "appear": props.appear,
        "transition": props.transition
      }, {
        default: () => [_withDirectives(_createVNode(VBtn, _mergeProps({
          "ref": resizeRef
        }, btnProps, {
          "active": undefined,
          "location": undefined
        }), slots), [[_vShow, props.active]])]
      })])]);
    });
    return {};
  }
});
//# sourceMappingURL=VFab.js.map