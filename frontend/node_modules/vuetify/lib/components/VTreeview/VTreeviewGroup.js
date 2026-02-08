import { Fragment as _Fragment, createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps } from "vue";
// Components
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { makeVListGroupProps, VListGroup } from "../VList/VListGroup.js"; // Utilities
import { computed, ref } from 'vue';
import { genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVTreeviewGroupProps = propsFactory({
  ...omit(makeVListGroupProps({
    collapseIcon: '$treeviewCollapse',
    expandIcon: '$treeviewExpand'
  }), ['subgroup'])
}, 'VTreeviewGroup');
export const VTreeviewGroup = genericComponent()({
  name: 'VTreeviewGroup',
  props: makeVTreeviewGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vListGroupRef = ref();
    const toggleIcon = computed(() => vListGroupRef.value?.isOpen ? props.collapseIcon : props.expandIcon);
    const activatorDefaults = computed(() => ({
      VTreeviewItem: {
        prependIcon: undefined,
        appendIcon: undefined,
        toggleIcon: toggleIcon.value
      }
    }));
    useRender(() => {
      const listGroupProps = VListGroup.filterProps(props);
      return _createVNode(VListGroup, _mergeProps(listGroupProps, {
        "ref": vListGroupRef,
        "class": ['v-treeview-group', props.class],
        "subgroup": true
      }), {
        ...slots,
        activator: slots.activator ? slotProps => _createElementVNode(_Fragment, null, [_createVNode(VDefaultsProvider, {
          "defaults": activatorDefaults.value
        }, {
          default: () => [slots.activator?.(slotProps)]
        })]) : undefined
      });
    });
    return {};
  }
});
//# sourceMappingURL=VTreeviewGroup.js.map