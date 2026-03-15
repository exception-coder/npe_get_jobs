// Composables
import { useProxiedModel } from "../../../composables/proxiedModel.js"; // Utilities
import { inject, provide, toRaw, toRef } from 'vue';
import { propsFactory } from "../../../util/index.js"; // Types
export const makeDataTableExpandProps = propsFactory({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, 'DataTable-expand');
export const VDataTableExpandedKey = Symbol.for('vuetify:datatable:expanded');
export function provideExpanded(props) {
  const expandOnClick = toRef(() => props.expandOnClick);
  const expanded = useProxiedModel(props, 'expanded', props.expanded, v => {
    return new Set(v);
  }, v => {
    return [...v.values()];
  });
  function expand(item, value) {
    const newExpanded = new Set(expanded.value);
    const rawValue = toRaw(item.value);
    if (!value) {
      const item = [...expanded.value].find(x => toRaw(x) === rawValue);
      newExpanded.delete(item);
    } else {
      newExpanded.add(rawValue);
    }
    expanded.value = newExpanded;
  }
  function isExpanded(item) {
    const rawValue = toRaw(item.value);
    return [...expanded.value].some(x => toRaw(x) === rawValue);
  }
  function toggleExpand(item) {
    expand(item, !isExpanded(item));
  }
  const data = {
    expand,
    expanded,
    expandOnClick,
    isExpanded,
    toggleExpand
  };
  provide(VDataTableExpandedKey, data);
  return data;
}
export function useExpanded() {
  const data = inject(VDataTableExpandedKey);
  if (!data) throw new Error('foo');
  return data;
}
//# sourceMappingURL=expand.js.map