import { createElementVNode as _createElementVNode, createVNode as _createVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VDatePickerHeader.css";

// Components
import { VBtn } from "../VBtn/index.js";
import { VDefaultsProvider } from "../VDefaultsProvider/index.js"; // Composables
import { useBackgroundColor } from "../../composables/color.js";
import { IconValue } from "../../composables/icons.js";
import { MaybeTransition } from "../../composables/transition.js"; // Utilities
import { EventProp, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVDatePickerHeaderProps = propsFactory({
  appendIcon: IconValue,
  color: String,
  header: String,
  transition: String,
  onClick: EventProp()
}, 'VDatePickerHeader');
export const VDatePickerHeader = genericComponent()({
  name: 'VDatePickerHeader',
  props: makeVDatePickerHeaderProps(),
  emits: {
    click: () => true,
    'click:append': () => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    function onClick() {
      emit('click');
    }
    function onClickAppend() {
      emit('click:append');
    }
    useRender(() => {
      const hasContent = !!(slots.default || props.header);
      const hasAppend = !!(slots.append || props.appendIcon);
      return _createElementVNode("div", {
        "class": _normalizeClass(['v-date-picker-header', {
          'v-date-picker-header--clickable': !!props.onClick
        }, backgroundColorClasses.value]),
        "style": _normalizeStyle(backgroundColorStyles.value),
        "onClick": onClick
      }, [slots.prepend && _createElementVNode("div", {
        "key": "prepend",
        "class": "v-date-picker-header__prepend"
      }, [slots.prepend()]), hasContent && _createVNode(MaybeTransition, {
        "key": "content",
        "name": props.transition
      }, {
        default: () => [_createElementVNode("div", {
          "key": props.header,
          "class": "v-date-picker-header__content"
        }, [slots.default?.() ?? props.header])]
      }), hasAppend && _createElementVNode("div", {
        "class": "v-date-picker-header__append"
      }, [!slots.append ? _createVNode(VBtn, {
        "key": "append-btn",
        "icon": props.appendIcon,
        "variant": "text",
        "onClick": onClickAppend
      }, null) : _createVNode(VDefaultsProvider, {
        "key": "append-defaults",
        "disabled": !props.appendIcon,
        "defaults": {
          VBtn: {
            icon: props.appendIcon,
            variant: 'text'
          }
        }
      }, {
        default: () => [slots.append?.()]
      })])]);
    });
    return {};
  }
});
//# sourceMappingURL=VDatePickerHeader.js.map