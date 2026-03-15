import { Fragment as _Fragment, mergeProps as _mergeProps, createVNode as _createVNode, createElementVNode as _createElementVNode } from "vue";
// Styles
import "./VTabs.css";

// Components
import { makeVTabProps, VTab } from "./VTab.js";
import { VTabsWindow } from "./VTabsWindow.js";
import { VTabsWindowItem } from "./VTabsWindowItem.js";
import { makeVSlideGroupProps, VSlideGroup } from "../VSlideGroup/VSlideGroup.js"; // Composables
import { useBackgroundColor } from "../../composables/color.js";
import { provideDefaults } from "../../composables/defaults.js";
import { makeDensityProps, useDensity } from "../../composables/density.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { useScopeId } from "../../composables/scopeId.js";
import { makeTagProps } from "../../composables/tag.js"; // Utilities
import { computed, toRef } from 'vue';
import { VTabsSymbol } from "./shared.js";
import { convertToUnit, genericComponent, isObject, pick, propsFactory, useRender } from "../../util/index.js"; // Types
function parseItems(items) {
  if (!items) return [];
  return items.map(item => {
    if (!isObject(item)) return {
      text: item,
      value: item
    };
    return item;
  });
}
export const makeVTabsProps = propsFactory({
  alignTabs: {
    type: String,
    default: 'start'
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: undefined
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...pick(makeVTabProps(), ['spaced']),
  ...makeVSlideGroupProps({
    mandatory: 'force',
    selectedClass: 'v-tab-item--selected'
  }),
  ...makeDensityProps(),
  ...makeTagProps()
}, 'VTabs');
export const VTabs = genericComponent()({
  name: 'VTabs',
  props: makeVTabsProps(),
  emits: {
    'update:modelValue': v => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const items = computed(() => parseItems(props.items));
    const {
      densityClasses
    } = useDensity(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      scopeId
    } = useScopeId();
    provideDefaults({
      VTab: {
        color: toRef(() => props.color),
        direction: toRef(() => props.direction),
        stacked: toRef(() => props.stacked),
        fixed: toRef(() => props.fixedTabs),
        sliderColor: toRef(() => props.sliderColor),
        hideSlider: toRef(() => props.hideSlider)
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      const hasWindow = !!(slots.window || props.items.length > 0);
      return _createElementVNode(_Fragment, null, [_createVNode(VSlideGroup, _mergeProps(slideGroupProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "class": ['v-tabs', `v-tabs--${props.direction}`, `v-tabs--align-tabs-${props.alignTabs}`, {
          'v-tabs--fixed-tabs': props.fixedTabs,
          'v-tabs--grow': props.grow,
          'v-tabs--stacked': props.stacked
        }, densityClasses.value, backgroundColorClasses.value, props.class],
        "style": [{
          '--v-tabs-height': convertToUnit(props.height)
        }, backgroundColorStyles.value, props.style],
        "role": "tablist",
        "symbol": VTabsSymbol
      }, scopeId, attrs), {
        default: () => [slots.default?.() ?? items.value.map(item => slots.tab?.({
          item
        }) ?? _createVNode(VTab, _mergeProps(item, {
          "key": item.text,
          "value": item.value,
          "spaced": props.spaced
        }), {
          default: slots[`tab.${item.value}`] ? () => slots[`tab.${item.value}`]?.({
            item
          }) : undefined
        }))]
      }), hasWindow && _createVNode(VTabsWindow, _mergeProps({
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "key": "tabs-window"
      }, scopeId), {
        default: () => [items.value.map(item => slots.item?.({
          item
        }) ?? _createVNode(VTabsWindowItem, {
          "value": item.value
        }, {
          default: () => slots[`item.${item.value}`]?.({
            item
          })
        })), slots.window?.()]
      })]);
    });
    return {};
  }
});
//# sourceMappingURL=VTabs.js.map