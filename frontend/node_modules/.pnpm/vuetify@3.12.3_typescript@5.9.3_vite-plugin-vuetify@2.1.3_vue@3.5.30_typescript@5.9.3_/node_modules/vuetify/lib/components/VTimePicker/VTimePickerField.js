import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Components
import { VTextField } from "../VTextField/index.js"; // Composables
import { useTextColor } from "../../composables/color.js";
import { forwardRefs } from "../../composables/forwardRefs.js"; // Utilities
import { ref, shallowRef } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVTimePickerFieldProps = propsFactory({
  active: Boolean,
  color: String,
  disabled: Boolean,
  label: String,
  modelValue: String,
  error: String,
  showHint: Boolean,
  readonly: Boolean
}, 'VTimePickerField');
export const VTimePickerField = genericComponent()({
  name: 'VTimePickerField',
  props: makeVTimePickerFieldProps(),
  emits: {
    'update:modelValue': v => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.color);
    const vTextInputRef = ref();
    const isFocused = shallowRef(false);
    function onKeydown(e) {
      if (['Backspace', 'Delete'].includes(e.key)) {
        e.preventDefault();
        const target = e.target;
        target.value = '';
        emit('update:modelValue', null);
      }
    }
    useRender(() => {
      return _createVNode(VTextField, {
        "ref": vTextInputRef,
        "_as": "VTimePickerField",
        "autocomplete": "off",
        "class": _normalizeClass(['v-time-picker-controls__time__field', {
          'v-time-picker-controls__time__field--active': props.active
        }, props.active ? textColorClasses.value : []]),
        "style": _normalizeStyle(props.active ? textColorStyles.value : []),
        "disabled": props.disabled,
        "variant": "solo-filled",
        "inputmode": "numeric",
        "hideDetails": "auto",
        "aria-label": props.label,
        "aria-invalid": !!props.error,
        "aria-errormessage": props.error,
        "error": !!props.error,
        "hint": props.showHint ? props.label : undefined,
        "persistentHint": true,
        "flat": true,
        "modelValue": props.modelValue ?? (isFocused.value ? '' : '--'),
        "onUpdate:modelValue": v => emit('update:modelValue', v),
        "onKeydown": onKeydown,
        "onFocus": () => isFocused.value = true,
        "onBlur": () => isFocused.value = false
      }, null);
    });
    return forwardRefs({}, vTextInputRef);
  }
});
//# sourceMappingURL=VTimePickerField.js.map