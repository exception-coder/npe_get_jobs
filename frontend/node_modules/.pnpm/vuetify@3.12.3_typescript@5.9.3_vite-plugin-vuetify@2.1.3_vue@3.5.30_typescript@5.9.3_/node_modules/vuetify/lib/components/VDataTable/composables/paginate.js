// Composables
import { useProxiedModel } from "../../../composables/proxiedModel.js"; // Utilities
import { computed, inject, provide, toValue, watch } from 'vue';
import { clamp, getCurrentInstance, propsFactory } from "../../../util/index.js"; // Types
export const makeDataTablePaginateProps = propsFactory({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  },
  pageBy: {
    type: String,
    default: 'any'
  }
}, 'DataTable-paginate');
const VDataTablePaginationSymbol = Symbol.for('vuetify:data-table-pagination');
export function createPagination(props) {
  const page = useProxiedModel(props, 'page', undefined, value => Number(value ?? 1));
  const itemsPerPage = useProxiedModel(props, 'itemsPerPage', undefined, value => Number(value ?? 10));
  return {
    page,
    itemsPerPage
  };
}
export function providePagination(options) {
  const {
    page,
    itemsPerPage,
    itemsLength
  } = options;
  const startIndex = computed(() => {
    if (itemsPerPage.value === -1) return 0;
    return itemsPerPage.value * (page.value - 1);
  });
  const stopIndex = computed(() => {
    if (itemsPerPage.value === -1) return itemsLength.value;
    return Math.min(itemsLength.value, startIndex.value + itemsPerPage.value);
  });
  const pageCount = computed(() => {
    if (itemsPerPage.value === -1 || itemsLength.value === 0) return 1;
    return Math.ceil(itemsLength.value / itemsPerPage.value);
  });

  // Don't run immediately, items may not have been loaded yet: #17966
  watch([page, pageCount], () => {
    if (page.value > pageCount.value) {
      page.value = pageCount.value;
    }
  });
  function setItemsPerPage(value) {
    itemsPerPage.value = value;
    page.value = 1;
  }
  function nextPage() {
    page.value = clamp(page.value + 1, 1, pageCount.value);
  }
  function prevPage() {
    page.value = clamp(page.value - 1, 1, pageCount.value);
  }
  function setPage(value) {
    page.value = clamp(value, 1, pageCount.value);
  }
  const data = {
    page,
    itemsPerPage,
    startIndex,
    stopIndex,
    pageCount,
    itemsLength,
    nextPage,
    prevPage,
    setPage,
    setItemsPerPage
  };
  provide(VDataTablePaginationSymbol, data);
  return data;
}
export function usePagination() {
  const data = inject(VDataTablePaginationSymbol);
  if (!data) throw new Error('Missing pagination!');
  return data;
}
export function usePaginatedItems(options) {
  const vm = getCurrentInstance('usePaginatedItems');
  const {
    items,
    startIndex,
    stopIndex,
    itemsPerPage
  } = options;
  const paginatedItems = computed(() => {
    if (itemsPerPage.value <= 0) return toValue(items);
    return toValue(items).slice(startIndex.value, stopIndex.value);
  });
  watch(paginatedItems, val => {
    vm.emit('update:currentItems', val);
  }, {
    immediate: true
  });
  return {
    paginatedItems
  };
}
export function usePaginatedGroups(options) {
  const {
    sortedItems,
    paginate,
    group
  } = options;
  const pageBy = toValue(options.pageBy); // TODO: make reactive

  if (pageBy === 'item') {
    const {
      paginatedItems,
      pageCount,
      setItemsPerPage
    } = paginate(sortedItems);
    const {
      flatItems: paginatedItemsWithGroups
    } = group(paginatedItems);
    return {
      pageCount,
      setItemsPerPage,
      paginatedItems: paginatedItemsWithGroups
    };
  }
  if (pageBy === 'group') {
    const {
      flatItems,
      groups
    } = group(sortedItems);
    const {
      paginatedItems: paginatedGroups,
      pageCount,
      setItemsPerPage
    } = paginate(groups);
    const paginatedItemsWithGroups = computed(() => {
      if (!paginatedGroups.value.length) return [];
      const firstGroupId = paginatedGroups.value.at(0).id;
      const lastGroupId = paginatedGroups.value.at(-1).id;
      const start = flatItems.value.findIndex(item => item.type === 'group' && item.id === firstGroupId);
      const lastGroupIndex = flatItems.value.findIndex(item => item.type === 'group' && item.id === lastGroupId);
      const stop = flatItems.value.findIndex((item, i) => i > lastGroupIndex && item.type === 'group' && item.depth === 0);
      return flatItems.value.slice(start, stop === -1 ? undefined : stop);
    });
    return {
      pageCount,
      setItemsPerPage,
      paginatedItems: paginatedItemsWithGroups
    };
  }
  if (pageBy === 'any') {
    const {
      flatItems
    } = group(sortedItems);
    const {
      paginatedItems: paginatedItemsWithGroups,
      pageCount,
      setItemsPerPage
    } = paginate(flatItems);
    return {
      pageCount,
      setItemsPerPage,
      paginatedItems: paginatedItemsWithGroups
    };
  }
  throw new Error(`Unrecognized pagination target ${pageBy}`);
}
//# sourceMappingURL=paginate.js.map