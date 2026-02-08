// Utilities
import { computed, toRef, toValue, useId } from 'vue';
import { propsFactory } from "../util/index.js"; // Types
import { useLocale } from "./locale.js"; // Types
// Composables
export const makeMenuActivatorProps = propsFactory({
  closeText: {
    type: String,
    default: '$vuetify.close'
  },
  openText: {
    type: String,
    default: '$vuetify.open'
  }
}, 'autocomplete');
export function useMenuActivator(props, isOpen) {
  const {
    t
  } = useLocale();
  const uid = useId();
  const menuId = computed(() => `menu-${uid}`);
  const ariaExpanded = toRef(() => toValue(isOpen));
  const ariaControls = toRef(() => menuId.value);
  const ariaLabel = toRef(() => t(toValue(isOpen) ? props.closeText : props.openText));
  return {
    menuId,
    ariaExpanded,
    ariaControls,
    ariaLabel
  };
}
//# sourceMappingURL=menuActivator.js.map