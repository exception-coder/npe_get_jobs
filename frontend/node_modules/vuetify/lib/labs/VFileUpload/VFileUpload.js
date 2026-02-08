import { mergeProps as _mergeProps, createElementVNode as _createElementVNode, Fragment as _Fragment, createVNode as _createVNode } from "vue";
// Styles
import "./VFileUpload.css";

// Components
import { VFileUploadItem } from "./VFileUploadItem.js";
import { VBtn } from "../../components/VBtn/VBtn.js";
import { VDefaultsProvider } from "../../components/VDefaultsProvider/VDefaultsProvider.js";
import { makeVDividerProps, VDivider } from "../../components/VDivider/VDivider.js";
import { VIcon } from "../../components/VIcon/VIcon.js";
import { VOverlay } from "../../components/VOverlay/VOverlay.js";
import { makeVSheetProps, VSheet } from "../../components/VSheet/VSheet.js"; // Composables
import { makeDelayProps } from "../../composables/delay.js";
import { makeDensityProps, useDensity } from "../../composables/density.js";
import { useFileDrop } from "../../composables/fileDrop.js";
import { makeFileFilterProps, useFileFilter } from "../../composables/fileFilter.js";
import { IconValue } from "../../composables/icons.js";
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { ref, shallowRef } from 'vue';
import { filterInputAttrs, genericComponent, pick, propsFactory, useRender, wrapInArray } from "../../util/index.js"; // Types
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
  modelValue: {
    type: [Array, Object],
    default: null,
    validator: val => {
      return wrapInArray(val).every(v => v != null && typeof v === 'object');
    }
  },
  clearable: Boolean,
  disabled: Boolean,
  hideBrowse: Boolean,
  multiple: Boolean,
  scrim: {
    type: [Boolean, String],
    default: true
  },
  showSize: Boolean,
  name: String,
  ...makeFileFilterProps(),
  ...makeDelayProps(),
  ...makeDensityProps(),
  ...pick(makeVDividerProps({
    length: 150
  }), ['length', 'thickness', 'opacity']),
  ...makeVSheetProps()
}, 'VFileUpload');
export const VFileUpload = genericComponent()({
  name: 'VFileUpload',
  inheritAttrs: false,
  props: makeVFileUploadProps(),
  emits: {
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
      densityClasses
    } = useDensity(props);
    const {
      filterAccepted
    } = useFileFilter(props);
    const model = useProxiedModel(props, 'modelValue', props.modelValue, val => wrapInArray(val), val => props.multiple || Array.isArray(props.modelValue) ? val : val[0]);
    const isDragging = shallowRef(false);
    const vSheetRef = ref(null);
    const inputRef = ref(null);
    const {
      handleDrop
    } = useFileDrop();
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
      if (!inputRef.value) return;
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
      const hasTitle = !!(slots.title || props.title);
      const hasIcon = !!(slots.icon || props.icon);
      const hasBrowse = !!(!props.hideBrowse && (slots.browse || props.density === 'default'));
      const cardProps = VSheet.filterProps(props);
      const dividerProps = VDivider.filterProps(props);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const expectsDirectory = attrs.webkitdirectory !== undefined && attrs.webkitdirectory !== false;
      const acceptFallback = attrs.accept ? String(attrs.accept) : undefined;
      const inputAccept = expectsDirectory ? undefined : props.filterByType ?? acceptFallback;
      const inputNode = _createElementVNode("input", _mergeProps({
        "ref": inputRef,
        "type": "file",
        "accept": inputAccept,
        "disabled": props.disabled,
        "multiple": props.multiple,
        "name": props.name,
        "onChange": onFileSelection
      }, inputAttrs), null);
      return _createElementVNode(_Fragment, null, [_createVNode(VSheet, _mergeProps({
        "ref": vSheetRef
      }, cardProps, {
        "class": ['v-file-upload', {
          'v-file-upload--clickable': !hasBrowse,
          'v-file-upload--disabled': props.disabled,
          'v-file-upload--dragging': isDragging.value
        }, densityClasses.value, props.class],
        "style": [props.style],
        "onDragleave": onDragleave,
        "onDragover": onDragover,
        "onDrop": onDrop,
        "onClick": !hasBrowse ? onClick : undefined
      }, rootAttrs), {
        default: () => [hasIcon && _createElementVNode("div", {
          "key": "icon",
          "class": "v-file-upload-icon"
        }, [!slots.icon ? _createVNode(VIcon, {
          "key": "icon-icon",
          "icon": props.icon
        }, null) : _createVNode(VDefaultsProvider, {
          "key": "icon-defaults",
          "defaults": {
            VIcon: {
              icon: props.icon
            }
          }
        }, {
          default: () => [slots.icon()]
        })]), hasTitle && _createElementVNode("div", {
          "key": "title",
          "class": "v-file-upload-title"
        }, [slots.title?.() ?? t(props.title)]), props.density === 'default' && _createElementVNode(_Fragment, null, [_createElementVNode("div", {
          "key": "upload-divider",
          "class": "v-file-upload-divider"
        }, [slots.divider?.() ?? _createVNode(VDivider, dividerProps, {
          default: () => [t(props.dividerText)]
        })]), hasBrowse && _createElementVNode(_Fragment, null, [!slots.browse ? _createVNode(VBtn, {
          "readonly": props.disabled,
          "size": "large",
          "text": t(props.browseText),
          "variant": "tonal",
          "onClick": onClick
        }, null) : _createVNode(VDefaultsProvider, {
          "defaults": {
            VBtn: {
              readonly: props.disabled,
              size: 'large',
              text: t(props.browseText),
              variant: 'tonal'
            }
          }
        }, {
          default: () => [slots.browse({
            props: {
              onClick
            }
          })]
        })]), props.subtitle && _createElementVNode("div", {
          "class": "v-file-upload-subtitle"
        }, [props.subtitle])]), _createVNode(VOverlay, {
          "modelValue": isDragging.value,
          "contained": true,
          "scrim": props.scrim
        }, null), slots.input?.({
          inputNode
        }) ?? inputNode]
      }), model.value.length > 0 && _createElementVNode("div", {
        "class": "v-file-upload-items"
      }, [model.value.map((file, i) => {
        const slotProps = {
          file,
          props: {
            'onClick:remove': () => onClickRemove(i)
          }
        };
        return _createVNode(VDefaultsProvider, {
          "key": i,
          "defaults": {
            VFileUploadItem: {
              file,
              clearable: props.clearable,
              disabled: props.disabled,
              showSize: props.showSize
            }
          }
        }, {
          default: () => [slots.item?.(slotProps) ?? _createVNode(VFileUploadItem, {
            "key": i,
            "onClick:remove": () => onClickRemove(i)
          }, slots)]
        });
      })])]);
    });
  }
});
//# sourceMappingURL=VFileUpload.js.map