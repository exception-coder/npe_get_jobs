// Utilities
import { convertToUnit, destructComputed, getCurrentInstanceName, includes, propsFactory } from "../util/index.js"; // Types
const predefinedSizes = ['x-small', 'small', 'default', 'large', 'x-large'];
// Composables
export const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: 'default'
  }
}, 'size');
export function useSize(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  return destructComputed(() => {
    const size = props.size;
    let sizeClasses;
    let sizeStyles;
    if (includes(predefinedSizes, size)) {
      sizeClasses = `${name}--size-${size}`;
    } else if (size) {
      sizeStyles = {
        width: convertToUnit(size),
        height: convertToUnit(size)
      };
    }
    return {
      sizeClasses,
      sizeStyles
    };
  });
}
//# sourceMappingURL=size.js.map