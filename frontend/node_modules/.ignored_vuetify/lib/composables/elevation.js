// Utilities
import { isRef, toRef } from 'vue';
import { propsFactory } from "../util/index.js"; // Types
// Composables
export const makeElevationProps = propsFactory({
  elevation: {
    type: [Number, String],
    validator(v) {
      const value = parseInt(v);
      return !isNaN(value) && value >= 0 &&
      // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      value <= 24;
    }
  }
}, 'elevation');
export function useElevation(props) {
  const elevationClasses = toRef(() => {
    const elevation = isRef(props) ? props.value : props.elevation;
    if (elevation == null) return [];
    return [`elevation-${elevation}`];
  });
  return {
    elevationClasses
  };
}
//# sourceMappingURL=elevation.js.map