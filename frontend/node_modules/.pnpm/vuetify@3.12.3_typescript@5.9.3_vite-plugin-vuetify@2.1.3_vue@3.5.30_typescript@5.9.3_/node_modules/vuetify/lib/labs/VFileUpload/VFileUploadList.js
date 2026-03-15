import { Fragment as _Fragment, createElementVNode as _createElementVNode, createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
// Components
import { VFileUploadKey } from "./VFileUploadDropzone.js";
import { VFileUploadItem } from "./VFileUploadItem.js";
import { VDefaultsProvider } from "../../components/VDefaultsProvider/VDefaultsProvider.js";
import { makeVListProps, VList } from "../../components/VList/VList.js"; // Utilities
import { inject } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVFileUploadListProps = propsFactory({
  clearable: Boolean,
  showSize: Boolean,
  files: Array,
  ...makeVListProps({
    border: false,
    elevation: 0,
    lines: false
  })
}, 'VFileUploadList');
export const VFileUploadList = genericComponent()({
  name: 'VFileUploadList',
  props: makeVFileUploadListProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const context = inject(VFileUploadKey, null);
    useRender(() => {
      const files = props.files ?? context?.files.value ?? [];
      const disabled = context?.disabled.value ?? props.disabled;
      const listProps = VList.filterProps(props);
      if (!slots.default && !files.length) return _createElementVNode(_Fragment, null, null);
      return _createVNode(VList, _mergeProps(listProps, {
        "disabled": disabled,
        "class": ['v-file-upload-list', props.class],
        "style": props.style,
        "bgColor": "transparent"
      }), {
        default: () => [slots.default?.({
          files,
          onClickRemove: i => context?.onClickRemove(i)
        }) ?? files.map((file, index) => {
          const slotProps = {
            file,
            props: {
              'onClick:remove': () => context?.onClickRemove(index)
            }
          };
          return _createVNode(VDefaultsProvider, {
            "key": index,
            "defaults": {
              VFileUploadItem: {
                file,
                clearable: props.clearable,
                disabled,
                showSize: props.showSize,
                variant: 'flat'
              }
            }
          }, {
            default: () => [slots.item?.(slotProps) ?? _createVNode(VFileUploadItem, {
              "key": index,
              "onClick:remove": () => context?.onClickRemove(index)
            }, null)]
          });
        })]
      });
    });
  }
});
//# sourceMappingURL=VFileUploadList.js.map