import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Components
import { makeVToolbarTitleProps, VToolbarTitle } from "../VToolbar/VToolbarTitle.js"; // Utilities
import { genericComponent, useRender } from "../../util/index.js"; // Types
export const VAppBarTitle = genericComponent()({
  name: 'VAppBarTitle',
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => _createVNode(VToolbarTitle, _mergeProps(props, {
      "class": "v-app-bar-title"
    }), slots));
    return {};
  }
});
//# sourceMappingURL=VAppBarTitle.js.map