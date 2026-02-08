// Utilities
import { computed } from 'vue';
import { getCurrentInstanceName, propsFactory } from "../util/index.js"; // Types
// Composables
export const makeBorderProps = propsFactory({
  border: [Boolean, Number, String]
}, 'border');
export function useBorder(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  const borderClasses = computed(() => {
    const border = props.border;
    if (border === true || border === '') {
      return `${name}--border`;
    } else if (typeof border === 'string' || border === 0) {
      return String(border).split(' ').map(v => `border-${v}`);
    }
    return [];
  });
  return {
    borderClasses
  };
}
//# sourceMappingURL=border.js.map