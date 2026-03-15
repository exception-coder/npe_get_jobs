import { createVNode as _createVNode, Fragment as _Fragment, createElementVNode as _createElementVNode, mergeProps as _mergeProps, normalizeClass as _normalizeClass } from "vue";
// Components
import { VDataTableColumn } from "./VDataTableColumn.js";
import { VBtn } from "../VBtn/index.js";
import { VCheckboxBtn } from "../VCheckbox/index.js"; // Composables
import { useExpanded } from "./composables/expand.js";
import { useHeaders } from "./composables/headers.js";
import { useSelection } from "./composables/select.js";
import { useSort } from "./composables/sort.js";
import { makeDensityProps } from "../../composables/density.js";
import { makeDisplayProps, useDisplay } from "../../composables/display.js";
import { IconValue } from "../../composables/icons.js"; // Utilities
import { toDisplayString, withModifiers } from 'vue';
import { EventProp, genericComponent, getObjectValueByPath, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVDataTableRowProps = propsFactory({
  color: String,
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  collapseIcon: {
    type: IconValue,
    default: '$collapse'
  },
  expandIcon: {
    type: IconValue,
    default: '$expand'
  },
  onClick: EventProp(),
  onContextmenu: EventProp(),
  onDblclick: EventProp(),
  ...makeDensityProps(),
  ...makeDisplayProps()
}, 'VDataTableRow');
export const VDataTableRow = genericComponent()({
  name: 'VDataTableRow',
  props: makeVDataTableRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      displayClasses,
      mobile
    } = useDisplay(props, 'v-data-table__tr');
    const {
      isSelected,
      toggleSelect,
      someSelected,
      allSelected,
      selectAll
    } = useSelection();
    const {
      isExpanded,
      toggleExpand
    } = useExpanded();
    const {
      toggleSort,
      sortBy,
      isSorted
    } = useSort();
    const {
      columns
    } = useHeaders();
    useRender(() => _createElementVNode("tr", {
      "class": _normalizeClass(['v-data-table__tr', {
        'v-data-table__tr--clickable': !!(props.onClick || props.onContextmenu || props.onDblclick)
      }, displayClasses.value]),
      "onClick": props.onClick,
      "onContextmenu": props.onContextmenu,
      "onDblclick": props.onDblclick
    }, [props.item && columns.value.map((column, i) => {
      const item = props.item;
      const slotName = `item.${column.key}`;
      const headerSlotName = `header.${column.key}`;
      const slotProps = {
        index: props.index,
        item: item.raw,
        internalItem: item,
        value: getObjectValueByPath(item.columns, column.key),
        column,
        isSelected,
        toggleSelect,
        isExpanded,
        toggleExpand
      };
      const columnSlotProps = {
        column,
        selectAll,
        isSorted,
        toggleSort,
        sortBy: sortBy.value,
        someSelected: someSelected.value,
        allSelected: allSelected.value,
        getSortIcon: () => ''
      };
      const cellProps = typeof props.cellProps === 'function' ? props.cellProps({
        index: slotProps.index,
        item: slotProps.item,
        internalItem: slotProps.internalItem,
        value: slotProps.value,
        column
      }) : props.cellProps;
      const columnCellProps = typeof column.cellProps === 'function' ? column.cellProps({
        index: slotProps.index,
        item: slotProps.item,
        internalItem: slotProps.internalItem,
        value: slotProps.value
      }) : column.cellProps;
      const noPadding = column.key === 'data-table-select' || column.key === 'data-table-expand';
      const isEmpty = column.key === 'data-table-group' && column.width === 0 && !column.title;
      return _createVNode(VDataTableColumn, _mergeProps({
        "align": column.align,
        "indent": column.indent,
        "class": {
          'v-data-table__td--expanded-row': column.key === 'data-table-expand',
          'v-data-table__td--select-row': column.key === 'data-table-select'
        },
        "fixed": column.fixed,
        "fixedOffset": column.fixedOffset,
        "fixedEndOffset": column.fixedEndOffset,
        "lastFixed": column.lastFixed,
        "firstFixedEnd": column.firstFixedEnd,
        "maxWidth": !mobile.value ? column.maxWidth : undefined,
        "noPadding": noPadding,
        "empty": isEmpty,
        "nowrap": column.nowrap,
        "width": !mobile.value ? column.width : undefined
      }, cellProps, columnCellProps), {
        default: () => {
          if (column.key === 'data-table-select') {
            return slots['item.data-table-select']?.({
              ...slotProps,
              props: {
                color: props.color,
                disabled: !item.selectable,
                modelValue: isSelected([item]),
                onClick: withModifiers(() => toggleSelect(item), ['stop'])
              }
            }) ?? _createVNode(VCheckboxBtn, {
              "color": props.color,
              "disabled": !item.selectable,
              "density": props.density,
              "modelValue": isSelected([item]),
              "onClick": withModifiers(event => toggleSelect(item, props.index, event), ['stop'])
            }, null);
          }
          if (column.key === 'data-table-expand') {
            return slots['item.data-table-expand']?.({
              ...slotProps,
              props: {
                icon: isExpanded(item) ? props.collapseIcon : props.expandIcon,
                size: 'small',
                variant: 'text',
                onClick: withModifiers(() => toggleExpand(item), ['stop'])
              }
            }) ?? _createVNode(VBtn, {
              "icon": isExpanded(item) ? props.collapseIcon : props.expandIcon,
              "size": "small",
              "variant": "text",
              "onClick": withModifiers(() => toggleExpand(item), ['stop'])
            }, null);
          }
          if (slots[slotName] && !mobile.value) return slots[slotName](slotProps);
          const displayValue = toDisplayString(slotProps.value);
          return !mobile.value ? displayValue : _createElementVNode(_Fragment, null, [_createElementVNode("div", {
            "class": "v-data-table__td-title"
          }, [slots[headerSlotName]?.(columnSlotProps) ?? column.title]), _createElementVNode("div", {
            "class": "v-data-table__td-value"
          }, [slots[slotName]?.(slotProps) ?? displayValue])]);
        }
      });
    })]));
  }
});
//# sourceMappingURL=VDataTableRow.js.map