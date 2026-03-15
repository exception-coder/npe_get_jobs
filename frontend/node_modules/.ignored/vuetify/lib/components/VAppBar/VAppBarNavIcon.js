import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Components
import { makeVBtnProps, VBtn } from "../VBtn/VBtn.js"; // Utilities
import { genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVAppBarNavIconProps = propsFactory({
  ...omit(makeVBtnProps({
    icon: '$menu',
    variant: 'text'
  }), ['spaced'])
}, 'VAppBarNavIcon');
export const VAppBarNavIcon = genericComponent()({
  name: 'VAppBarNavIcon',
  props: makeVAppBarNavIconProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => _createVNode(VBtn, _mergeProps(props, {
      "class": ['v-app-bar-nav-icon']
    }), slots));
    return {};
  }
});
//# sourceMappingURL=VAppBarNavIcon.js.map