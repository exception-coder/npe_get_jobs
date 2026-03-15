// Utilities
import { readonly, ref, shallowRef, watch } from 'vue';

// Types
import { isActionItem } from "../types.js";
function getItemKey(item) {
  if (!isActionItem(item)) return undefined;
  return item.value !== undefined ? String(item.value) : item.title;
}
function findFirstSelectableIndex(items) {
  return items.findIndex(item => isActionItem(item));
}
export function useCommandPaletteNavigation(options) {
  const selectedIndex = ref(0);
  const selectedItemKey = shallowRef(undefined);
  watch(() => options.filteredItems.value, (newItems, oldItems) => {
    if (newItems.length === 0) {
      selectedIndex.value = -1;
      selectedItemKey.value = undefined;
      return;
    }
    if (selectedItemKey.value !== undefined) {
      const newIndex = newItems.findIndex(item => isActionItem(item) && getItemKey(item) === selectedItemKey.value);
      if (newIndex !== -1) {
        selectedIndex.value = newIndex;
        return;
      }
    }
    const firstSelectableIndex = findFirstSelectableIndex(newItems);
    if (firstSelectableIndex !== -1) {
      selectedIndex.value = firstSelectableIndex;
      selectedItemKey.value = getItemKey(newItems[firstSelectableIndex]);
      return;
    }
    selectedIndex.value = 0;
    selectedItemKey.value = undefined;
  }, {
    immediate: true
  });
  function getSelectedItem() {
    return options.filteredItems.value[selectedIndex.value];
  }
  function execute(index, event) {
    const item = options.filteredItems.value[index];
    if (item) {
      options.onItemClick(item, event);
    }
  }
  function executeSelected(event) {
    const item = getSelectedItem();
    if (item) {
      options.onItemClick(item, event);
    }
  }
  function reset() {
    const items = options.filteredItems.value;
    if (items.length === 0) {
      selectedIndex.value = -1;
      selectedItemKey.value = undefined;
      return;
    }
    const firstSelectableIndex = findFirstSelectableIndex(items);
    if (firstSelectableIndex !== -1) {
      selectedIndex.value = firstSelectableIndex;
      selectedItemKey.value = getItemKey(items[firstSelectableIndex]);
      return;
    }
    selectedIndex.value = 0;
    selectedItemKey.value = undefined;
  }
  function setSelectedIndex(index) {
    // Ignore VList's reset to -1 when we have items - we manage selection on filter changes
    if (index === -1 && options.filteredItems.value.length > 0) {
      return;
    }
    selectedIndex.value = index;
    const item = options.filteredItems.value[index];
    selectedItemKey.value = item ? getItemKey(item) : undefined;
  }
  return {
    selectedIndex: readonly(selectedIndex),
    getSelectedItem,
    execute,
    executeSelected,
    reset,
    setSelectedIndex
  };
}
//# sourceMappingURL=useCommandPaletteNavigation.js.map