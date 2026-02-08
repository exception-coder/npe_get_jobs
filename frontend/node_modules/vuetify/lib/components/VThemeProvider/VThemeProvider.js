import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Styles
import "./VThemeProvider.css";

// Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js"; // Utilities
import { genericComponent, propsFactory } from "../../util/index.js";
export const makeVThemeProviderProps = propsFactory({
  withBackground: Boolean,
  ...makeComponentProps(),
  ...makeThemeProps(),
  ...makeTagProps()
}, 'VThemeProvider');
export const VThemeProvider = genericComponent()({
  name: 'VThemeProvider',
  props: makeVThemeProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    return () => {
      if (!props.withBackground) return slots.default?.();
      return _createVNode(props.tag, {
        "class": _normalizeClass(['v-theme-provider', themeClasses.value, props.class]),
        "style": _normalizeStyle(props.style)
      }, {
        default: () => [slots.default?.()]
      });
    };
  }
});
//# sourceMappingURL=VThemeProvider.js.map