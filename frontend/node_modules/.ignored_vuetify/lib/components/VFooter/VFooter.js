import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Styles
import "./VFooter.css";

// Composables
import { makeBorderProps, useBorder } from "../../composables/border.js";
import { useBackgroundColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeElevationProps, useElevation } from "../../composables/elevation.js";
import { makeLayoutItemProps, useLayoutItem } from "../../composables/layout.js";
import { useResizeObserver } from "../../composables/resizeObserver.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js";
import { useToggleScope } from "../../composables/toggleScope.js"; // Utilities
import { computed, ref, shallowRef, toRef, watchEffect } from 'vue';
import { convertToUnit, genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVFooterProps = propsFactory({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 'auto'
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: 'footer'
  }),
  ...makeThemeProps()
}, 'VFooter');
export const VFooter = genericComponent()({
  name: 'VFooter',
  props: makeVFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const layoutItemStyles = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const autoHeight = shallowRef(32);
    const {
      resizeRef
    } = useResizeObserver(entries => {
      if (!entries.length) return;
      autoHeight.value = entries[0].target.clientHeight;
    });
    const height = computed(() => props.height === 'auto' ? autoHeight.value : parseInt(props.height, 10));
    useToggleScope(() => props.app, () => {
      const layout = useLayoutItem({
        id: props.name,
        order: computed(() => parseInt(props.order, 10)),
        position: toRef(() => 'bottom'),
        layoutSize: height,
        elementSize: computed(() => props.height === 'auto' ? undefined : height.value),
        active: toRef(() => props.app),
        absolute: toRef(() => props.absolute)
      });
      watchEffect(() => {
        layoutItemStyles.value = layout.layoutItemStyles.value;
      });
    });
    useRender(() => _createVNode(props.tag, {
      "ref": resizeRef,
      "class": _normalizeClass(['v-footer', themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, props.class]),
      "style": _normalizeStyle([backgroundColorStyles.value, props.app ? layoutItemStyles.value : {
        height: convertToUnit(props.height)
      }, props.style])
    }, slots));
    return {};
  }
});
//# sourceMappingURL=VFooter.js.map