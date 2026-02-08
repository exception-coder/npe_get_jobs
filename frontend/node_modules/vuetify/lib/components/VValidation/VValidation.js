// Composables
import { makeValidationProps, useValidation } from "../../composables/validation.js"; // Utilities
import { genericComponent } from "../../util/index.js"; // Types
export const VValidation = genericComponent()({
  name: 'VValidation',
  props: makeValidationProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const validation = useValidation(props, 'validation');
    return () => slots.default?.(validation);
  }
});
//# sourceMappingURL=VValidation.js.map