import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Components
import { makeVTextFieldProps, VTextField } from "../../components/VTextField/VTextField.js"; // Composables
import { forwardRefs } from "../../composables/forwardRefs.js";
import { isMaskDelimiter, makeMaskProps, useMask } from "../../composables/mask/index.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, nextTick, onBeforeMount, ref, shallowRef, toRef } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVMaskInputProps = propsFactory({
  returnMaskedValue: Boolean,
  ...makeVTextFieldProps(),
  ...makeMaskProps()
}, 'VMaskInput');
export const VMaskInput = genericComponent()({
  name: 'VMaskInput',
  props: makeVMaskInputProps(),
  emits: {
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const vTextFieldRef = ref();
    const inputAction = shallowRef();
    const caretPosition = shallowRef(0);
    const mask = useMask(props);
    const returnMaskedValue = computed(() => props.mask && props.returnMaskedValue);
    const model = useProxiedModel(props, 'modelValue', undefined,
    // Always display masked value in input when mask is applied
    val => props.mask ? mask.mask(mask.unmask(val)) : val, val => {
      if (props.mask) {
        const valueWithoutDelimiters = val ? removeMaskDelimiters(val) : '';

        // E.g. mask is #-# and the input value is '2-23'
        // model-value should be enforced to '2-2'
        const newMaskedValue = mask.mask(valueWithoutDelimiters);
        const newUnmaskedValue = mask.unmask(newMaskedValue);
        const newCaretPosition = getNewCaretPosition({
          oldValue: model.value,
          newValue: newMaskedValue,
          oldCaret: caretPosition.value
        });
        vTextFieldRef.value.value = newMaskedValue;
        vTextFieldRef.value.setSelectionRange(newCaretPosition, newCaretPosition);
        return returnMaskedValue.value ? mask.mask(newUnmaskedValue) : newUnmaskedValue;
      }
      return val;
    });
    const validationValue = toRef(() => returnMaskedValue.value ? model.value : mask.unmask(model.value));
    function removeMaskDelimiters(val) {
      return val.split('').filter(ch => !isMaskDelimiter(ch)).join('');
    }
    function getNewCaretPosition(_ref2) {
      let {
        oldValue,
        newValue,
        oldCaret
      } = _ref2;
      if (!newValue) return 0;
      if (!oldValue) return newValue.length;
      let newCaret;
      if (inputAction.value === 'Backspace') {
        newCaret = oldCaret - 1;
        while (newCaret > 0 && isMaskDelimiter(newValue[newCaret - 1])) newCaret--;
      } else if (inputAction.value === 'Delete') {
        newCaret = oldCaret;
      } else {
        // insertion
        newCaret = oldCaret + 1;
        while (isMaskDelimiter(newValue[newCaret])) newCaret++;
        if (isMaskDelimiter(newValue[oldCaret])) newCaret++;
      }
      return newCaret;
    }
    onBeforeMount(() => {
      if (props.returnMaskedValue) {
        emit('update:modelValue', model.value);
      }
    });
    function onKeyDown(e) {
      if (e.metaKey) return;
      const inputElement = e.target;
      caretPosition.value = inputElement.selectionStart || 0;
      inputAction.value = e.key;
      const hasSelection = inputElement.selectionStart !== inputElement.selectionEnd;
      if (e.key === 'Backspace' && hasSelection) {
        e.preventDefault();
        deleteSelection(e);
      }
    }
    async function onCut(e) {
      e.preventDefault();
      await copySelectionToClipboard(e);
      await deleteSelection(e);
    }
    async function onPaste(e) {
      e.preventDefault();
      const inputElement = e.target;
      const pastedString = removeMaskDelimiters(e.clipboardData?.getData('text') || '');
      if (!pastedString) return;
      const pastedCharacters = [...pastedString];
      const hasSelection = inputElement.selectionStart !== inputElement.selectionEnd;
      if (hasSelection) {
        replaceSelection(inputElement, pastedCharacters);
      } else {
        insertCharacters(inputElement, pastedCharacters);
      }
    }
    async function copySelectionToClipboard(e) {
      const inputElement = e.target;
      const start = inputElement.selectionStart || 0;
      const end = inputElement.selectionEnd || 0;
      const selectedText = inputElement.value.substring(start, end);
      await navigator.clipboard.writeText(selectedText);
    }
    async function deleteSelection(e) {
      const inputElement = e.target;
      const curStart = inputElement.selectionStart || 0;
      caretPosition.value = inputElement.selectionEnd || 0;
      while (caretPosition.value > curStart) {
        const success = await simulateBackspace(inputElement);
        if (!success) break;
      }
    }
    async function simulateBackspace(inputElement) {
      inputAction.value = 'Backspace';
      model.value = inputElement.value.slice(0, caretPosition.value - 1) + inputElement.value.slice(caretPosition.value);
      inputAction.value = '';
      if (caretPosition.value === inputElement.selectionEnd) return false;
      caretPosition.value = inputElement.selectionEnd || 0;
      await nextTick();
      return true;
    }
    async function insertCharacters(inputElement, pastedCharacters) {
      for (let i = 0; i < pastedCharacters.length; i++) {
        await insertCharacter(inputElement, pastedCharacters[i]);
      }
    }
    async function insertCharacter(inputElement, character) {
      caretPosition.value = inputElement.selectionEnd || 0;
      model.value = inputElement.value.slice(0, caretPosition.value) + character + inputElement.value.slice(caretPosition.value);
      await nextTick();
    }
    async function replaceSelection(inputElement, pastedCharacters) {
      caretPosition.value = inputElement.selectionStart || 0;
      for (let i = 0; i < pastedCharacters.length; i++) {
        await replaceCharacter(caretPosition.value, pastedCharacters[i]);
        caretPosition.value++;
      }
    }
    async function replaceCharacter(index, character) {
      let targetIndex = index;

      // Find next non-delimiter position
      while (targetIndex < model.value.length && isMaskDelimiter(model.value[targetIndex])) targetIndex++;
      model.value = model.value.slice(0, targetIndex) + character + model.value.slice(targetIndex + 1);
      await nextTick();
    }
    useRender(() => {
      const textFieldProps = VTextField.filterProps(props);
      return _createVNode(VTextField, _mergeProps(textFieldProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "ref": vTextFieldRef,
        "class": ['v-mask-input', props.class],
        "style": props.style,
        "validationValue": validationValue.value,
        "onCut": onCut,
        "onPaste": onPaste,
        "onKeydown": onKeyDown
      }), {
        ...slots
      });
    });
    return forwardRefs({}, vTextFieldRef);
  }
});
//# sourceMappingURL=VMaskInput.js.map