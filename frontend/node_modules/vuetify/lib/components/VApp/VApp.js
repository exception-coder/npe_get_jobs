import { createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VApp.css";

// Composables
import { makeComponentProps } from "../../composables/component.js";
import { createLayout, makeLayoutProps } from "../../composables/layout.js";
import { useRtl } from "../../composables/locale.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js"; // Utilities
import { genericComponent, omit, propsFactory, useRender } from "../../util/index.js";
export const makeVAppProps = propsFactory({
  ...makeComponentProps(),
  ...omit(makeLayoutProps(), ['fullHeight']),
  ...makeThemeProps()
}, 'VApp');
export const VApp = genericComponent()({
  name: 'VApp',
  props: makeVAppProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const theme = provideTheme(props);
    const {
      layoutClasses,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout({
      ...props,
      fullHeight: true
    });
    const {
      rtlClasses
    } = useRtl();
    useRender(() => _createElementVNode("div", {
      "ref": layoutRef,
      "class": _normalizeClass(['v-application', theme.themeClasses.value, layoutClasses.value, rtlClasses.value, props.class]),
      "style": _normalizeStyle([props.style])
    }, [_createElementVNode("div", {
      "class": "v-application__wrap"
    }, [slots.default?.()])]));
    return {
      getLayoutItem,
      items,
      theme
    };
  }
});
//# sourceMappingURL=VApp.js.map