// Utilities
import { computed, inject, toValue, createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps, normalizeClass as _normalizeClass } from 'vue';
import { consoleWarn, defineComponent, genericComponent, propsFactory } from "../util/index.js"; // Types
export const IconValue = [String, Function, Object, Array];
export const IconSymbol = Symbol.for('vuetify:icons');
export const makeIconProps = propsFactory({
  icon: {
    type: IconValue
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: true
  }
}, 'icon');
export const VComponentIcon = genericComponent()({
  name: 'VComponentIcon',
  props: makeIconProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    return () => {
      const Icon = props.icon;
      return _createVNode(props.tag, null, {
        default: () => [props.icon ? _createVNode(Icon, null, null) : slots.default?.()]
      });
    };
  }
});
export const VSvgIcon = defineComponent({
  name: 'VSvgIcon',
  inheritAttrs: false,
  props: makeIconProps(),
  setup(props, _ref2) {
    let {
      attrs
    } = _ref2;
    return () => {
      return _createVNode(props.tag, _mergeProps(attrs, {
        "style": null
      }), {
        default: () => [_createElementVNode("svg", {
          "class": "v-icon__svg",
          "xmlns": "http://www.w3.org/2000/svg",
          "viewBox": "0 0 24 24",
          "role": "img",
          "aria-hidden": "true"
        }, [Array.isArray(props.icon) ? props.icon.map(path => Array.isArray(path) ? _createElementVNode("path", {
          "d": path[0],
          "fill-opacity": path[1]
        }, null) : _createElementVNode("path", {
          "d": path
        }, null)) : _createElementVNode("path", {
          "d": props.icon
        }, null)])]
      });
    };
  }
});
export const VLigatureIcon = defineComponent({
  name: 'VLigatureIcon',
  props: makeIconProps(),
  setup(props) {
    return () => {
      return _createVNode(props.tag, null, {
        default: () => [props.icon]
      });
    };
  }
});
export const VClassIcon = defineComponent({
  name: 'VClassIcon',
  props: makeIconProps(),
  setup(props) {
    return () => {
      return _createVNode(props.tag, {
        "class": _normalizeClass(props.icon)
      }, null);
    };
  }
});
export const useIcon = props => {
  const icons = inject(IconSymbol);
  if (!icons) throw new Error('Missing Vuetify Icons provide!');
  const iconData = computed(() => {
    const iconAlias = toValue(props);
    if (!iconAlias) return {
      component: VComponentIcon
    };
    let icon = iconAlias;
    if (typeof icon === 'string') {
      icon = icon.trim();
      if (icon.startsWith('$')) {
        icon = icons.aliases?.[icon.slice(1)];
      }
    }
    if (!icon) consoleWarn(`Could not find aliased icon "${iconAlias}"`);
    if (Array.isArray(icon)) {
      return {
        component: VSvgIcon,
        icon
      };
    } else if (typeof icon !== 'string') {
      return {
        component: VComponentIcon,
        icon
      };
    }
    const iconSetName = Object.keys(icons.sets).find(setName => typeof icon === 'string' && icon.startsWith(`${setName}:`));
    const iconName = iconSetName ? icon.slice(iconSetName.length + 1) : icon;
    const iconSet = icons.sets[iconSetName ?? icons.defaultSet];
    return {
      component: iconSet.component,
      icon: iconName
    };
  });
  return {
    iconData
  };
};
//# sourceMappingURL=icons.js.map