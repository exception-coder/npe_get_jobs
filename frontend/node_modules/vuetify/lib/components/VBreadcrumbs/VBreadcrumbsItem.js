import { mergeProps as _mergeProps, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Composables
import { useTextColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeRouterProps, useLink } from "../../composables/router.js";
import { makeTagProps } from "../../composables/tag.js"; // Utilities
import { computed } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVBreadcrumbsItemProps = propsFactory({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,
  ...makeComponentProps(),
  ...makeRouterProps(),
  ...makeTagProps({
    tag: 'li'
  })
}, 'VBreadcrumbsItem');
export const VBreadcrumbsItem = genericComponent()({
  name: 'VBreadcrumbsItem',
  props: makeVBreadcrumbsItemProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const link = useLink(props, attrs);
    const isActive = computed(() => props.active || link.isActive?.value);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => isActive.value ? props.activeColor : props.color);
    useRender(() => {
      return _createVNode(props.tag, {
        "class": _normalizeClass(['v-breadcrumbs-item', {
          'v-breadcrumbs-item--active': isActive.value,
          'v-breadcrumbs-item--disabled': props.disabled,
          [`${props.activeClass}`]: isActive.value && props.activeClass
        }, textColorClasses.value, props.class]),
        "style": _normalizeStyle([textColorStyles.value, props.style]),
        "aria-current": isActive.value ? 'page' : undefined
      }, {
        default: () => [!link.isLink.value ? slots.default?.() ?? props.title : _createElementVNode("a", _mergeProps({
          "class": "v-breadcrumbs-item--link",
          "onClick": link.navigate
        }, link.linkProps), [slots.default?.() ?? props.title])]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VBreadcrumbsItem.js.map