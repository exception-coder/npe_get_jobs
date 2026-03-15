import { Fragment as _Fragment, createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps } from "vue";
// Styles
import "./VStepper.css";

// Components
import { VStepperSymbol } from "./shared.js";
import { makeVStepperActionsProps, VStepperActions } from "./VStepperActions.js";
import { VStepperHeader } from "./VStepperHeader.js";
import { VStepperItem } from "./VStepperItem.js";
import { VStepperWindow } from "./VStepperWindow.js";
import { VStepperWindowItem } from "./VStepperWindowItem.js";
import { VDivider } from "../VDivider/index.js";
import { makeVSheetProps, VSheet } from "../VSheet/VSheet.js"; // Composables
import { provideDefaults } from "../../composables/defaults.js";
import { makeDisplayProps, useDisplay } from "../../composables/display.js";
import { makeGroupProps, useGroup } from "../../composables/group.js";
import { IconValue } from "../../composables/icons.js"; // Utilities
import { computed, toRefs } from 'vue';
import { genericComponent, getPropertyFromItem, pick, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeStepperProps = propsFactory({
  altLabels: Boolean,
  bgColor: String,
  completeIcon: IconValue,
  editIcon: IconValue,
  editable: Boolean,
  errorIcon: IconValue,
  hideActions: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: 'title'
  },
  itemValue: {
    type: [String, Array, Function],
    default: 'value'
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: 'props'
  },
  nonLinear: Boolean,
  flat: Boolean,
  ...makeDisplayProps()
}, 'Stepper');
export const makeVStepperProps = propsFactory({
  ...makeStepperProps(),
  ...makeGroupProps({
    mandatory: 'force',
    selectedClass: 'v-stepper-item--selected'
  }),
  ...makeVSheetProps(),
  ...pick(makeVStepperActionsProps(), ['prevText', 'nextText'])
}, 'VStepper');
export const VStepper = genericComponent()({
  name: 'VStepper',
  props: makeVStepperProps(),
  emits: {
    'update:modelValue': v => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      items: _items,
      next,
      prev,
      selected
    } = useGroup(props, VStepperSymbol);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const {
      completeIcon,
      editIcon,
      errorIcon,
      color,
      editable,
      prevText,
      nextText
    } = toRefs(props);
    const items = computed(() => props.items.map((item, index) => {
      const title = getPropertyFromItem(item, props.itemTitle, item);
      const value = getPropertyFromItem(item, props.itemValue, index + 1);
      const itemProps = props.itemProps === true ? item : getPropertyFromItem(item, props.itemProps);
      const _props = {
        title,
        value,
        ...itemProps
      };
      return {
        title: _props.title,
        value: _props.value,
        props: _props,
        raw: item
      };
    }));
    const activeIndex = computed(() => {
      return _items.value.findIndex(item => selected.value.includes(item.id));
    });
    const disabled = computed(() => {
      if (props.disabled) return props.disabled;
      if (activeIndex.value === 0) return 'prev';
      if (activeIndex.value === _items.value.length - 1) return 'next';
      return false;
    });
    provideDefaults({
      VStepperItem: {
        editable,
        errorIcon,
        completeIcon,
        editIcon,
        prevText,
        nextText
      },
      VStepperActions: {
        color,
        disabled,
        prevText,
        nextText
      }
    });
    useRender(() => {
      const sheetProps = VSheet.filterProps(props);
      const hasHeader = !!(slots.header || props.items.length);
      const hasWindow = props.items.length > 0;
      const hasActions = !props.hideActions && !!(hasWindow || slots.actions);
      return _createVNode(VSheet, _mergeProps(sheetProps, {
        "color": props.bgColor,
        "class": ['v-stepper', {
          'v-stepper--alt-labels': props.altLabels,
          'v-stepper--flat': props.flat,
          'v-stepper--non-linear': props.nonLinear,
          'v-stepper--mobile': mobile.value
        }, displayClasses.value, props.class],
        "style": props.style
      }), {
        default: () => [hasHeader && _createVNode(VStepperHeader, {
          "key": "stepper-header"
        }, {
          default: () => [items.value.map((_ref2, index) => {
            let {
              raw,
              ...item
            } = _ref2;
            return _createElementVNode(_Fragment, null, [!!index && _createVNode(VDivider, null, null), _createVNode(VStepperItem, item.props, {
              default: slots[`header-item.${item.value}`] ?? slots.header,
              icon: slots.icon,
              title: slots.title,
              subtitle: slots.subtitle
            })]);
          })]
        }), hasWindow && _createVNode(VStepperWindow, {
          "key": "stepper-window"
        }, {
          default: () => [items.value.map(item => _createVNode(VStepperWindowItem, {
            "value": item.value
          }, {
            default: () => slots[`item.${item.value}`]?.(item) ?? slots.item?.(item)
          }))]
        }), slots.default?.({
          prev,
          next
        }), hasActions && (slots.actions?.({
          next,
          prev
        }) ?? _createVNode(VStepperActions, {
          "key": "stepper-actions",
          "onClick:prev": prev,
          "onClick:next": next
        }, slots))]
      });
    });
    return {
      prev,
      next
    };
  }
});
//# sourceMappingURL=VStepper.js.map