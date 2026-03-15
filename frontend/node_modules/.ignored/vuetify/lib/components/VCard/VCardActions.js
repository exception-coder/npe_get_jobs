import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Composables
import { makeComponentProps } from "../../composables/component.js";
import { provideDefaults } from "../../composables/defaults.js";
import { makeTagProps } from "../../composables/tag.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVCardActionsProps = propsFactory({
  ...makeComponentProps(),
  ...makeTagProps()
}, 'VCardActions');
export const VCardActions = genericComponent()({
  name: 'VCardActions',
  props: makeVCardActionsProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        slim: true,
        variant: 'text'
      }
    });
    useRender(() => _createVNode(props.tag, {
      "class": _normalizeClass(['v-card-actions', props.class]),
      "style": _normalizeStyle(props.style)
    }, slots));
    return {};
  }
});
//# sourceMappingURL=VCardActions.js.map