import { Fragment as _Fragment, createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps } from "vue";
// Styles
import "./VColorInput.css";

// Components
import { VAvatar } from "../../components/VAvatar/index.js";
import { makeVColorPickerProps, VColorPicker } from "../../components/VColorPicker/VColorPicker.js";
import { makeVConfirmEditProps, VConfirmEdit } from "../../components/VConfirmEdit/VConfirmEdit.js";
import { VMenu } from "../../components/VMenu/VMenu.js";
import { makeVTextFieldProps, VTextField } from "../../components/VTextField/VTextField.js"; // Composables
import { makeFocusProps } from "../../composables/focus.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, shallowRef } from 'vue';
import { genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
const availablePipLocations = ['prepend', 'prepend-inner', 'append', 'append-inner'];
export const makeVColorInputProps = propsFactory({
  hidePip: Boolean,
  colorPip: Boolean,
  pipIcon: {
    type: String,
    default: '$color'
  },
  pipLocation: {
    type: String,
    default: 'prepend',
    validator: v => availablePipLocations.includes(v)
  },
  pipVariant: {
    type: String,
    default: 'text'
  },
  ...makeFocusProps(),
  ...makeVConfirmEditProps(),
  ...makeVTextFieldProps(),
  ...omit(makeVColorPickerProps(), ['location', 'height', 'minHeight', 'maxHeight'])
}, 'VColorInput');
export const VColorInput = genericComponent()({
  name: 'VColorInput',
  props: makeVColorInputProps(),
  emits: {
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const menu = shallowRef(false);
    const isFocused = shallowRef(props.focused);
    const isInteractive = computed(() => !props.disabled && !props.readonly);
    const display = computed(() => model.value || null);
    function onKeydown(e) {
      if (e.key !== 'Enter') return;
      if (!menu.value || !isFocused.value) {
        menu.value = true;
        return;
      }
      const target = e.target;
      model.value = target.value;
    }
    function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      menu.value = true;
    }
    function onSave() {
      menu.value = false;
    }
    function onCancel() {
      menu.value = false;
    }
    useRender(() => {
      const confirmEditProps = VConfirmEdit.filterProps(props);
      const colorPickerProps = VColorPicker.filterProps(omit(props, ['active', 'bgColor', 'color', 'rounded', 'maxWidth', 'minWidth', 'width']));
      const textFieldProps = VTextField.filterProps(props);
      const slotWithPip = props.hidePip ? undefined : {
        [props.pipLocation]: arg => _createElementVNode(_Fragment, null, [_createVNode(VAvatar, {
          "class": "v-color-input__pip",
          "color": props.colorPip ? model.value : undefined,
          "variant": props.pipVariant,
          "icon": props.pipIcon
        }, null), slots[props.pipLocation]?.(arg)])
      };
      return _createVNode(VTextField, _mergeProps(textFieldProps, {
        "class": ['v-color-input', props.class],
        "style": props.style,
        "modelValue": display.value,
        "onKeydown": isInteractive.value ? onKeydown : undefined,
        "focused": menu.value || isFocused.value,
        "onClick:control": isInteractive.value ? onClick : undefined,
        "onClick:prependInner": isInteractive.value ? onClick : undefined,
        "onUpdate:focused": event => isFocused.value = event,
        "onClick:appendInner": isInteractive.value ? onClick : undefined,
        "onUpdate:modelValue": val => {
          model.value = val;
        }
      }), {
        ...slots,
        ...slotWithPip,
        default: () => _createElementVNode(_Fragment, null, [_createVNode(VMenu, {
          "modelValue": menu.value,
          "onUpdate:modelValue": $event => menu.value = $event,
          "activator": "parent",
          "minWidth": "0",
          "closeOnContentClick": false,
          "openOnClick": false
        }, {
          default: () => [_createVNode(VConfirmEdit, _mergeProps(confirmEditProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event,
            "onSave": onSave,
            "onCancel": onCancel
          }), {
            default: _ref2 => {
              let {
                actions,
                model: proxyModel,
                save,
                cancel,
                isPristine
              } = _ref2;
              function onUpdateModel(value) {
                if (!props.hideActions) {
                  proxyModel.value = value;
                } else {
                  model.value = value;
                }
              }
              return _createVNode(VColorPicker, _mergeProps(colorPickerProps, {
                "modelValue": props.hideActions ? model.value : proxyModel.value,
                "onUpdate:modelValue": value => onUpdateModel(value)
              }), {
                actions: !props.hideActions ? () => slots.actions?.({
                  save,
                  cancel,
                  isPristine
                }) ?? actions() : undefined
              });
            }
          })]
        }), slots.default?.()])
      });
    });
  }
});
//# sourceMappingURL=VColorInput.js.map