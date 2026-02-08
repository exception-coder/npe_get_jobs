// Utilities
import { computed } from 'vue';
import { propsFactory } from "../util/index.js"; // Types
// Types
// Composables
export const makeIconSizeProps = propsFactory({
  iconSize: [Number, String],
  iconSizes: {
    type: Array,
    default: () => [['x-small', 10], ['small', 16], ['default', 24], ['large', 28], ['x-large', 32]]
  }
}, 'iconSize');
export function useIconSizes(props, fallback) {
  const iconSize = computed(() => {
    const iconSizeMap = new Map(props.iconSizes);
    const _iconSize = props.iconSize ?? fallback() ?? 'default';
    return iconSizeMap.has(_iconSize) ? iconSizeMap.get(_iconSize) : _iconSize;
  });
  return {
    iconSize
  };
}
//# sourceMappingURL=iconSizes.js.map