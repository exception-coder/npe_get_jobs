import { createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Styles
import "./VBottomNavigation.css";

// Components
import { VBtnToggleSymbol } from "../VBtnToggle/VBtnToggle.js"; // Composables
import { makeBorderProps, useBorder } from "../../composables/border.js";
import { useBackgroundColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { provideDefaults } from "../../composables/defaults.js";
import { makeDensityProps, useDensity } from "../../composables/density.js";
import { makeElevationProps, useElevation } from "../../composables/elevation.js";
import { makeGroupProps, useGroup } from "../../composables/group.js";
import { makeLayoutItemProps, useLayoutItem } from "../../composables/layout.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { useSsrBoot } from "../../composables/ssrBoot.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, useTheme } from "../../composables/theme.js"; // Utilities
import { computed, toRef } from 'vue';
import { convertToUnit, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVBottomNavigationProps = propsFactory({
  baseColor: String,
  bgColor: String,
  color: String,
  grow: Boolean,
  mode: {
    type: String,
    validator: v => !v || ['horizontal', 'shift'].includes(v)
  },
  height: {
    type: [Number, String],
    default: 56
  },
  active: {
    type: Boolean,
    default: true
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeLayoutItemProps({
    name: 'bottom-navigation'
  }),
  ...makeTagProps({
    tag: 'header'
  }),
  ...makeGroupProps({
    selectedClass: 'v-btn--selected'
  }),
  ...makeThemeProps()
}, 'VBottomNavigation');
export const VBottomNavigation = genericComponent()({
  name: 'VBottomNavigation',
  props: makeVBottomNavigationProps(),
  emits: {
    'update:active': value => true,
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = useTheme();
    const {
      borderClasses
    } = useBorder(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      densityClasses
    } = useDensity(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      ssrBootStyles
    } = useSsrBoot();
    const height = computed(() => Number(props.height) - (props.density === 'comfortable' ? 8 : 0) - (props.density === 'compact' ? 16 : 0));
    const isActive = useProxiedModel(props, 'active', props.active);
    const {
      layoutItemStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: toRef(() => 'bottom'),
      layoutSize: toRef(() => isActive.value ? height.value : 0),
      elementSize: height,
      active: isActive,
      absolute: toRef(() => props.absolute)
    });
    useGroup(props, VBtnToggleSymbol);
    provideDefaults({
      VBtn: {
        baseColor: toRef(() => props.baseColor),
        color: toRef(() => props.color),
        density: toRef(() => props.density),
        stacked: toRef(() => props.mode !== 'horizontal'),
        variant: 'text'
      }
    }, {
      scoped: true
    });
    useRender(() => {
      return _createVNode(props.tag, {
        "class": _normalizeClass(['v-bottom-navigation', {
          'v-bottom-navigation--active': isActive.value,
          'v-bottom-navigation--grow': props.grow,
          'v-bottom-navigation--shift': props.mode === 'shift'
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, props.class]),
        "style": _normalizeStyle([backgroundColorStyles.value, layoutItemStyles.value, {
          height: convertToUnit(height.value)
        }, ssrBootStyles.value, props.style])
      }, {
        default: () => [slots.default && _createElementVNode("div", {
          "class": "v-bottom-navigation__content"
        }, [slots.default()])]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VBottomNavigation.js.map