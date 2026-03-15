import { Fragment as _Fragment, mergeProps as _mergeProps, createElementVNode as _createElementVNode, createVNode as _createVNode, normalizeClass as _normalizeClass } from "vue";
// Styles
import "./VFileInput.css";

// Components
import { VChip } from "../VChip/index.js";
import { VCounter } from "../VCounter/index.js";
import { VField } from "../VField/index.js";
import { makeVFieldProps } from "../VField/VField.js";
import { makeVInputProps, VInput } from "../VInput/VInput.js"; // Composables
import { useFileDrop } from "../../composables/fileDrop.js";
import { makeFileFilterProps, useFileFilter } from "../../composables/fileFilter.js";
import { useFocus } from "../../composables/focus.js";
import { forwardRefs } from "../../composables/forwardRefs.js";
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, nextTick, ref, shallowRef, toRef, watch } from 'vue';
import { callEvent, filterInputAttrs, genericComponent, humanReadableFileSize, omit, propsFactory, useRender, wrapInArray } from "../../util/index.js"; // Types
export const makeVFileInputProps = propsFactory({
  chips: Boolean,
  counter: Boolean,
  counterSizeString: {
    type: String,
    default: '$vuetify.fileInput.counterSize'
  },
  counterString: {
    type: String,
    default: '$vuetify.fileInput.counter'
  },
  hideInput: Boolean,
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String],
    default: false,
    validator: v => {
      return typeof v === 'boolean' || [1000, 1024].includes(Number(v));
    }
  },
  truncateLength: {
    type: [Number, String],
    default: 22
  },
  ...omit(makeVInputProps({
    prependIcon: '$file'
  }), ['direction']),
  modelValue: {
    type: [Array, Object],
    default: props => props.multiple ? [] : null,
    validator: val => {
      return wrapInArray(val).every(v => v != null && typeof v === 'object');
    }
  },
  ...makeFileFilterProps(),
  ...makeVFieldProps({
    clearable: true
  })
}, 'VFileInput');
export const VFileInput = genericComponent()({
  name: 'VFileInput',
  inheritAttrs: false,
  props: makeVFileInputProps(),
  emits: {
    'click:control': e => true,
    'mousedown:control': e => true,
    'update:focused': focused => true,
    'update:modelValue': files => true,
    rejected: files => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      filterAccepted
    } = useFileFilter(props);
    const model = useProxiedModel(props, 'modelValue', props.modelValue, val => wrapInArray(val), val => !props.multiple && Array.isArray(val) ? val[0] : val);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const base = computed(() => typeof props.showSize !== 'boolean' ? props.showSize : undefined);
    const totalBytes = computed(() => (model.value ?? []).reduce((bytes, _ref2) => {
      let {
        size = 0
      } = _ref2;
      return bytes + size;
    }, 0));
    const totalBytesReadable = computed(() => humanReadableFileSize(totalBytes.value, base.value));
    const fileNames = computed(() => (model.value ?? []).map(file => {
      const {
        name = '',
        size = 0
      } = file;
      const truncatedText = truncateText(name);
      return !props.showSize ? truncatedText : `${truncatedText} (${humanReadableFileSize(size, base.value)})`;
    }));
    const counterValue = computed(() => {
      const fileCount = model.value?.length ?? 0;
      if (props.showSize) return t(props.counterSizeString, fileCount, totalBytesReadable.value);else return t(props.counterString, fileCount);
    });
    const vInputRef = ref();
    const vFieldRef = ref();
    const inputRef = ref();
    const isActive = toRef(() => isFocused.value || props.active);
    const isPlainOrUnderlined = computed(() => ['plain', 'underlined'].includes(props.variant));
    const isDragging = shallowRef(false);
    const {
      handleDrop,
      hasFilesOrFolders
    } = useFileDrop();
    function onFocus() {
      if (inputRef.value !== document.activeElement) {
        inputRef.value?.focus();
      }
      if (!isFocused.value) focus();
    }
    function onClickPrepend(e) {
      inputRef.value?.click();
    }
    function onControlMousedown(e) {
      emit('mousedown:control', e);
    }
    function onControlClick(e) {
      inputRef.value?.click();
      emit('click:control', e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = [];
        callEvent(props['onClick:clear'], e);
      });
    }
    function truncateText(str) {
      if (str.length < Number(props.truncateLength)) return str;
      const charsKeepOneSide = Math.floor((Number(props.truncateLength) - 1) / 2);
      return `${str.slice(0, charsKeepOneSide)}…${str.slice(str.length - charsKeepOneSide)}`;
    }
    function onDragover(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      isDragging.value = true;
    }
    function onDragleave(e) {
      e.preventDefault();
      isDragging.value = false;
    }
    async function onDrop(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      isDragging.value = false;
      if (!inputRef.value || !hasFilesOrFolders(e)) return;
      const allDroppedFiles = await handleDrop(e);
      selectAccepted(allDroppedFiles);
    }
    function onFileSelection(e) {
      if (!e.target || e.repack) return; // prevent loop

      if (!props.filterByType) {
        const target = e.target;
        model.value = [...(target.files ?? [])];
      } else {
        selectAccepted([...e.target.files]);
      }
    }
    function selectAccepted(files) {
      const dataTransfer = new DataTransfer();
      const {
        accepted,
        rejected
      } = filterAccepted(files);
      if (rejected.length) {
        emit('rejected', rejected);
      }
      for (const file of accepted) {
        dataTransfer.items.add(file);
      }
      inputRef.value.files = dataTransfer.files;
      model.value = [...dataTransfer.files];
      const event = new Event('change', {
        bubbles: true
      });
      event.repack = true;
      inputRef.value.dispatchEvent(event);
    }
    watch(model, newValue => {
      const hasModelReset = !Array.isArray(newValue) || !newValue.length;
      if (hasModelReset && inputRef.value) {
        inputRef.value.value = '';
      }
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = {
        ...VField.filterProps(props),
        'onClick:clear': onClear
      };
      const expectsDirectory = attrs.webkitdirectory !== undefined && attrs.webkitdirectory !== false;
      const acceptFallback = attrs.accept ? String(attrs.accept) : undefined;
      const inputAccept = expectsDirectory ? undefined : props.filterByType ?? acceptFallback;
      return _createVNode(VInput, _mergeProps({
        "ref": vInputRef,
        "modelValue": props.multiple ? model.value : model.value[0],
        "class": ['v-file-input', {
          'v-file-input--chips': !!props.chips,
          'v-file-input--dragging': isDragging.value,
          'v-file-input--hide': props.hideInput,
          'v-input--plain-underlined': isPlainOrUnderlined.value
        }, props.class],
        "style": props.style,
        "onClick:prepend": onClickPrepend
      }, rootAttrs, inputProps, {
        "centerAffix": !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: _ref3 => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid,
            hasDetails
          } = _ref3;
          return _createVNode(VField, _mergeProps({
            "ref": vFieldRef,
            "prependIcon": props.prependIcon,
            "onMousedown": onControlMousedown,
            "onClick": onControlClick,
            "onClick:prependInner": props['onClick:prependInner'],
            "onClick:appendInner": props['onClick:appendInner']
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "details": hasDetails.value,
            "error": isValid.value === false,
            "onDragover": onDragover,
            "onDrop": onDrop
          }), {
            ...slots,
            default: _ref4 => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                },
                controlRef
              } = _ref4;
              return _createElementVNode(_Fragment, null, [_createElementVNode("input", _mergeProps({
                "ref": val => inputRef.value = controlRef.value = val,
                "type": "file",
                "accept": inputAccept,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "multiple": props.multiple,
                "name": props.name,
                "onClick": e => {
                  e.stopPropagation();
                  if (isReadonly.value) e.preventDefault();
                  onFocus();
                },
                "onChange": onFileSelection,
                "onDragleave": onDragleave,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), _createElementVNode("div", {
                "class": _normalizeClass(fieldClass)
              }, [!!model.value?.length && !props.hideInput && (slots.selection ? slots.selection({
                fileNames: fileNames.value,
                totalBytes: totalBytes.value,
                totalBytesReadable: totalBytesReadable.value
              }) : props.chips ? fileNames.value.map(text => _createVNode(VChip, {
                "key": text,
                "size": "small",
                "text": text
              }, null)) : fileNames.value.join(', '))])]);
            }
          });
        },
        details: hasDetails ? slotProps => _createElementVNode(_Fragment, null, [slots.details?.(slotProps), hasCounter && _createElementVNode(_Fragment, null, [_createElementVNode("span", null, null), _createVNode(VCounter, {
          "active": !!model.value?.length,
          "value": counterValue.value,
          "disabled": props.disabled
        }, slots.counter)])]) : undefined
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});
//# sourceMappingURL=VFileInput.js.map