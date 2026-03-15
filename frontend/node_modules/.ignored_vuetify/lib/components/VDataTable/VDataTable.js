import { Fragment as _Fragment, createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps } from "vue";
// Styles
import "./VDataTable.css";

// Components
import { makeVDataTableFooterProps, VDataTableFooter } from "./VDataTableFooter.js";
import { makeVDataTableHeadersProps, VDataTableHeaders } from "./VDataTableHeaders.js";
import { makeVDataTableRowsProps, VDataTableRows } from "./VDataTableRows.js";
import { VDivider } from "../VDivider/index.js";
import { makeVTableProps, VTable } from "../VTable/VTable.js"; // Composables
import { makeDataTableExpandProps, provideExpanded } from "./composables/expand.js";
import { createGroupBy, makeDataTableGroupProps, provideGroupBy, useGroupedItems } from "./composables/group.js";
import { createHeaders, makeDataTableHeaderProps } from "./composables/headers.js";
import { makeDataTableItemsProps, useDataTableItems } from "./composables/items.js";
import { useOptions } from "./composables/options.js";
import { createPagination, makeDataTablePaginateProps, providePagination, usePaginatedItems } from "./composables/paginate.js";
import { makeDataTableSelectProps, provideSelection } from "./composables/select.js";
import { createSort, makeDataTableSortProps, provideSort, useSortedItems } from "./composables/sort.js";
import { provideDefaults } from "../../composables/defaults.js";
import { makeFilterProps, useFilter } from "../../composables/filter.js"; // Utilities
import { computed, toRef, toRefs } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeDataTableProps = propsFactory({
  ...makeVDataTableRowsProps(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...makeDataTableExpandProps(),
  ...makeDataTableGroupProps(),
  ...makeDataTableHeaderProps(),
  ...makeDataTableItemsProps(),
  ...makeDataTableSelectProps(),
  ...makeDataTableSortProps(),
  ...makeVDataTableHeadersProps(),
  ...makeVTableProps()
}, 'DataTable');
export const makeVDataTableProps = propsFactory({
  ...makeDataTablePaginateProps(),
  ...makeDataTableProps(),
  ...makeFilterProps(),
  ...makeVDataTableFooterProps()
}, 'VDataTable');
export const VDataTable = genericComponent()({
  name: 'VDataTable',
  props: makeVDataTableProps(),
  emits: {
    'update:modelValue': value => true,
    'update:page': value => true,
    'update:itemsPerPage': value => true,
    'update:sortBy': value => true,
    'update:options': value => true,
    'update:groupBy': value => true,
    'update:expanded': value => true,
    'update:currentItems': value => true
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
    const {
      columns,
      headers,
      sortFunctions,
      sortRawFunctions,
      filterFunctions
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(() => props.showSelect),
      showExpand: toRef(() => props.showExpand)
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const search = toRef(() => props.search);
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: item => item.columns,
      customKeyFilter: filterFunctions
    });
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort,
      page
    });
    const {
      sortByWithGroups,
      opened,
      extractRows,
      isGroupOpen,
      toggleGroup
    } = provideGroupBy({
      groupBy,
      sortBy,
      disableSort
    });
    const {
      sortedItems
    } = useSortedItems(props, filteredItems, sortByWithGroups, {
      transform: item => ({
        ...item.raw,
        ...item.columns
      }),
      sortFunctions,
      sortRawFunctions
    });
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened, () => !!slots['group-summary']);
    const itemsLength = computed(() => flatItems.value.length);
    const {
      startIndex,
      stopIndex,
      pageCount,
      setItemsPerPage
    } = providePagination({
      page,
      itemsPerPage,
      itemsLength
    });
    const {
      paginatedItems
    } = usePaginatedItems({
      items: flatItems,
      startIndex,
      stopIndex,
      itemsPerPage
    });
    const paginatedItemsWithoutGroups = computed(() => extractRows(paginatedItems.value));
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems: items,
      currentPage: paginatedItemsWithoutGroups
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search
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
      items: paginatedItemsWithoutGroups.value.map(item => item.raw),
      internalItems: paginatedItemsWithoutGroups.value,
      groupedItems: paginatedItems.value,
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
          'v-data-table--show-select': props.showSelect,
          'v-data-table--loading': props.loading
        }, props.class],
        "style": props.style
      }, tableProps, {
        "fixedHeader": props.fixedHeader || props.sticky
      }), {
        top: () => slots.top?.(slotProps.value),
        default: () => slots.default ? slots.default(slotProps.value) : _createElementVNode(_Fragment, null, [slots.colgroup?.(slotProps.value), !props.hideDefaultHeader && _createElementVNode("thead", {
          "key": "thead"
        }, [_createVNode(VDataTableHeaders, dataTableHeadersProps, slots)]), slots.thead?.(slotProps.value), !props.hideDefaultBody && _createElementVNode("tbody", null, [slots['body.prepend']?.(slotProps.value), slots.body ? slots.body(slotProps.value) : _createVNode(VDataTableRows, _mergeProps(attrs, dataTableRowsProps, {
          "items": paginatedItems.value
        }), slots), slots['body.append']?.(slotProps.value)]), slots.tbody?.(slotProps.value), slots.tfoot?.(slotProps.value)]),
        bottom: () => slots.bottom ? slots.bottom(slotProps.value) : !props.hideDefaultFooter && _createElementVNode(_Fragment, null, [_createVNode(VDivider, null, null), _createVNode(VDataTableFooter, dataTableFooterProps, {
          prepend: slots['footer.prepend']
        })])
      });
    });
    return {};
  }
});
//# sourceMappingURL=VDataTable.js.map