// Composables
import { useLocale } from "../../../composables/locale.js";
import { useProxiedModel } from "../../../composables/proxiedModel.js"; // Utilities
import { computed, inject, provide, toRef } from 'vue';
import { getObjectValueByPath, isEmpty, isObject, propsFactory } from "../../../util/index.js"; // Types
export const makeDataTableSortProps = propsFactory({
  initialSortOrder: {
    type: String,
    default: 'asc',
    validator: v => !v || ['asc', 'desc'].includes(v)
  },
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: {
    type: [Boolean, Object],
    default: false
  },
  mustSort: Boolean
}, 'DataTable-sort');
const VDataTableSortSymbol = Symbol.for('vuetify:data-table-sort');
export function createSort(props) {
  const initialSortOrder = toRef(() => props.initialSortOrder);
  const sortBy = useProxiedModel(props, 'sortBy');
  const mustSort = toRef(() => props.mustSort);
  const multiSort = toRef(() => props.multiSort);
  return {
    initialSortOrder,
    sortBy,
    multiSort,
    mustSort
  };
}
function resolveMultiSort(multiSort, event) {
  if (!isObject(multiSort)) {
    return {
      active: !!multiSort
    };
  }
  const {
    key,
    mode,
    modifier
  } = multiSort;
  const reverseMode = modifier === 'alt' && event?.altKey || modifier === 'shift' && event?.shiftKey;
  return {
    active: !key || event?.ctrlKey || event?.metaKey || false,
    mode: reverseMode ? mode === 'append' ? 'prepend' : 'append' : mode
  };
}
export function provideSort(options) {
  const {
    initialSortOrder,
    sortBy,
    mustSort,
    multiSort,
    page
  } = options;
  const toggleSort = function (column, event) {
    let mandatory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (column.key == null) return;
    let newSortBy = sortBy.value.map(x => ({
      ...x
    })) ?? [];
    const item = newSortBy.find(x => x.key === column.key);
    const initialOrder = initialSortOrder.value;
    const secondaryOrder = initialSortOrder.value === 'desc' ? 'asc' : 'desc';
    if (!item) {
      const {
        active,
        mode
      } = resolveMultiSort(multiSort.value, event);
      if (active) {
        if (mode === 'prepend') {
          newSortBy.unshift({
            key: column.key,
            order: initialOrder
          });
        } else {
          newSortBy.push({
            key: column.key,
            order: initialOrder
          });
        }
      } else {
        newSortBy = [{
          key: column.key,
          order: initialOrder
        }];
      }
    } else if (item.order === secondaryOrder) {
      if (mandatory || mustSort.value && newSortBy.length === 1) {
        item.order = initialSortOrder.value;
      } else {
        newSortBy = newSortBy.filter(x => x.key !== column.key);
      }
    } else {
      item.order = secondaryOrder;
    }
    sortBy.value = newSortBy;
    if (page) page.value = 1;
  };
  function isSorted(column) {
    return !!sortBy.value.find(item => item.key === column.key);
  }
  const data = {
    sortBy,
    toggleSort,
    isSorted
  };
  provide(VDataTableSortSymbol, data);
  return data;
}
export function useSort() {
  const data = inject(VDataTableSortSymbol);
  if (!data) throw new Error('Missing sort!');
  return data;
}

// TODO: abstract into project composable
export function useSortedItems(props, items, sortBy, options) {
  const locale = useLocale();
  const sortedItems = computed(() => {
    if (!sortBy.value.length) return items.value;
    return sortItems(items.value, sortBy.value, locale.current.value, {
      transform: options?.transform,
      sortFunctions: {
        ...props.customKeySort,
        ...options?.sortFunctions?.value
      },
      sortRawFunctions: options?.sortRawFunctions?.value
    });
  });
  return {
    sortedItems
  };
}
export function sortItems(items, sortByItems, locale, options) {
  const stringCollator = new Intl.Collator(locale, {
    sensitivity: 'accent',
    usage: 'sort'
  });
  const transformedItems = items.map(item => [item, options?.transform ? options.transform(item) : item]);
  return transformedItems.sort((a, b) => {
    for (let i = 0; i < sortByItems.length; i++) {
      let hasCustomResult = false;
      const sortKey = sortByItems[i].key;
      const sortOrder = sortByItems[i].order ?? 'asc';
      if (sortOrder === false) continue;
      let sortA = getObjectValueByPath(a[1], sortKey);
      let sortB = getObjectValueByPath(b[1], sortKey);
      let sortARaw = a[0].raw;
      let sortBRaw = b[0].raw;
      if (sortOrder === 'desc') {
        [sortA, sortB] = [sortB, sortA];
        [sortARaw, sortBRaw] = [sortBRaw, sortARaw];
      }
      if (options?.sortRawFunctions?.[sortKey]) {
        const customResult = options.sortRawFunctions[sortKey](sortARaw, sortBRaw);
        if (customResult == null) continue;
        hasCustomResult = true;
        if (customResult) return customResult;
      }
      if (options?.sortFunctions?.[sortKey]) {
        const customResult = options.sortFunctions[sortKey](sortA, sortB);
        if (customResult == null) continue;
        hasCustomResult = true;
        if (customResult) return customResult;
      }
      if (hasCustomResult) continue;

      // Dates should be compared numerically
      if (sortA instanceof Date && sortB instanceof Date) {
        sortA = sortA.getTime();
        sortB = sortB.getTime();
      }
      [sortA, sortB] = [sortA, sortB].map(s => s != null ? s.toString().toLocaleLowerCase() : s);
      if (sortA !== sortB) {
        if (isEmpty(sortA) && isEmpty(sortB)) return 0;
        if (isEmpty(sortA)) return -1;
        if (isEmpty(sortB)) return 1;
        if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB);
        return stringCollator.compare(sortA, sortB);
      }
    }
    return 0;
  }).map(_ref => {
    let [item] = _ref;
    return item;
  });
}
//# sourceMappingURL=sort.js.map