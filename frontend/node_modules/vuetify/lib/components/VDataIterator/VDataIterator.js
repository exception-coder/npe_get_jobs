import { createVNode as _createVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Components
import { VFadeTransition } from "../transitions/index.js";
import { makeDataTableExpandProps, provideExpanded } from "../VDataTable/composables/expand.js";
import { makeDataTableGroupProps, provideGroupBy, useGroupedItems } from "../VDataTable/composables/group.js";
import { useOptions } from "../VDataTable/composables/options.js";
import { createPagination, makeDataTablePaginateProps, providePagination, usePaginatedItems } from "../VDataTable/composables/paginate.js";
import { makeDataTableSelectProps, provideSelection } from "../VDataTable/composables/select.js";
import { createSort, makeDataTableSortProps, provideSort, useSortedItems } from "../VDataTable/composables/sort.js"; // Composables
import { makeDataIteratorItemsProps, useDataIteratorItems } from "./composables/items.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeFilterProps, useFilter } from "../../composables/filter.js";
import { LoaderSlot } from "../../composables/loader.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeTransitionProps, MaybeTransition } from "../../composables/transition.js"; // Utilities
import { computed, toRef } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVDataIteratorProps = propsFactory({
  search: String,
  loading: Boolean,
  ...makeComponentProps(),
  ...makeDataIteratorItemsProps(),
  ...makeDataTableSelectProps(),
  ...makeDataTableSortProps(),
  ...makeDataTablePaginateProps({
    itemsPerPage: 5
  }),
  ...makeDataTableExpandProps(),
  ...makeDataTableGroupProps(),
  ...makeFilterProps(),
  ...makeTagProps(),
  ...makeTransitionProps({
    transition: {
      component: VFadeTransition,
      hideOnLeave: true
    }
  })
}, 'VDataIterator');
export const VDataIterator = genericComponent()({
  name: 'VDataIterator',
  props: makeVDataIteratorProps(),
  emits: {
    'update:modelValue': value => true,
    'update:groupBy': value => true,
    'update:page': value => true,
    'update:itemsPerPage': value => true,
    'update:sortBy': value => true,
    'update:options': value => true,
    'update:expanded': value => true,
    'update:currentItems': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const groupBy = useProxiedModel(props, 'groupBy');
    const search = toRef(() => props.search);
    const {
      items
    } = useDataIteratorItems(props);
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: item => item.raw
    });
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
      sortBy
    });
    const {
      sortedItems
    } = useSortedItems(props, filteredItems, sortByWithGroups, {
      transform: item => item.raw
    });
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened, false);
    const itemsLength = toRef(() => flatItems.value.length);
    const {
      startIndex,
      stopIndex,
      pageCount,
      prevPage,
      nextPage,
      setItemsPerPage,
      setPage
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
      toggleSelect
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
    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      prevPage,
      nextPage,
      setPage,
      setItemsPerPage,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: paginatedItemsWithoutGroups.value,
      itemsCount: filteredItems.value.length,
      groupedItems: paginatedItems.value
    }));
    useRender(() => _createVNode(props.tag, {
      "class": _normalizeClass(['v-data-iterator', {
        'v-data-iterator--loading': props.loading
      }, props.class]),
      "style": _normalizeStyle(props.style)
    }, {
      default: () => [slots.header?.(slotProps.value), _createVNode(MaybeTransition, {
        "transition": props.transition
      }, {
        default: () => [props.loading ? _createVNode(LoaderSlot, {
          "key": "loader",
          "name": "v-data-iterator",
          "active": true
        }, {
          default: slotProps => slots.loader?.(slotProps)
        }) : _createElementVNode("div", {
          "key": "items"
        }, [!paginatedItems.value.length ? slots['no-data']?.() : slots.default?.(slotProps.value)])]
      }), slots.footer?.(slotProps.value)]
    }));
    return {};
  }
});
//# sourceMappingURL=VDataIterator.js.map