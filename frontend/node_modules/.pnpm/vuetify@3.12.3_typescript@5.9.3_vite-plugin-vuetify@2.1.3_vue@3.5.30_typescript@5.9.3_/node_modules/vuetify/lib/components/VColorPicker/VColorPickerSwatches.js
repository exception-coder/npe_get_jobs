import { createVNode as _createVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VColorPickerSwatches.css";

// Components
import { VIcon } from "../VIcon/index.js"; // Composables
import { makeComponentProps } from "../../composables/component.js"; // Utilities
import { toRef } from 'vue';
import { convertToUnit, deepEqual, defineComponent, getContrast, parseColor, propsFactory, RGBtoCSS, RGBtoHSV, useRender } from "../../util/index.js";
import colors from "../../util/colors.js"; // Types
export const makeVColorPickerSwatchesProps = propsFactory({
  swatches: {
    type: Array,
    default: () => parseDefaultColors(colors)
  },
  disabled: Boolean,
  readonly: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...makeComponentProps()
}, 'VColorPickerSwatches');
function parseDefaultColors(colors) {
  return Object.keys(colors).map(key => {
    const color = colors[key];
    return color.base ? [color.base, color.darken4, color.darken3, color.darken2, color.darken1, color.lighten1, color.lighten2, color.lighten3, color.lighten4, color.lighten5] : [color.black, color.white, color.transparent];
  });
}
export const VColorPickerSwatches = defineComponent({
  name: 'VColorPickerSwatches',
  props: makeVColorPickerSwatchesProps(),
  emits: {
    'update:color': color => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const isInteractive = toRef(() => !props.disabled && !props.readonly);
    function onSwatchClick(hsva) {
      if (!isInteractive.value || !hsva) {
        return;
      }
      emit('update:color', hsva);
    }
    useRender(() => _createElementVNode("div", {
      "class": _normalizeClass(['v-color-picker-swatches', props.class]),
      "style": _normalizeStyle([{
        maxHeight: convertToUnit(props.maxHeight)
      }, props.style])
    }, [_createElementVNode("div", null, [props.swatches.map(swatch => _createElementVNode("div", {
      "class": "v-color-picker-swatches__swatch"
    }, [swatch.map(color => {
      const rgba = parseColor(color);
      const hsva = RGBtoHSV(rgba);
      const background = RGBtoCSS(rgba);
      return _createElementVNode("div", {
        "class": _normalizeClass(['v-color-picker-swatches__color', {
          'v-color-picker-swatches__color--disabled': props.disabled
        }]),
        "onClick": () => onSwatchClick(hsva)
      }, [_createElementVNode("div", {
        "style": {
          background
        }
      }, [props.color && deepEqual(props.color, hsva) ? _createVNode(VIcon, {
        "size": "x-small",
        "icon": "$success",
        "color": getContrast(color, '#FFFFFF') > 2 ? 'white' : 'black'
      }, null) : undefined])]);
    })]))])]));
    return {};
  }
});
//# sourceMappingURL=VColorPickerSwatches.js.map