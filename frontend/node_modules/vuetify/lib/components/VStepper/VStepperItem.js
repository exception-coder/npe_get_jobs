import { createVNode as _createVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, withDirectives as _withDirectives } from "vue";
// Styles
import "./VStepperItem.css";

// Components
import { VAvatar } from "../VAvatar/VAvatar.js";
import { VIcon } from "../VIcon/VIcon.js"; // Composables
import { makeGroupItemProps, useGroupItem } from "../../composables/group.js";
import { IconValue } from "../../composables/icons.js";
import { genOverlays } from "../../composables/variant.js"; // Directives
import vRipple from "../../directives/ripple/index.js"; // Utilities
import { computed } from 'vue';
import { VStepperSymbol } from "./shared.js";
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeStepperItemProps = propsFactory({
  color: String,
  title: String,
  subtitle: String,
  complete: Boolean,
  completeIcon: {
    type: IconValue,
    default: '$complete'
  },
  editable: Boolean,
  editIcon: {
    type: IconValue,
    default: '$edit'
  },
  error: Boolean,
  errorIcon: {
    type: IconValue,
    default: '$error'
  },
  icon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  rules: {
    type: Array,
    default: () => []
  }
}, 'StepperItem');
export const makeVStepperItemProps = propsFactory({
  ...makeStepperItemProps(),
  ...makeGroupItemProps()
}, 'VStepperItem');
export const VStepperItem = genericComponent()({
  name: 'VStepperItem',
  directives: {
    vRipple
  },
  props: makeVStepperItemProps(),
  emits: {
    'group:selected': val => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const group = useGroupItem(props, VStepperSymbol, true);
    const step = computed(() => group?.value.value ?? props.value);
    const isValid = computed(() => props.rules.every(handler => handler() === true));
    const isClickable = computed(() => !props.disabled && props.editable);
    const canEdit = computed(() => !props.disabled && props.editable);
    const hasError = computed(() => props.error || !isValid.value);
    const hasCompleted = computed(() => props.complete || props.rules.length > 0 && isValid.value);
    const icon = computed(() => {
      if (hasError.value) return props.errorIcon;
      if (hasCompleted.value) return props.completeIcon;
      if (group.isSelected.value && props.editable) return props.editIcon;
      return props.icon;
    });
    const slotProps = computed(() => ({
      canEdit: canEdit.value,
      hasError: hasError.value,
      hasCompleted: hasCompleted.value,
      title: props.title,
      subtitle: props.subtitle,
      step: step.value,
      value: props.value
    }));
    useRender(() => {
      const hasColor = (!group || group.isSelected.value || hasCompleted.value || canEdit.value) && !hasError.value && !props.disabled;
      const hasTitle = !!(props.title != null || slots.title);
      const hasSubtitle = !!(props.subtitle != null || slots.subtitle);
      function onClick() {
        group?.toggle();
      }
      return _withDirectives(_createElementVNode("button", {
        "class": _normalizeClass(['v-stepper-item', {
          'v-stepper-item--complete': hasCompleted.value,
          'v-stepper-item--disabled': props.disabled,
          'v-stepper-item--error': hasError.value
        }, group?.selectedClass.value]),
        "disabled": !props.editable,
        "type": "button",
        "onClick": onClick
      }, [isClickable.value && genOverlays(true, 'v-stepper-item'), _createVNode(VAvatar, {
        "key": "stepper-avatar",
        "class": "v-stepper-item__avatar",
        "color": hasColor ? props.color : undefined,
        "size": 24
      }, {
        default: () => [slots.icon?.(slotProps.value) ?? (icon.value ? _createVNode(VIcon, {
          "icon": icon.value
        }, null) : step.value)]
      }), _createElementVNode("div", {
        "class": "v-stepper-item__content"
      }, [hasTitle && _createElementVNode("div", {
        "key": "title",
        "class": "v-stepper-item__title"
      }, [slots.title?.(slotProps.value) ?? props.title]), hasSubtitle && _createElementVNode("div", {
        "key": "subtitle",
        "class": "v-stepper-item__subtitle"
      }, [slots.subtitle?.(slotProps.value) ?? props.subtitle]), slots.default?.(slotProps.value)])]), [[vRipple, props.editable && props.ripple, null]]);
    });
    return {};
  }
});
//# sourceMappingURL=VStepperItem.js.map