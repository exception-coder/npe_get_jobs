import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Components
import { makeVTreeviewChildrenProps, VTreeviewChildren } from "./VTreeviewChildren.js";
import { makeVListProps, useListItems, VList } from "../VList/VList.js"; // Composables
import { provideDefaults } from "../../composables/defaults.js";
import { makeFilterProps, useFilter } from "../../composables/filter.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, provide, ref, toRaw, toRef } from 'vue';
import { genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
import { VTreeviewSymbol } from "./shared.js";
function flatten(items) {
  let flat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  for (const item of items) {
    flat.push(item);
    if (item.children) flatten(item.children, flat);
  }
  return flat;
}
export const makeVTreeviewProps = propsFactory({
  openAll: Boolean,
  indentLines: [Boolean, String],
  search: String,
  ...makeFilterProps({
    filterKeys: ['title']
  }),
  ...omit(makeVTreeviewChildrenProps(), ['index', 'path', 'indentLinesVariant', 'parentIndentLines', 'isLastGroup']),
  ...omit(makeVListProps({
    collapseIcon: '$treeviewCollapse',
    expandIcon: '$treeviewExpand',
    slim: true
  }), ['nav', 'openStrategy']),
  modelValue: Array
}, 'VTreeview');
export const VTreeview = genericComponent()({
  name: 'VTreeview',
  props: makeVTreeviewProps(),
  emits: {
    'update:opened': val => true,
    'update:activated': val => true,
    'update:selected': val => true,
    'update:modelValue': val => true,
    'click:open': value => true,
    'click:select': value => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const {
      items
    } = useListItems(props);
    const activeColor = toRef(() => props.activeColor);
    const baseColor = toRef(() => props.baseColor);
    const color = toRef(() => props.color);
    const activated = useProxiedModel(props, 'activated');
    const _selected = useProxiedModel(props, 'selected');
    const selected = computed({
      get: () => props.modelValue ?? _selected.value,
      set(val) {
        _selected.value = val;
        emit('update:modelValue', val);
      }
    });
    const vListRef = ref();
    const opened = computed(() => props.openAll ? openAll(items.value) : props.opened);
    const flatItems = computed(() => flatten(items.value));
    const search = toRef(() => props.search);
    const {
      filteredItems
    } = useFilter(props, flatItems, search);
    const visibleIds = computed(() => {
      if (!search.value) return null;
      const getPath = vListRef.value?.getPath;
      if (!getPath) return null;
      return new Set(filteredItems.value.flatMap(item => {
        const itemVal = props.returnObject ? item.raw : item.props.value;
        return [...getPath(itemVal), ...getChildren(itemVal)].map(toRaw);
      }));
    });
    function getChildren(id) {
      const arr = [];
      const queue = (vListRef.value?.children.get(id) ?? []).slice();
      while (queue.length) {
        const child = queue.shift();
        if (!child) continue;
        arr.push(child);
        queue.push(...(vListRef.value?.children.get(child) ?? []).slice());
      }
      return arr;
    }
    function openAll(items) {
      let ids = [];
      for (const i of items) {
        if (!i.children) continue;
        ids.push(props.returnObject ? toRaw(i.raw) : i.value);
        if (i.children) {
          ids = ids.concat(openAll(i.children));
        }
      }
      return ids;
    }
    provide(VTreeviewSymbol, {
      visibleIds
    });
    provideDefaults({
      VTreeviewGroup: {
        activeColor,
        baseColor,
        color,
        collapseIcon: toRef(() => props.collapseIcon),
        expandIcon: toRef(() => props.expandIcon)
      },
      VTreeviewItem: {
        activeClass: toRef(() => props.activeClass),
        activeColor,
        baseColor,
        color,
        density: toRef(() => props.density),
        disabled: toRef(() => props.disabled),
        lines: toRef(() => props.lines),
        variant: toRef(() => props.variant)
      }
    });
    useRender(() => {
      const listProps = VList.filterProps(props);
      const treeviewChildrenProps = VTreeviewChildren.filterProps(props);
      const indentLinesVariant = typeof props.indentLines === 'boolean' ? 'default' : props.indentLines;
      return _createVNode(VList, _mergeProps({
        "ref": vListRef
      }, listProps, {
        "class": ['v-treeview', {
          'v-treeview--fluid': props.fluid
        }, props.class],
        "openStrategy": "multiple",
        "style": props.style,
        "opened": opened.value,
        "activated": activated.value,
        "onUpdate:activated": $event => activated.value = $event,
        "selected": selected.value,
        "onUpdate:selected": $event => selected.value = $event
      }), {
        default: () => [_createVNode(VTreeviewChildren, _mergeProps(treeviewChildrenProps, {
          "density": props.density,
          "returnObject": props.returnObject,
          "items": items.value,
          "parentIndentLines": props.indentLines ? [] : undefined,
          "indentLinesVariant": indentLinesVariant
        }), slots)]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VTreeview.js.map