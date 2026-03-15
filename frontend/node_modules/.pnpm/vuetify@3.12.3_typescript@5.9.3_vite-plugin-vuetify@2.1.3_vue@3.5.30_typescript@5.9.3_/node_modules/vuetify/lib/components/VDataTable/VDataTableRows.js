import { createElementVNode as _createElementVNode, Fragment as _Fragment, mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Components
import { makeVDataTableGroupHeaderRowProps, VDataTableGroupHeaderRow } from "./VDataTableGroupHeaderRow.js";
import { makeVDataTableRowProps, VDataTableRow } from "./VDataTableRow.js"; // Composables
import { useExpanded } from "./composables/expand.js";
import { useGroupBy } from "./composables/group.js";
import { useHeaders } from "./composables/headers.js";
import { useSelection } from "./composables/select.js";
import { makeDisplayProps, useDisplay } from "../../composables/display.js";
import { useLocale } from "../../composables/locale.js"; // Utilities
import { Fragment, mergeProps } from 'vue';
import { genericComponent, getPrefixedEventHandlers, pick, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVDataTableRowsProps = propsFactory({
  color: String,
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: '$vuetify.dataIterator.loadingText'
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: '$vuetify.noDataText'
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  ...pick(makeVDataTableRowProps(), ['collapseIcon', 'expandIcon', 'density']),
  ...pick(makeVDataTableGroupHeaderRowProps(), ['groupCollapseIcon', 'groupExpandIcon', 'density']),
  ...makeDisplayProps()
}, 'VDataTableRows');
export const VDataTableRows = genericComponent()({
  name: 'VDataTableRows',
  inheritAttrs: false,
  props: makeVDataTableRowsProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      columns
    } = useHeaders();
    const {
      expandOnClick,
      toggleExpand,
      isExpanded
    } = useExpanded();
    const {
      isSelected,
      toggleSelect
    } = useSelection();
    const {
      toggleGroup,
      isGroupOpen
    } = useGroupBy();
    const {
      t
    } = useLocale();
    const {
      mobile
    } = useDisplay(props);
    useRender(() => {
      const groupHeaderRowProps = pick(props, ['groupCollapseIcon', 'groupExpandIcon', 'density']);
      if (props.loading && (!props.items.length || slots.loading)) {
        return _createElementVNode("tr", {
          "class": "v-data-table-rows-loading",
          "key": "loading"
        }, [_createElementVNode("td", {
          "colspan": columns.value.length
        }, [slots.loading?.() ?? t(props.loadingText)])]);
      }
      if (!props.loading && !props.items.length && !props.hideNoData) {
        return _createElementVNode("tr", {
          "class": "v-data-table-rows-no-data",
          "key": "no-data"
        }, [_createElementVNode("td", {
          "colspan": columns.value.length
        }, [slots['no-data']?.() ?? t(props.noDataText)])]);
      }
      return _createElementVNode(_Fragment, null, [props.items.map((item, index) => {
        if (item.type === 'group') {
          const slotProps = {
            index,
            item,
            columns: columns.value,
            isExpanded,
            toggleExpand,
            isSelected,
            toggleSelect,
            toggleGroup,
            isGroupOpen
          };
          return slots['group-header'] ? slots['group-header'](slotProps) : _createVNode(VDataTableGroupHeaderRow, _mergeProps({
            "key": `group-header_${item.id}`,
            "item": item
          }, getPrefixedEventHandlers(attrs, ':groupHeader', () => slotProps), groupHeaderRowProps), slots);
        }
        if (item.type === 'group-summary') {
          const slotProps = {
            index,
            item,
            columns: columns.value,
            toggleGroup
          };
          return slots['group-summary']?.(slotProps) ?? '';
        }
        const slotProps = {
          index: item.virtualIndex ?? index,
          item: item.raw,
          internalItem: item,
          columns: columns.value,
          isExpanded,
          toggleExpand,
          isSelected,
          toggleSelect
        };
        const itemSlotProps = {
          ...slotProps,
          props: mergeProps({
            key: `item_${item.key ?? item.index}`,
            onClick: expandOnClick.value ? () => {
              toggleExpand(item);
            } : undefined,
            index,
            item,
            color: props.color,
            cellProps: props.cellProps,
            collapseIcon: props.collapseIcon,
            expandIcon: props.expandIcon,
            density: props.density,
            mobile: mobile.value
          }, getPrefixedEventHandlers(attrs, ':row', () => slotProps), typeof props.rowProps === 'function' ? props.rowProps({
            item: slotProps.item,
            index: slotProps.index,
            internalItem: slotProps.internalItem
          }) : props.rowProps)
        };
        return _createElementVNode(_Fragment, {
          "key": itemSlotProps.props.key
        }, [slots.item ? slots.item(itemSlotProps) : _createVNode(VDataTableRow, itemSlotProps.props, slots), isExpanded(item) && slots['expanded-row']?.(slotProps)]);
      })]);
    });
    return {};
  }
});
//# sourceMappingURL=VDataTableRows.js.map