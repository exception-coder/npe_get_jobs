import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode } from "vue";
// Composables
import { makeComponentProps } from "../../composables/component.js";
import { provideDefaults } from "../../composables/defaults.js";
import { makeVariantProps } from "../../composables/variant.js"; // Utilities
import { toRef } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVToolbarItemsProps = propsFactory({
  ...makeComponentProps(),
  ...makeVariantProps({
    variant: 'text'
  })
}, 'VToolbarItems');
export const VToolbarItems = genericComponent()({
  name: 'VToolbarItems',
  props: makeVToolbarItemsProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        color: toRef(() => props.color),
        height: 'inherit',
        variant: toRef(() => props.variant)
      }
    });
    useRender(() => _createElementVNode("div", {
      "class": _normalizeClass(['v-toolbar-items', props.class]),
      "style": _normalizeStyle(props.style)
    }, [slots.default?.()]));
    return {};
  }
});
//# sourceMappingURL=VToolbarItems.js.map