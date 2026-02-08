import { Fragment as _Fragment, createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps } from "vue";
// Components
import { VStepperVerticalItem } from "./VStepperVerticalItem.js";
import { makeVExpansionPanelsProps, VExpansionPanels } from "../../components/VExpansionPanel/VExpansionPanels.js";
import { makeStepperProps } from "../../components/VStepper/VStepper.js"; // Composables
import { provideDefaults } from "../../composables/defaults.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, ref, toRefs } from 'vue';
import { genericComponent, getPropertyFromItem, omit, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVStepperVerticalProps = propsFactory({
  prevText: {
    type: String,
    default: '$vuetify.stepper.prev'
  },
  nextText: {
    type: String,
    default: '$vuetify.stepper.next'
  },
  ...makeStepperProps(),
  ...omit(makeVExpansionPanelsProps({
    mandatory: 'force',
    variant: 'accordion'
  }), ['static'])
}, 'VStepperVertical');
export const VStepperVertical = genericComponent()({
  name: 'VStepperVertical',
  props: makeVStepperVerticalProps(),
  emits: {
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vExpansionPanelsRef = ref();
    const {
      color,
      eager,
      editable,
      prevText,
      nextText,
      hideActions
    } = toRefs(props);
    const model = useProxiedModel(props, 'modelValue');
    const items = computed(() => props.items.map((item, index) => {
      const title = getPropertyFromItem(item, props.itemTitle, item);
      const value = getPropertyFromItem(item, props.itemValue, index + 1);
      return {
        title,
        value,
        raw: item
      };
    }));
    provideDefaults({
      VStepperVerticalItem: {
        color,
        eager,
        editable,
        hideActions,
        static: true
      },
      VStepperVerticalActions: {
        color,
        nextText,
        prevText
      }
    });
    useRender(() => {
      const expansionPanelProps = VExpansionPanels.filterProps(props);
      return _createVNode(VExpansionPanels, _mergeProps(expansionPanelProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "ref": vExpansionPanelsRef,
        "class": ['v-stepper', {
          'v-stepper--alt-labels': props.altLabels,
          'v-stepper--flat': props.flat,
          'v-stepper--non-linear': props.nonLinear,
          'v-stepper--mobile': props.mobile
        }, props.class],
        "style": props.style
      }), {
        ...slots,
        default: _ref2 => {
          let {
            prev,
            next
          } = _ref2;
          return _createElementVNode(_Fragment, null, [items.value.map(_ref3 => {
            let {
              raw,
              ...item
            } = _ref3;
            return _createVNode(VStepperVerticalItem, item, {
              ...slots,
              default: slots[`item.${item.value}`]
            });
          }), slots.default?.({
            prev,
            next,
            step: model.value
          })]);
        }
      });
    });
    return {};
  }
});
//# sourceMappingURL=VStepperVertical.js.map