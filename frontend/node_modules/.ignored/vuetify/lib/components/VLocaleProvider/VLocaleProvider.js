import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode } from "vue";
// Styles
import "./VLocaleProvider.css";

// Composables
import { makeComponentProps } from "../../composables/component.js";
import { provideLocale } from "../../composables/locale.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVLocaleProviderProps = propsFactory({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: undefined
  },
  ...makeComponentProps()
}, 'VLocaleProvider');
export const VLocaleProvider = genericComponent()({
  name: 'VLocaleProvider',
  props: makeVLocaleProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = provideLocale(props);
    useRender(() => _createElementVNode("div", {
      "class": _normalizeClass(['v-locale-provider', rtlClasses.value, props.class]),
      "style": _normalizeStyle(props.style)
    }, [slots.default?.()]));
    return {};
  }
});
//# sourceMappingURL=VLocaleProvider.js.map