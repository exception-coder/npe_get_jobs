// Utilities
import { watch } from 'vue';
import { deepEqual, getCurrentInstance } from "../../../util/index.js"; // Types
export function useOptions(_ref) {
  let {
    page,
    itemsPerPage,
    sortBy,
    groupBy,
    search
  } = _ref;
  const vm = getCurrentInstance('VDataTable');
  const options = () => ({
    page: page.value,
    itemsPerPage: itemsPerPage.value,
    sortBy: sortBy.value,
    groupBy: groupBy.value,
    search: search.value
  });
  let oldOptions = null;
  watch(options, value => {
    if (deepEqual(oldOptions, value)) return;

    // Reset page when searching
    if (oldOptions && oldOptions.search !== value.search) {
      page.value = 1;
    }
    vm.emit('update:options', value);
    oldOptions = value;
  }, {
    deep: true,
    immediate: true
  });
}
//# sourceMappingURL=options.js.map