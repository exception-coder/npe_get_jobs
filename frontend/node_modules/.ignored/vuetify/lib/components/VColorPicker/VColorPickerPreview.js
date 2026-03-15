import { createVNode as _createVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VColorPickerPreview.css";

// Components
import { VBtn } from "../VBtn/index.js";
import { VSlider } from "../VSlider/index.js"; // Composables
import { makeComponentProps } from "../../composables/component.js";
import { IconValue } from "../../composables/icons.js";
import { useLocale } from "../../composables/locale.js"; // Utilities
import { onUnmounted } from 'vue';
import { nullColor } from "./util/index.js";
import { defineComponent, HSVtoCSS, parseColor, propsFactory, RGBtoHSV, SUPPORTS_EYE_DROPPER, useRender } from "../../util/index.js"; // Types
export const makeVColorPickerPreviewProps = propsFactory({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  hideEyeDropper: Boolean,
  eyeDropperIcon: {
    type: IconValue,
    default: '$eyeDropper'
  },
  ...makeComponentProps()
}, 'VColorPickerPreview');
export const VColorPickerPreview = defineComponent({
  name: 'VColorPickerPreview',
  props: makeVColorPickerPreviewProps(),
  emits: {
    'update:color': color => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const {
      t
    } = useLocale();
    const abortController = new AbortController();
    onUnmounted(() => abortController.abort());
    async function openEyeDropper() {
      if (!SUPPORTS_EYE_DROPPER || props.disabled) return;
      const eyeDropper = new window.EyeDropper();
      try {
        const result = await eyeDropper.open({
          signal: abortController.signal
        });
        const colorHexValue = RGBtoHSV(parseColor(result.sRGBHex));
        emit('update:color', {
          ...(props.color ?? nullColor),
          ...colorHexValue
        });
      } catch (e) {}
    }
    useRender(() => _createElementVNode("div", {
      "class": _normalizeClass(['v-color-picker-preview', {
        'v-color-picker-preview--hide-alpha': props.hideAlpha
      }, props.class]),
      "style": _normalizeStyle(props.style)
    }, [SUPPORTS_EYE_DROPPER && !props.hideEyeDropper && _createElementVNode("div", {
      "class": "v-color-picker-preview__eye-dropper",
      "key": "eyeDropper"
    }, [_createVNode(VBtn, {
      "aria-label": t('$vuetify.colorPicker.ariaLabel.eyedropper'),
      "density": "comfortable",
      "disabled": props.disabled,
      "icon": props.eyeDropperIcon,
      "variant": "plain",
      "onClick": openEyeDropper
    }, null)]), _createElementVNode("div", {
      "class": "v-color-picker-preview__dot"
    }, [_createElementVNode("div", {
      "style": {
        background: HSVtoCSS(props.color ?? nullColor)
      }
    }, null)]), _createElementVNode("div", {
      "class": "v-color-picker-preview__sliders"
    }, [_createVNode(VSlider, {
      "class": "v-color-picker-preview__track v-color-picker-preview__hue",
      "name": t('$vuetify.colorPicker.ariaLabel.hueSlider'),
      "modelValue": props.color?.h,
      "onUpdate:modelValue": h => emit('update:color', {
        ...(props.color ?? nullColor),
        h
      }),
      "step": 1,
      "min": 0,
      "max": 360,
      "disabled": props.disabled,
      "thumbSize": 14,
      "trackSize": 8,
      "trackFillColor": "white",
      "hideDetails": true
    }, null), !props.hideAlpha && _createVNode(VSlider, {
      "class": "v-color-picker-preview__track v-color-picker-preview__alpha",
      "name": t('$vuetify.colorPicker.ariaLabel.alphaSlider'),
      "modelValue": props.color?.a ?? 1,
      "onUpdate:modelValue": a => emit('update:color', {
        ...(props.color ?? nullColor),
        a
      }),
      "step": 0.01,
      "min": 0,
      "max": 1,
      "disabled": props.disabled,
      "thumbSize": 14,
      "trackSize": 8,
      "trackFillColor": "white",
      "hideDetails": true
    }, null)])]));
    return {};
  }
});
//# sourceMappingURL=VColorPickerPreview.js.map