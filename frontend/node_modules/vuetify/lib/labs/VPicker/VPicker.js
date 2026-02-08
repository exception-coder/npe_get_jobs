import { createVNode as _createVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, mergeProps as _mergeProps } from "vue";
// Styles
import "./VPicker.css";

// Components
import { VPickerTitle } from "./VPickerTitle.js";
import { VDefaultsProvider } from "../../components/VDefaultsProvider/VDefaultsProvider.js";
import { makeVSheetProps, VSheet } from "../../components/VSheet/VSheet.js"; // Composables
import { useBackgroundColor } from "../../composables/color.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVPickerProps = propsFactory({
  bgColor: String,
  divided: Boolean,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  hideTitle: Boolean,
  ...makeVSheetProps()
}, 'VPicker');
export const VPicker = genericComponent()({
  name: 'VPicker',
  props: makeVPickerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    useRender(() => {
      const sheetProps = VSheet.filterProps(props);
      const hasTitle = !props.hideTitle && !!(props.title || slots.title);
      return _createVNode(VSheet, _mergeProps(sheetProps, {
        "color": props.bgColor,
        "class": ['v-picker', {
          'v-picker--divided': props.divided,
          'v-picker--landscape': props.landscape,
          'v-picker--with-actions': !!slots.actions
        }, props.class],
        "style": props.style
      }), {
        default: () => [!props.hideHeader && _createElementVNode("div", {
          "key": "header",
          "class": _normalizeClass([backgroundColorClasses.value]),
          "style": _normalizeStyle([backgroundColorStyles.value])
        }, [hasTitle && _createVNode(VPickerTitle, {
          "key": "picker-title"
        }, {
          default: () => [slots.title?.() ?? props.title]
        }), slots.header && _createElementVNode("div", {
          "class": "v-picker__header"
        }, [slots.header()])]), _createElementVNode("div", {
          "class": "v-picker__body"
        }, [slots.default?.()]), slots.actions && _createVNode(VDefaultsProvider, {
          "defaults": {
            VBtn: {
              slim: true,
              variant: 'text'
            }
          }
        }, {
          default: () => [_createElementVNode("div", {
            "class": "v-picker__actions"
          }, [slots.actions()])]
        })]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VPicker.js.map