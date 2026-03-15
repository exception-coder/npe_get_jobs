import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Components
import { VStepperSymbol } from "./shared.js";
import { makeVWindowProps, VWindow } from "../VWindow/VWindow.js"; // Composables
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, inject } from 'vue';
import { genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVStepperWindowProps = propsFactory({
  ...omit(makeVWindowProps(), ['continuous', 'nextIcon', 'prevIcon', 'showArrows', 'touch', 'mandatory'])
}, 'VStepperWindow');
export const VStepperWindow = genericComponent()({
  name: 'VStepperWindow',
  props: makeVStepperWindowProps(),
  emits: {
    'update:modelValue': v => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const group = inject(VStepperSymbol, null);
    const _model = useProxiedModel(props, 'modelValue');
    const model = computed({
      get() {
        // Always return modelValue if defined
        // or if not within a VStepper group
        if (_model.value != null || !group) return _model.value;

        // If inside of a VStepper, find the currently selected
        // item by id. Item value may be assigned by its index
        return group.items.value.find(item => group.selected.value.includes(item.id))?.value;
      },
      set(val) {
        _model.value = val;
      }
    });
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return _createVNode(VWindow, _mergeProps({
        "_as": "VStepperWindow"
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "class": ['v-stepper-window', props.class],
        "style": props.style,
        "mandatory": false,
        "touch": false
      }), slots);
    });
    return {};
  }
});
//# sourceMappingURL=VStepperWindow.js.map