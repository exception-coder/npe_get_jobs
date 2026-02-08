import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Components
import { makeVImgProps, VImg } from "../VImg/VImg.js";
import { makeVWindowItemProps, VWindowItem } from "../VWindow/VWindowItem.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVCarouselItemProps = propsFactory({
  ...makeVImgProps(),
  ...makeVWindowItemProps()
}, 'VCarouselItem');
export const VCarouselItem = genericComponent()({
  name: 'VCarouselItem',
  inheritAttrs: false,
  props: makeVCarouselItemProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    useRender(() => {
      const imgProps = VImg.filterProps(props);
      const windowItemProps = VWindowItem.filterProps(props);
      return _createVNode(VWindowItem, _mergeProps({
        "class": ['v-carousel-item', props.class]
      }, windowItemProps), {
        default: () => [_createVNode(VImg, _mergeProps(attrs, imgProps), slots)]
      });
    });
  }
});
//# sourceMappingURL=VCarouselItem.js.map