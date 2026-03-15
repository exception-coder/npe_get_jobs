import { Fragment as _Fragment, createVNode as _createVNode, mergeProps as _mergeProps, createElementVNode as _createElementVNode } from "vue";
// Styles
import "./VRadioGroup.css";

// Components
import { makeVInputProps, VInput } from "../VInput/VInput.js";
import { VLabel } from "../VLabel/index.js";
import { VSelectionControl } from "../VSelectionControl/index.js";
import { makeSelectionControlGroupProps, VSelectionControlGroup } from "../VSelectionControlGroup/VSelectionControlGroup.js"; // Composables
import { forwardRefs } from "../../composables/forwardRefs.js";
import { IconValue } from "../../composables/icons.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, ref, useId } from 'vue';
import { filterInputAttrs, genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVRadioGroupProps = propsFactory({
  height: {
    type: [Number, String],
    default: 'auto'
  },
  ...makeVInputProps(),
  ...omit(makeSelectionControlGroupProps(), ['multiple']),
  trueIcon: {
    type: IconValue,
    default: '$radioOn'
  },
  falseIcon: {
    type: IconValue,
    default: '$radioOff'
  },
  type: {
    type: String,
    default: 'radio'
  }
}, 'VRadioGroup');
export const VRadioGroup = genericComponent()({
  name: 'VRadioGroup',
  inheritAttrs: false,
  props: makeVRadioGroupProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const uid = useId();
    const id = computed(() => props.id || `radio-group-${uid}`);
    const model = useProxiedModel(props, 'modelValue');
    const inputRef = ref();
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return _createVNode(VInput, _mergeProps({
        "ref": inputRef,
        "class": ['v-radio-group', props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "id": id.value
      }), {
        ...slots,
        default: _ref2 => {
          let {
            id,
            messagesId,
            isDisabled,
            isReadonly
          } = _ref2;
          return _createElementVNode(_Fragment, null, [label && _createVNode(VLabel, {
            "id": id.value
          }, {
            default: () => [label]
          }), _createVNode(VSelectionControlGroup, _mergeProps(controlProps, {
            "id": id.value,
            "aria-describedby": messagesId.value,
            "defaultsTarget": "VRadio",
            "trueIcon": props.trueIcon,
            "falseIcon": props.falseIcon,
            "type": props.type,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "aria-labelledby": label ? id.value : undefined,
            "multiple": false
          }, controlAttrs, {
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event
          }), slots)]);
        }
      });
    });
    return forwardRefs({}, inputRef);
  }
});
//# sourceMappingURL=VRadioGroup.js.map