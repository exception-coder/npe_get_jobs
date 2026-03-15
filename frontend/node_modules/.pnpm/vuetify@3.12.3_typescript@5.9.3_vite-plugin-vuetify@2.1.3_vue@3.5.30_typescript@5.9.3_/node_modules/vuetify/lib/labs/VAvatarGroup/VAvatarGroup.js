import { createVNode as _createVNode, Fragment as _Fragment, mergeProps as _mergeProps, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VAvatarGroup.css";

// Components
import { VAvatar } from "../../components/VAvatar/index.js";
import { VDefaultsProvider } from "../../components/VDefaultsProvider/index.js"; // Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeTagProps } from "../../composables/tag.js"; // Utilities
import { computed } from 'vue';
import { convertToUnit, genericComponent, getPropertyFromItem, isObject, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVAvatarGroupProps = propsFactory({
  border: [Boolean, Number, String],
  gap: [Number, String],
  hoverable: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: null
  },
  limit: [Number, String],
  overflowText: String,
  reverse: Boolean,
  size: [Number, String],
  vertical: Boolean,
  ...makeComponentProps(),
  ...makeTagProps()
}, 'VAvatarGroup');
export const VAvatarGroup = genericComponent()({
  name: 'VAvatarGroup',
  props: makeVAvatarGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const limit = computed(() => props.limit !== null ? Number(props.limit) : null);
    const overflow = computed(() => {
      return limit.value && !isNaN(limit.value) && props.items.length > limit.value ? Math.max(0, props.items.length - limit.value + 1) : 0;
    });
    const items = computed(() => {
      const visibleItems = limit.value && overflow.value > 1 ? props.items.slice(0, limit.value - 1) : props.items;
      const orderedItems = props.reverse ? visibleItems.toReversed() : visibleItems;
      return orderedItems.map(item => {
        const avatarProps = props.itemProps === true ? isObject(item) ? item : {
          image: item
        } : getPropertyFromItem(item, props.itemProps, item);
        if (avatarProps != null) return avatarProps;
        if (!isObject(item)) return {
          image: item
        };
        return item;
      });
    });
    const overflowText = computed(() => props.overflowText ?? (overflow.value ? `+${overflow.value}` : ''));
    const overflowItem = () => slots.overflow?.({
      overflow: overflow.value
    }) ?? _createVNode(VAvatar, {
      "class": "v-avatar-group__overflow",
      "text": overflowText.value
    }, null);
    useRender(() => _createVNode(props.tag, {
      "class": _normalizeClass(['v-avatar-group', `v-avatar-group--${props.vertical ? 'vertical' : 'horizontal'}`, {
        'v-avatar-group--hoverable': props.hoverable,
        'v-avatar-group--reverse': props.reverse
      }, props.class]),
      "style": _normalizeStyle([{
        '--v-avatar-group-gap': convertToUnit(props.gap)
      }, props.style])
    }, {
      default: () => [slots.prepend?.(), _createElementVNode("div", {
        "class": "v-avatar-group__content"
      }, [_createVNode(VDefaultsProvider, {
        "defaults": {
          VAvatar: {
            size: props.size,
            border: props.border
          }
        }
      }, {
        default: () => [slots.default?.() ?? _createElementVNode(_Fragment, null, [props.reverse && overflowText.value && overflowItem(), items.value.map((item, index) => slots.item?.({
          props: item,
          index
        }) ?? _createVNode(VAvatar, _mergeProps({
          "key": index
        }, item), null)), !props.reverse && overflowText.value && overflowItem()])]
      })]), slots.append?.()]
    }));
    return {};
  }
});
//# sourceMappingURL=VAvatarGroup.js.map