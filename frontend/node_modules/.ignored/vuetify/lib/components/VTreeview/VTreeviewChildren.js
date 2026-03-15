import { Fragment as _Fragment, createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps } from "vue";
// Components
import { VTreeviewGroup } from "./VTreeviewGroup.js";
import { makeVTreeviewItemProps, VTreeviewItem } from "./VTreeviewItem.js";
import { VCheckboxBtn } from "../VCheckbox/index.js";
import { VDivider } from "../VDivider/index.js";
import { VListItemAction, VListSubheader } from "../VList/index.js"; // Composables
import { makeDensityProps } from "../../composables/density.js";
import { IconValue } from "../../composables/icons.js"; // Utilities
import { computed, reactive, ref, toRaw } from 'vue';
import { genericComponent, getIndentLines, pick, propsFactory, renderSlot } from "../../util/index.js"; // Types
export const makeVTreeviewChildrenProps = propsFactory({
  fluid: Boolean,
  disabled: Boolean,
  loadChildren: Function,
  loadingIcon: {
    type: String,
    default: '$loading'
  },
  items: Array,
  openOnClick: {
    type: Boolean,
    default: undefined
  },
  indeterminateIcon: {
    type: IconValue,
    default: '$checkboxIndeterminate'
  },
  falseIcon: IconValue,
  trueIcon: IconValue,
  returnObject: Boolean,
  activatable: Boolean,
  selectable: Boolean,
  selectedColor: String,
  selectStrategy: [String, Function, Object],
  index: Number,
  isLastGroup: Boolean,
  separateRoots: Boolean,
  parentIndentLines: Array,
  indentLinesVariant: String,
  path: {
    type: Array,
    default: () => []
  },
  ...pick(makeVTreeviewItemProps(), ['hideActions']),
  ...makeDensityProps()
}, 'VTreeviewChildren');
export const VTreeviewChildren = genericComponent()({
  name: 'VTreeviewChildren',
  props: makeVTreeviewChildrenProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isLoading = reactive(new Set());
    const activatorItems = ref([]);
    const isClickOnOpen = computed(() => !props.disabled && (props.openOnClick != null ? props.openOnClick : props.selectable && !props.activatable));
    async function checkChildren(item) {
      try {
        if (!props.items?.length || !props.loadChildren) return;
        if (item?.children?.length === 0) {
          isLoading.add(item.value);
          await props.loadChildren(item.raw);
        }
      } finally {
        isLoading.delete(item.value);
      }
    }
    function selectItem(select, isSelected) {
      if (props.selectable) {
        select(isSelected);
      }
    }
    return () => slots.default?.() ?? props.items?.map((item, index, items) => {
      const {
        children,
        props: itemProps
      } = item;
      const loading = isLoading.has(item.value);
      const nextItemHasChildren = !!items.at(index + 1)?.children;
      const depth = props.path?.length ?? 0;
      const isLast = items.length - 1 === index;
      const treeItemProps = {
        index,
        depth,
        isFirst: index === 0,
        isLast,
        path: [...props.path, index],
        hideAction: props.hideActions
      };
      const indentLines = getIndentLines({
        depth,
        isLast,
        isLastGroup: props.isLastGroup,
        leafLinks: !props.hideActions && !props.fluid,
        separateRoots: props.separateRoots,
        parentIndentLines: props.parentIndentLines,
        variant: props.indentLinesVariant
      });
      const slotsWithItem = {
        toggle: slots.toggle ? slotProps => slots.toggle?.({
          ...slotProps,
          ...treeItemProps,
          item: item.raw,
          internalItem: item,
          loading
        }) : undefined,
        prepend: slotProps => _createElementVNode(_Fragment, null, [props.selectable && (!children || children && !['leaf', 'single-leaf'].includes(props.selectStrategy)) && _createVNode(VListItemAction, {
          "start": true
        }, {
          default: () => [_createVNode(VCheckboxBtn, {
            "key": item.value,
            "modelValue": slotProps.isSelected,
            "disabled": props.disabled,
            "loading": loading,
            "color": props.selectedColor,
            "density": props.density,
            "indeterminate": slotProps.isIndeterminate,
            "indeterminateIcon": props.indeterminateIcon,
            "falseIcon": props.falseIcon,
            "trueIcon": props.trueIcon,
            "onUpdate:modelValue": v => selectItem(slotProps.select, v),
            "onClick": e => e.stopPropagation(),
            "onKeydown": e => {
              if (!['Enter', 'Space'].includes(e.key)) return;
              e.stopPropagation();
              selectItem(slotProps.select, slotProps.isSelected);
            }
          }, null)]
        }), slots.prepend?.({
          ...slotProps,
          ...treeItemProps,
          item: item.raw,
          internalItem: item
        })]),
        append: slots.append ? slotProps => slots.append?.({
          ...slotProps,
          ...treeItemProps,
          item: item.raw,
          internalItem: item
        }) : undefined,
        title: slots.title ? slotProps => slots.title?.({
          ...slotProps,
          item: item.raw,
          internalItem: item
        }) : undefined,
        subtitle: slots.subtitle ? slotProps => slots.subtitle?.({
          ...slotProps,
          item: item.raw,
          internalItem: item
        }) : undefined
      };
      const treeviewGroupProps = VTreeviewGroup.filterProps(itemProps);
      const treeviewChildrenProps = VTreeviewChildren.filterProps({
        ...props,
        ...treeItemProps
      });
      return children ? _createVNode(VTreeviewGroup, _mergeProps(treeviewGroupProps, {
        "value": props.returnObject ? item.raw : treeviewGroupProps?.value,
        "rawId": treeviewGroupProps?.value
      }), {
        activator: _ref2 => {
          let {
            props: activatorProps
          } = _ref2;
          const listItemProps = {
            ...itemProps,
            ...activatorProps,
            value: itemProps?.value,
            indentLines: indentLines.node,
            onToggleExpand: [() => checkChildren(item), activatorProps.onClick],
            onClick: isClickOnOpen.value ? [() => checkChildren(item), activatorProps.onClick] : () => selectItem(activatorItems.value[index]?.select, !activatorItems.value[index]?.isSelected)
          };
          return renderSlot(slots.header, {
            props: listItemProps,
            item: item.raw,
            internalItem: item,
            loading
          }, () => _createVNode(VTreeviewItem, _mergeProps({
            "ref": el => activatorItems.value[index] = el
          }, listItemProps, {
            "hasCustomPrepend": !!slots.prepend,
            "hideActions": props.hideActions,
            "value": props.returnObject ? item.raw : itemProps.value,
            "loading": loading
          }), slotsWithItem));
        },
        default: () => _createVNode(VTreeviewChildren, _mergeProps(treeviewChildrenProps, {
          "items": children,
          "indentLinesVariant": props.indentLinesVariant,
          "parentIndentLines": indentLines.children,
          "isLastGroup": nextItemHasChildren,
          "returnObject": props.returnObject
        }), slots)
      }) : renderSlot(slots.item, {
        props: itemProps,
        item: item.raw,
        internalItem: item
      }, () => {
        if (item.type === 'divider') {
          return renderSlot(slots.divider, {
            props: item.raw
          }, () => _createVNode(VDivider, item.props, null));
        }
        if (item.type === 'subheader') {
          return renderSlot(slots.subheader, {
            props: item.raw
          }, () => _createVNode(VListSubheader, item.props, null));
        }
        return _createVNode(VTreeviewItem, _mergeProps(itemProps, {
          "hasCustomPrepend": !!slots.prepend,
          "hideActions": props.hideActions,
          "indentLines": indentLines.leaf,
          "value": props.returnObject ? toRaw(item.raw) : itemProps.value
        }), slotsWithItem);
      });
    });
  }
});
//# sourceMappingURL=VTreeviewChildren.js.map