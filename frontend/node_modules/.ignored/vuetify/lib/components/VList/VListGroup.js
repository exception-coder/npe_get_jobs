import { createVNode as _createVNode, vShow as _vShow, createElementVNode as _createElementVNode, withDirectives as _withDirectives, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Components
import { VExpandTransition } from "../transitions/index.js";
import { VDefaultsProvider } from "../VDefaultsProvider/index.js"; // Composables
import { useList } from "./list.js";
import { makeComponentProps } from "../../composables/component.js";
import { IconValue } from "../../composables/icons.js";
import { useNestedGroupActivator, useNestedItem } from "../../composables/nested/nested.js";
import { useSsrBoot } from "../../composables/ssrBoot.js";
import { makeTagProps } from "../../composables/tag.js";
import { MaybeTransition } from "../../composables/transition.js"; // Utilities
import { computed } from 'vue';
import { defineComponent, genericComponent, propsFactory, useRender } from "../../util/index.js";
const VListGroupActivator = defineComponent({
  name: 'VListGroupActivator',
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    useNestedGroupActivator();
    return () => slots.default?.();
  }
});
export const makeVListGroupProps = propsFactory({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: IconValue,
    default: '$collapse'
  },
  disabled: Boolean,
  expandIcon: {
    type: IconValue,
    default: '$expand'
  },
  rawId: [String, Number],
  prependIcon: IconValue,
  appendIcon: IconValue,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...makeComponentProps(),
  ...makeTagProps()
}, 'VListGroup');
export const VListGroup = genericComponent()({
  name: 'VListGroup',
  props: makeVListGroupProps(),
  setup(props, _ref2) {
    let {
      slots
    } = _ref2;
    const {
      isOpen,
      open,
      id: _id
    } = useNestedItem(() => props.value, () => props.disabled, true);
    const id = computed(() => `v-list-group--id-${String(props.rawId ?? _id.value)}`);
    const list = useList();
    const {
      isBooted
    } = useSsrBoot();
    function onClick(e) {
      if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) return;
      open(!isOpen.value, e);
    }
    const activatorProps = computed(() => ({
      onClick,
      class: 'v-list-group__header',
      id: id.value
    }));
    const toggleIcon = computed(() => isOpen.value ? props.collapseIcon : props.expandIcon);
    const activatorDefaults = computed(() => ({
      VListItem: {
        activeColor: props.activeColor,
        baseColor: props.baseColor,
        color: props.color,
        prependIcon: props.prependIcon || props.subgroup && toggleIcon.value,
        appendIcon: props.appendIcon || !props.subgroup && toggleIcon.value,
        title: props.title,
        value: props.value
      }
    }));
    useRender(() => _createVNode(props.tag, {
      "class": _normalizeClass(['v-list-group', {
        'v-list-group--prepend': list?.hasPrepend.value,
        'v-list-group--fluid': props.fluid,
        'v-list-group--subgroup': props.subgroup,
        'v-list-group--open': isOpen.value
      }, props.class]),
      "style": _normalizeStyle(props.style)
    }, {
      default: () => [slots.activator && _createVNode(VDefaultsProvider, {
        "defaults": activatorDefaults.value
      }, {
        default: () => [_createVNode(VListGroupActivator, null, {
          default: () => [slots.activator({
            props: activatorProps.value,
            isOpen: isOpen.value
          })]
        })]
      }), _createVNode(MaybeTransition, {
        "transition": {
          component: VExpandTransition
        },
        "disabled": !isBooted.value
      }, {
        default: () => [_withDirectives(_createElementVNode("div", {
          "class": "v-list-group__items",
          "role": "group",
          "aria-labelledby": id.value
        }, [slots.default?.()]), [[_vShow, isOpen.value]])]
      })]
    }));
    return {
      isOpen
    };
  }
});
//# sourceMappingURL=VListGroup.js.map