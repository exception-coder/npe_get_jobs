import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Styles
import "./VExpansionPanel.css";

// Components
import { VExpansionPanelSymbol } from "./shared.js";
import { makeVExpansionPanelProps } from "./VExpansionPanel.js"; // Composables
import { makeComponentProps } from "../../composables/component.js";
import { provideDefaults } from "../../composables/defaults.js";
import { makeGroupProps, useGroup } from "../../composables/group.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js"; // Utilities
import { toRef } from 'vue';
import { genericComponent, pick, propsFactory, useRender } from "../../util/index.js"; // Types
const allowedVariants = ['default', 'accordion', 'inset', 'popout'];
export const makeVExpansionPanelsProps = propsFactory({
  flat: Boolean,
  ...makeGroupProps(),
  ...pick(makeVExpansionPanelProps(), ['bgColor', 'collapseIcon', 'color', 'eager', 'elevation', 'expandIcon', 'focusable', 'hideActions', 'readonly', 'ripple', 'rounded', 'tile', 'static']),
  ...makeThemeProps(),
  ...makeComponentProps(),
  ...makeTagProps(),
  variant: {
    type: String,
    default: 'default',
    validator: v => allowedVariants.includes(v)
  }
}, 'VExpansionPanels');
export const VExpansionPanels = genericComponent()({
  name: 'VExpansionPanels',
  props: makeVExpansionPanelsProps(),
  emits: {
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      next,
      prev
    } = useGroup(props, VExpansionPanelSymbol);
    const {
      themeClasses
    } = provideTheme(props);
    const variantClass = toRef(() => props.variant && `v-expansion-panels--variant-${props.variant}`);
    provideDefaults({
      VExpansionPanel: {
        bgColor: toRef(() => props.bgColor),
        collapseIcon: toRef(() => props.collapseIcon),
        color: toRef(() => props.color),
        eager: toRef(() => props.eager),
        elevation: toRef(() => props.elevation),
        expandIcon: toRef(() => props.expandIcon),
        focusable: toRef(() => props.focusable),
        hideActions: toRef(() => props.hideActions),
        readonly: toRef(() => props.readonly),
        ripple: toRef(() => props.ripple),
        rounded: toRef(() => props.rounded),
        static: toRef(() => props.static)
      }
    });
    useRender(() => _createVNode(props.tag, {
      "class": _normalizeClass(['v-expansion-panels', {
        'v-expansion-panels--flat': props.flat,
        'v-expansion-panels--tile': props.tile
      }, themeClasses.value, variantClass.value, props.class]),
      "style": _normalizeStyle(props.style)
    }, {
      default: () => [slots.default?.({
        prev,
        next
      })]
    }));
    return {
      next,
      prev
    };
  }
});
//# sourceMappingURL=VExpansionPanels.js.map