import { createVNode as _createVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VList.css";

// Components
import { VListChildren } from "./VListChildren.js"; // Composables
import { createList } from "./list.js";
import { makeBorderProps, useBorder } from "../../composables/border.js";
import { useBackgroundColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { provideDefaults } from "../../composables/defaults.js";
import { makeDensityProps, useDensity } from "../../composables/density.js";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.js";
import { makeElevationProps, useElevation } from "../../composables/elevation.js";
import { IconValue } from "../../composables/icons.js";
import { makeItemsProps } from "../../composables/list-items.js";
import { makeNestedProps, useNested } from "../../composables/nested/nested.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js";
import { makeVariantProps } from "../../composables/variant.js"; // Utilities
import { computed, ref, shallowRef, toRef, useId, watch } from 'vue';
import { convertToUnit, EventProp, focusChild, genericComponent, getPropertyFromItem, isPrimitive, omit, propsFactory, useRender } from "../../util/index.js"; // Types
const itemTypes = new Set(['item', 'divider', 'subheader']);
function transformItem(props, item) {
  const title = isPrimitive(item) ? item : getPropertyFromItem(item, props.itemTitle);
  const value = isPrimitive(item) ? item : getPropertyFromItem(item, props.itemValue, undefined);
  const children = getPropertyFromItem(item, props.itemChildren);
  const itemProps = props.itemProps === true ? omit(item, ['children']) : getPropertyFromItem(item, props.itemProps);
  let type = getPropertyFromItem(item, props.itemType, 'item');
  if (!itemTypes.has(type)) {
    type = 'item';
  }
  const _props = {
    title,
    value,
    ...itemProps
  };
  return {
    type,
    title: _props.title,
    value: _props.value,
    props: _props,
    children: type === 'item' && children ? transformItems(props, children) : undefined,
    raw: item
  };
}
function transformItems(props, items) {
  const array = [];
  for (const item of items) {
    array.push(transformItem(props, item));
  }
  return array;
}
export function useListItems(props) {
  const items = computed(() => transformItems(props, props.items));
  return {
    items
  };
}
export const makeVListProps = propsFactory({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  filterable: Boolean,
  expandIcon: IconValue,
  collapseIcon: IconValue,
  lines: {
    type: [Boolean, String],
    default: 'one'
  },
  slim: Boolean,
  prependGap: [Number, String],
  indent: [Number, String],
  nav: Boolean,
  navigationStrategy: {
    type: String,
    default: 'focus'
  },
  navigationIndex: Number,
  'onClick:open': EventProp(),
  'onClick:select': EventProp(),
  'onUpdate:opened': EventProp(),
  ...makeNestedProps({
    selectStrategy: 'single-leaf',
    openStrategy: 'list'
  }),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeItemsProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: 'text'
  })
}, 'VList');
export const VList = genericComponent()({
  name: 'VList',
  props: makeVListProps(),
  emits: {
    'update:selected': value => true,
    'update:activated': value => true,
    'update:opened': value => true,
    'update:navigationIndex': value => true,
    'click:open': value => true,
    'click:activate': value => true,
    'click:select': value => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const {
      items
    } = useListItems(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      borderClasses
    } = useBorder(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      children,
      open,
      parents,
      select,
      getPath
    } = useNested(props, {
      items,
      returnObject: toRef(() => props.returnObject),
      scrollToActive: toRef(() => props.navigationStrategy === 'track')
    });
    const lineClasses = toRef(() => props.lines ? `v-list--${props.lines}-line` : undefined);
    const activeColor = toRef(() => props.activeColor);
    const baseColor = toRef(() => props.baseColor);
    const color = toRef(() => props.color);
    const isSelectable = toRef(() => props.selectable || props.activatable);
    const navigationIndex = useProxiedModel(props, 'navigationIndex', -1, v => v ?? -1);
    const uid = useId();
    createList({
      filterable: props.filterable,
      trackingIndex: navigationIndex,
      navigationStrategy: toRef(() => props.navigationStrategy),
      uid
    });
    watch(items, () => {
      if (props.navigationStrategy === 'track') {
        navigationIndex.value = -1;
      }
    });
    provideDefaults({
      VListGroup: {
        activeColor,
        baseColor,
        color,
        expandIcon: toRef(() => props.expandIcon),
        collapseIcon: toRef(() => props.collapseIcon)
      },
      VListItem: {
        activeClass: toRef(() => props.activeClass),
        activeColor,
        baseColor,
        color,
        density: toRef(() => props.density),
        disabled: toRef(() => props.disabled),
        lines: toRef(() => props.lines),
        nav: toRef(() => props.nav),
        slim: toRef(() => props.slim),
        variant: toRef(() => props.variant),
        tabindex: toRef(() => props.navigationStrategy === 'track' ? -1 : undefined)
      }
    });
    const isFocused = shallowRef(false);
    const contentRef = ref();
    function onFocusin(e) {
      isFocused.value = true;
    }
    function onFocusout(e) {
      isFocused.value = false;
    }
    function onFocus(e) {
      if (props.navigationStrategy === 'track') {
        if (!~navigationIndex.value) {
          navigationIndex.value = getNextIndex('first');
        }
      } else if (!isFocused.value && !(e.relatedTarget && contentRef.value?.contains(e.relatedTarget))) focus();
    }
    function onBlur() {
      if (props.navigationStrategy === 'track') {
        navigationIndex.value = -1;
      }
    }
    function getNavigationDirection(key) {
      switch (key) {
        case 'ArrowDown':
          return 'next';
        case 'ArrowUp':
          return 'prev';
        case 'Home':
          return 'first';
        case 'End':
          return 'last';
        default:
          return null;
      }
    }
    function getNextIndex(direction) {
      const itemCount = items.value.length;
      if (itemCount === 0) return -1;
      let nextIndex;
      if (direction === 'first') {
        nextIndex = 0;
      } else if (direction === 'last') {
        nextIndex = itemCount - 1;
      } else {
        nextIndex = navigationIndex.value + (direction === 'next' ? 1 : -1);
        if (nextIndex < 0) nextIndex = itemCount - 1;
        if (nextIndex >= itemCount) nextIndex = 0;
      }
      const startIndex = nextIndex;
      let attempts = 0;
      while (attempts < itemCount) {
        const item = items.value[nextIndex];
        if (item && item.type !== 'divider' && item.type !== 'subheader') {
          return nextIndex;
        }
        nextIndex += direction === 'next' || direction === 'first' ? 1 : -1;
        if (nextIndex < 0) nextIndex = itemCount - 1;
        if (nextIndex >= itemCount) nextIndex = 0;
        if (nextIndex === startIndex) return -1;
        attempts++;
      }
      return -1;
    }
    function onKeydown(e) {
      const target = e.target;
      if (!contentRef.value || target.tagName === 'INPUT' && ['Home', 'End'].includes(e.key) || target.tagName === 'TEXTAREA') {
        return;
      }
      const direction = getNavigationDirection(e.key);
      if (direction !== null) {
        e.preventDefault();
        if (props.navigationStrategy === 'track') {
          const nextIndex = getNextIndex(direction);
          if (nextIndex !== -1) {
            navigationIndex.value = nextIndex;
          }
        } else {
          focus(direction);
        }
      }
    }
    function onMousedown(e) {
      isFocused.value = true;
    }
    function focus(location) {
      if (contentRef.value) {
        return focusChild(contentRef.value, location);
      }
    }
    useRender(() => {
      const indent = props.indent ?? (props.prependGap ? Number(props.prependGap) + 24 : undefined);
      const ariaMultiselectable = isSelectable.value ? attrs.ariaMultiselectable ?? !String(props.selectStrategy).startsWith('single-') : undefined;
      return _createVNode(props.tag, {
        "ref": contentRef,
        "class": _normalizeClass(['v-list', {
          'v-list--disabled': props.disabled,
          'v-list--nav': props.nav,
          'v-list--slim': props.slim
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, props.class]),
        "style": _normalizeStyle([{
          '--v-list-indent': convertToUnit(indent),
          '--v-list-group-prepend': indent ? '0px' : undefined,
          '--v-list-prepend-gap': convertToUnit(props.prependGap)
        }, backgroundColorStyles.value, dimensionStyles.value, props.style]),
        "tabindex": props.disabled ? -1 : 0,
        "role": isSelectable.value ? 'listbox' : 'list',
        "aria-activedescendant": props.navigationStrategy === 'track' && navigationIndex.value >= 0 ? `v-list-item-${uid}-${navigationIndex.value}` : undefined,
        "aria-multiselectable": ariaMultiselectable,
        "onFocusin": onFocusin,
        "onFocusout": onFocusout,
        "onFocus": onFocus,
        "onBlur": onBlur,
        "onKeydown": onKeydown,
        "onMousedown": onMousedown
      }, {
        default: () => [_createVNode(VListChildren, {
          "items": items.value,
          "returnObject": props.returnObject
        }, slots)]
      });
    });
    return {
      open,
      select,
      focus,
      children,
      parents,
      getPath,
      navigationIndex
    };
  }
});
//# sourceMappingURL=VList.js.map