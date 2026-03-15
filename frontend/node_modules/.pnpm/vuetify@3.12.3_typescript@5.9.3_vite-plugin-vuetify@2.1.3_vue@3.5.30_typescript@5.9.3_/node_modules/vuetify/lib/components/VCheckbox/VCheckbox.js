import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Styles
import "./VCheckbox.css";

// Components
import { makeVCheckboxBtnProps, VCheckboxBtn } from "./VCheckboxBtn.js";
import { makeVInputProps, VInput } from "../VInput/VInput.js"; // Composables
import { useFocus } from "../../composables/focus.js";
import { forwardRefs } from "../../composables/forwardRefs.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { ref, useId } from 'vue';
import { filterInputAttrs, genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVCheckboxProps = propsFactory({
  ...omit(makeVInputProps(), ['direction']),
  ...omit(makeVCheckboxBtnProps(), ['inline'])
}, 'VCheckbox');
export const VCheckbox = genericComponent()({
  name: 'VCheckbox',
  inheritAttrs: false,
  props: makeVCheckboxProps(),
  emits: {
    'update:modelValue': value => true,
    'update:focused': focused => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const inputRef = ref();
    const uid = useId();
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const checkboxProps = VCheckboxBtn.filterProps(props);
      return _createVNode(VInput, _mergeProps({
        "ref": inputRef,
        "class": ['v-checkbox', props.class]
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "id": props.id || `checkbox-${uid}`,
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: _ref2 => {
          let {
            id,
            messagesId,
            isDisabled,
            isReadonly,
            isValid
          } = _ref2;
          return _createVNode(VCheckboxBtn, _mergeProps(checkboxProps, {
            "id": id.value,
            "aria-describedby": messagesId.value,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value
          }, controlAttrs, {
            "error": isValid.value === false,
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event,
            "onFocus": focus,
            "onBlur": blur
          }), slots);
        }
      });
    });
    return forwardRefs({}, inputRef);
  }
});
//# sourceMappingURL=VCheckbox.js.map