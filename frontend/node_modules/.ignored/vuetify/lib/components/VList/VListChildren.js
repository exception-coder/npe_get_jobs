import { createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
// Components
import { VListGroup } from "./VListGroup.js";
import { VListItem } from "./VListItem.js";
import { VListSubheader } from "./VListSubheader.js";
import { VDivider } from "../VDivider/index.js"; // Utilities
import { mergeProps } from 'vue';
import { createList } from "./list.js";
import { genericComponent, propsFactory } from "../../util/index.js"; // Types
export const makeVListChildrenProps = propsFactory({
  items: Array,
  returnObject: Boolean
}, 'VListChildren');
export const VListChildren = genericComponent()({
  name: 'VListChildren',
  props: makeVListChildrenProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    createList();
    return () => slots.default?.() ?? props.items?.map(_ref2 => {
      let {
        children,
        props: itemProps,
        type,
        raw: item
      } = _ref2;
      if (type === 'divider') {
        return slots.divider?.({
          props: itemProps
        }) ?? _createVNode(VDivider, itemProps, null);
      }
      if (type === 'subheader') {
        return slots.subheader?.({
          props: itemProps
        }) ?? _createVNode(VListSubheader, itemProps, null);
      }
      const slotsWithItem = {
        subtitle: slots.subtitle ? slotProps => slots.subtitle?.({
          ...slotProps,
          item
        }) : undefined,
        prepend: slots.prepend ? slotProps => slots.prepend?.({
          ...slotProps,
          item
        }) : undefined,
        append: slots.append ? slotProps => slots.append?.({
          ...slotProps,
          item
        }) : undefined,
        title: slots.title ? slotProps => slots.title?.({
          ...slotProps,
          item
        }) : undefined
      };
      const listGroupProps = VListGroup.filterProps(itemProps);
      return children ? _createVNode(VListGroup, _mergeProps(listGroupProps, {
        "value": props.returnObject ? item : itemProps?.value,
        "rawId": itemProps?.value
      }), {
        activator: _ref3 => {
          let {
            props: activatorProps
          } = _ref3;
          const listItemProps = mergeProps(itemProps, activatorProps, {
            value: props.returnObject ? item : itemProps.value
          });
          return slots.header ? slots.header({
            props: listItemProps
          }) : _createVNode(VListItem, listItemProps, slotsWithItem);
        },
        default: () => _createVNode(VListChildren, {
          "items": children,
          "returnObject": props.returnObject
        }, slots)
      }) : slots.item ? slots.item({
        props: itemProps
      }) : _createVNode(VListItem, _mergeProps(itemProps, {
        "value": props.returnObject ? item : itemProps.value
      }), slotsWithItem);
    });
  }
});
//# sourceMappingURL=VListChildren.js.map