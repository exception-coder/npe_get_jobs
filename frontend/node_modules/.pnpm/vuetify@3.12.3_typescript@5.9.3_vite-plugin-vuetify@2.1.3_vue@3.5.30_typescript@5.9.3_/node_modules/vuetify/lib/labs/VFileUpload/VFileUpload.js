import { mergeProps as _mergeProps, createElementVNode as _createElementVNode, Fragment as _Fragment, createVNode as _createVNode } from "vue";
// Styles
import "./VFileUpload.css";

// Components
import { VFileUploadDropzone, VFileUploadKey } from "./VFileUploadDropzone.js";
import { VFileUploadList } from "./VFileUploadList.js";
import { VDefaultsProvider } from "../../components/VDefaultsProvider/VDefaultsProvider.js";
import { makeVInputProps, VInput } from "../../components/VInput/VInput.js"; // Composables
import { makeFileFilterProps, useFileFilter } from "../../composables/fileFilter.js";
import { useFocus } from "../../composables/focus.js";
import { useForm } from "../../composables/form.js";
import { forwardRefs } from "../../composables/forwardRefs.js";
import { IconValue } from "../../composables/icons.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { provide, ref, toRef, watch } from 'vue';
import { filterInputAttrs, genericComponent, omit, propsFactory, useRender, wrapInArray } from "../../util/index.js"; // Types
export const makeVFileUploadProps = propsFactory({
  browseText: {
    type: String,
    default: '$vuetify.fileUpload.browse'
  },
  dividerText: {
    type: String,
    default: '$vuetify.fileUpload.divider'
  },
  title: {
    type: String,
    default: '$vuetify.fileUpload.title'
  },
  subtitle: String,
  icon: {
    type: IconValue,
    default: '$upload'
  },
  clearable: Boolean,
  insetFileList: Boolean,
  hideBrowse: Boolean,
  multiple: Boolean,
  scrim: {
    type: [Boolean, String],
    default: true
  },
  showSize: Boolean,
  ...makeFileFilterProps(),
  ...omit(makeVInputProps(), ['direction']),
  modelValue: {
    type: [Array, Object],
    default: null,
    validator: val => {
      return wrapInArray(val).every(v => v != null && typeof v === 'object');
    }
  }
}, 'VFileUpload');
export const VFileUpload = genericComponent()({
  name: 'VFileUpload',
  inheritAttrs: false,
  props: makeVFileUploadProps(),
  emits: {
    'update:modelValue': files => true,
    'update:focused': focused => true,
    rejected: files => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      filterAccepted
    } = useFileFilter(props);
    const {
      isFocused
    } = useFocus(props);
    const form = useForm(props);
    const model = useProxiedModel(props, 'modelValue', props.modelValue, val => wrapInArray(val), val => props.multiple || Array.isArray(props.modelValue) ? val : val[0]);
    const vInputRef = ref();
    const vDropzoneRef = ref();
    const inputRef = ref(null);
    const isError = toRef(() => vInputRef.value?.isValid === false);
    provide(VFileUploadKey, {
      files: model,
      disabled: form.isDisabled,
      error: isError,
      onDrop,
      onClickBrowse: onClick,
      onClickRemove
    });
    watch(model, newValue => {
      const hasModelReset = !Array.isArray(newValue) || !newValue.length;
      if (hasModelReset && inputRef.value) {
        inputRef.value.value = '';
      }
    });
    function onDrop(files) {
      selectAccepted(files);
    }
    function onFileSelection(e) {
      if (!e.target || e.repack) return; // prevent loop

      if (!props.filterByType) {
        const target = e.target;
        const newFiles = [...(target.files ?? [])];
        model.value = props.multiple ? [...model.value, ...newFiles] : newFiles;
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
      const newFiles = [...dataTransfer.files];
      model.value = props.multiple ? [...model.value, ...newFiles] : newFiles;
      const event = new Event('change', {
        bubbles: true
      });
      event.repack = true;
      inputRef.value.dispatchEvent(event);
    }
    function onClick() {
      inputRef.value?.click();
    }
    function onClickRemove(index) {
      const newValue = model.value.filter((_, i) => i !== index);
      model.value = newValue;
      if (newValue.length > 0 || !inputRef.value) return;
      inputRef.value.value = '';
    }
    useRender(() => {
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const {
        modelValue: __,
        ...dropzoneProps
      } = VFileUploadDropzone.filterProps(props);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const expectsDirectory = attrs.webkitdirectory !== undefined && attrs.webkitdirectory !== false;
      const acceptFallback = attrs.accept ? String(attrs.accept) : undefined;
      const inputAccept = expectsDirectory ? undefined : props.filterByType ?? acceptFallback;
      const inputNode = _createElementVNode("input", _mergeProps({
        "ref": inputRef,
        "type": "file",
        "accept": inputAccept,
        "disabled": props.disabled ?? undefined,
        "multiple": props.multiple,
        "name": props.name,
        "onChange": onFileSelection
      }, inputAttrs), null);
      return _createVNode(VInput, _mergeProps({
        "ref": vInputRef,
        "modelValue": props.multiple ? model.value : model.value[0],
        "onUpdate:modelValue": val => {
          if (val == null || Array.isArray(val) && !val.length) {
            model.value = [];
          }
        },
        "class": ['v-file-upload', props.class],
        "style": props.style,
        "focused": isFocused.value
      }, rootAttrs, inputProps), {
        ...slots,
        default: () => {
          return _createElementVNode(_Fragment, null, [slots.default ? _createElementVNode(_Fragment, null, [slots.default(), _createElementVNode("input", _mergeProps({
            "ref": inputRef,
            "type": "file",
            "accept": inputAccept,
            "disabled": props.disabled ?? undefined,
            "multiple": props.multiple,
            "name": props.name,
            "style": "display: none;",
            "onChange": onFileSelection
          }, inputAttrs), null)]) : _createVNode(VFileUploadDropzone, _mergeProps({
            "ref": vDropzoneRef
          }, dropzoneProps), {
            browse: slots.browse,
            icon: slots.icon,
            title: slots.title,
            divider: slots.divider,
            single: slots.single,
            item: slots.item,
            input: () => slots.input?.({
              inputNode
            }) ?? inputNode
          }), !slots.default && !props.insetFileList && _createVNode(VDefaultsProvider, {
            "defaults": {
              VFileUploadList: {
                clearable: props.clearable,
                showSize: props.showSize
              }
            }
          }, {
            default: () => [_createVNode(VFileUploadList, null, {
              item: slots.item
            })]
          })]);
        }
      });
    });
    return forwardRefs({
      controlRef: inputRef
    }, vInputRef, vDropzoneRef);
  }
});
//# sourceMappingURL=VFileUpload.js.map