// Composables
import { useProxiedModel } from "../../../composables/proxiedModel.js"; // Utilities
import { computed, inject, provide, shallowRef, toRef } from 'vue';
import { deepEqual, isPrimitive, propsFactory, wrapInArray } from "../../../util/index.js"; // Types
const singleSelectStrategy = {
  showSelectAll: false,
  allSelected: () => [],
  select: _ref => {
    let {
      items,
      value
    } = _ref;
    return new Set(value ? [items[0]?.value] : []);
  },
  selectAll: _ref2 => {
    let {
      selected
    } = _ref2;
    return selected;
  }
};
const pageSelectStrategy = {
  showSelectAll: true,
  allSelected: _ref3 => {
    let {
      currentPage
    } = _ref3;
    return currentPage;
  },
  select: _ref4 => {
    let {
      items,
      value,
      selected
    } = _ref4;
    for (const item of items) {
      if (value) selected.add(item.value);else selected.delete(item.value);
    }
    return selected;
  },
  selectAll: _ref5 => {
    let {
      value,
      currentPage,
      selected
    } = _ref5;
    return pageSelectStrategy.select({
      items: currentPage,
      value,
      selected
    });
  }
};
const allSelectStrategy = {
  showSelectAll: true,
  allSelected: _ref6 => {
    let {
      allItems
    } = _ref6;
    return allItems;
  },
  select: _ref7 => {
    let {
      items,
      value,
      selected
    } = _ref7;
    for (const item of items) {
      if (value) selected.add(item.value);else selected.delete(item.value);
    }
    return selected;
  },
  selectAll: _ref8 => {
    let {
      value,
      allItems
    } = _ref8;
    return new Set(value ? allItems.map(item => item.value) : []);
  }
};
export const makeDataTableSelectProps = propsFactory({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: 'page'
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: Function
}, 'DataTable-select');
export const VDataTableSelectionSymbol = Symbol.for('vuetify:data-table-selection');
export function provideSelection(props, _ref9) {
  let {
    allItems,
    currentPage
  } = _ref9;
  const selected = useProxiedModel(props, 'modelValue', props.modelValue, v => {
    const customComparator = props.valueComparator;
    if (customComparator) {
      return new Set(wrapInArray(v).map(v => {
        return allItems.value.find(item => customComparator(v, item.value))?.value ?? v;
      }));
    }
    return new Set(wrapInArray(v).map(v => {
      return isPrimitive(v) ? allItems.value.find(item => v === item.value)?.value ?? v : allItems.value.find(item => deepEqual(v, item.value))?.value ?? v;
    }));
  }, v => {
    return [...v.values()];
  });
  const allSelectable = computed(() => allItems.value.filter(item => item.selectable));
  const currentPageSelectable = computed(() => currentPage.value.filter(item => item.selectable));
  const selectStrategy = computed(() => {
    if (typeof props.selectStrategy === 'object') return props.selectStrategy;
    switch (props.selectStrategy) {
      case 'single':
        return singleSelectStrategy;
      case 'all':
        return allSelectStrategy;
      case 'page':
      default:
        return pageSelectStrategy;
    }
  });
  const lastSelectedIndex = shallowRef(null);
  function isSelected(items) {
    return wrapInArray(items).every(item => selected.value.has(item.value));
  }
  function isSomeSelected(items) {
    return wrapInArray(items).some(item => selected.value.has(item.value));
  }
  function select(items, value) {
    const newSelected = selectStrategy.value.select({
      items,
      value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  function toggleSelect(item, index, event) {
    const items = [];
    index = index ?? currentPage.value.findIndex(i => i.value === item.value);
    if (props.selectStrategy !== 'single' && event?.shiftKey && lastSelectedIndex.value !== null) {
      const [start, end] = [lastSelectedIndex.value, index].sort((a, b) => a - b);
      items.push(...currentPage.value.slice(start, end + 1).filter(item => item.selectable));
    } else {
      items.push(item);
      lastSelectedIndex.value = index;
    }
    select(items, !isSelected([item]));
  }
  function selectAll(value) {
    const newSelected = selectStrategy.value.selectAll({
      value,
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  const someSelected = computed(() => selected.value.size > 0);
  const allSelected = computed(() => {
    const items = selectStrategy.value.allSelected({
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value
    });
    return !!items.length && isSelected(items);
  });
  const showSelectAll = toRef(() => selectStrategy.value.showSelectAll);
  const data = {
    toggleSelect,
    select,
    selectAll,
    isSelected,
    isSomeSelected,
    someSelected,
    allSelected,
    showSelectAll,
    lastSelectedIndex,
    selectStrategy
  };
  provide(VDataTableSelectionSymbol, data);
  return data;
}
export function useSelection() {
  const data = inject(VDataTableSelectionSymbol);
  if (!data) throw new Error('Missing selection!');
  return data;
}
//# sourceMappingURL=select.js.map