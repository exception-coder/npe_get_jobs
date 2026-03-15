import { Fragment as _Fragment, createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps } from "vue";
// Components
import { makeDataTableProps } from "./VDataTable.js";
import { makeVDataTableFooterProps, VDataTableFooter } from "./VDataTableFooter.js";
import { VDataTableHeaders } from "./VDataTableHeaders.js";
import { VDataTableRows } from "./VDataTableRows.js";
import { VDivider } from "../VDivider/index.js";
import { VTable } from "../VTable/index.js"; // Composables
import { provideExpanded } from "./composables/expand.js";
import { createGroupBy, provideGroupBy, useGroupedItems } from "./composables/group.js";
import { createHeaders } from "./composables/headers.js";
import { useDataTableItems } from "./composables/items.js";
import { useOptions } from "./composables/options.js";
import { createPagination, makeDataTablePaginateProps, providePagination } from "./composables/paginate.js";
import { provideSelection } from "./composables/select.js";
import { createSort, provideSort } from "./composables/sort.js";
import { provideDefaults } from "../../composables/defaults.js"; // Utilities
import { computed, provide, toRef, toRefs } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVDataTableServerProps = propsFactory({
  itemsLength: {
    type: [Number, String],
    required: true
  },
  ...makeDataTablePaginateProps(),
  ...makeDataTableProps(),
  ...makeVDataTableFooterProps()
}, 'VDataTableServer');
export const VDataTableServer = genericComponent()({
  name: 'VDataTableServer',
  props: makeVDataTableServerProps(),
  emits: {
    'update:modelValue': value => true,
    'update:page': page => true,
    'update:itemsPerPage': page => true,
    'update:sortBy': sortBy => true,
    'update:options': options => true,
    'update:expanded': options => true,
    'update:groupBy': value => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      page,
      itemsPerPage
    } = createPagination(props);
    const {
      disableSort
    } = toRefs(props);
    const itemsLength = computed(() => parseInt(props.itemsLength, 10));
    const {
      columns,
      headers
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(() => props.showSelect),
      showExpand: toRef(() => props.showExpand)
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort,
      page
    });
    const {
      opened,
      isGroupOpen,
      toggleGroup,
      extractRows
    } = provideGroupBy({
      groupBy,
      sortBy,
      disableSort
    });
    const {
      pageCount,
      setItemsPerPage
    } = providePagination({
      page,
      itemsPerPage,
      itemsLength
    });
    const {
      flatItems
    } = useGroupedItems(items, groupBy, opened, () => !!slots['group-summary']);
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems: items,
      currentPage: items
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    const itemsWithoutGroups = computed(() => extractRows(items.value));
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search: toRef(() => props.search)
    });
    provide('v-data-table', {
      toggleSort,
      sortBy
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(() => props.hideNoData),
        noDataText: toRef(() => props.noDataText),
        loading: toRef(() => props.loading),
        loadingText: toRef(() => props.loadingText)
      }
    });
    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      setItemsPerPage,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: itemsWithoutGroups.value.map(item => item.raw),
      internalItems: itemsWithoutGroups.value,
      groupedItems: flatItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const dataTableFooterProps = VDataTableFooter.filterProps(props);
      const dataTableHeadersProps = VDataTableHeaders.filterProps(props);
      const dataTableRowsProps = VDataTableRows.filterProps(props);
      const tableProps = VTable.filterProps(props);
      return _createVNode(VTable, _mergeProps({
        "class": ['v-data-table', {
          'v-data-table--loading': props.loading
        }, props.class],
        "style": props.style
      }, tableProps, {
        "fixedHeader": props.fixedHeader || props.sticky
      }), {
        top: () => slots.top?.(slotProps.value),
        default: () => slots.default ? slots.default(slotProps.value) : _createElementVNode(_Fragment, null, [slots.colgroup?.(slotProps.value), !props.hideDefaultHeader && _createElementVNode("thead", {
          "key": "thead",
          "class": "v-data-table__thead",
          "role": "rowgroup"
        }, [_createVNode(VDataTableHeaders, dataTableHeadersProps, slots)]), slots.thead?.(slotProps.value), !props.hideDefaultBody && _createElementVNode("tbody", {
          "class": "v-data-table__tbody",
          "role": "rowgroup"
        }, [slots['body.prepend']?.(slotProps.value), slots.body ? slots.body(slotProps.value) : _createVNode(VDataTableRows, _mergeProps(attrs, dataTableRowsProps, {
          "items": flatItems.value
        }), slots), slots['body.append']?.(slotProps.value)]), slots.tbody?.(slotProps.value), slots.tfoot?.(slotProps.value)]),
        bottom: () => slots.bottom ? slots.bottom(slotProps.value) : !props.hideDefaultFooter && _createElementVNode(_Fragment, null, [_createVNode(VDivider, null, null), _createVNode(VDataTableFooter, dataTableFooterProps, {
          prepend: slots['footer.prepend']
        })])
      });
    });
  }
});
//# sourceMappingURL=VDataTableServer.js.map