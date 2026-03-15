import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode } from "vue";
// Composables
import { makeComponentProps } from "../../composables/component.js";
import { provideDefaults } from "../../composables/defaults.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVBannerActionsProps = propsFactory({
  color: String,
  density: String,
  ...makeComponentProps()
}, 'VBannerActions');
export const VBannerActions = genericComponent()({
  name: 'VBannerActions',
  props: makeVBannerActionsProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        color: props.color,
        density: props.density,
        slim: true,
        variant: 'text'
      }
    });
    useRender(() => _createElementVNode("div", {
      "class": _normalizeClass(['v-banner-actions', props.class]),
      "style": _normalizeStyle(props.style)
    }, [slots.default?.()]));
    return {};
  }
});
//# sourceMappingURL=VBannerActions.js.map