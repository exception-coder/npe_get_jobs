import { createElementVNode as _createElementVNode, vShow as _vShow, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, withDirectives as _withDirectives, createVNode as _createVNode } from "vue";
// Components
import { VExpansionPanelSymbol } from "./shared.js";
import { VExpandTransition } from "../transitions/index.js"; // Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeLazyProps, useLazy } from "../../composables/lazy.js"; // Utilities
import { inject } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVExpansionPanelTextProps = propsFactory({
  ...makeComponentProps(),
  ...makeLazyProps()
}, 'VExpansionPanelText');
export const VExpansionPanelText = genericComponent()({
  name: 'VExpansionPanelText',
  props: makeVExpansionPanelTextProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel) throw new Error('[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel');
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, expansionPanel.isSelected);
    useRender(() => _createVNode(VExpandTransition, {
      "onAfterLeave": onAfterLeave
    }, {
      default: () => [_withDirectives(_createElementVNode("div", {
        "class": _normalizeClass(['v-expansion-panel-text', props.class]),
        "style": _normalizeStyle(props.style)
      }, [slots.default && hasContent.value && _createElementVNode("div", {
        "class": "v-expansion-panel-text__wrapper"
      }, [slots.default?.()])]), [[_vShow, expansionPanel.isSelected.value]])]
    }));
    return {};
  }
});
//# sourceMappingURL=VExpansionPanelText.js.map