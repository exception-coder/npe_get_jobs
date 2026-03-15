// Utilities
import { toValue } from 'vue';
import { focusableChildren } from "../util/index.js"; // Types
export function useFocusGroups(_ref) {
  let {
    groups,
    onLeave
  } = _ref;
  function getContentRef(group) {
    return group.type === 'list' ? group.contentRef.value?.$el : group.contentRef.value;
  }
  function getChildren(group) {
    const contentRef = getContentRef(group);
    return contentRef ? focusableChildren(contentRef) : [];
  }
  function onTabKeydown(e) {
    const target = e.target;
    const direction = e.shiftKey ? 'backward' : 'forward';
    const children = groups.map(getChildren);
    const currentGroupIndex = groups.map(g => g.type === 'list' ? g.contentRef.value?.$el : g.contentRef.value).findIndex(el => el?.contains(target));
    const nextIndex = nextFocusGroup(children, currentGroupIndex, direction, target);
    if (nextIndex === null) {
      const originGroup = groups[currentGroupIndex];
      const origin = children[currentGroupIndex];
      const isListGroup = originGroup.type === 'list';
      const atEdge = isListGroup || (direction === 'forward' ? origin.at(-1) === e.target : origin.at(0) === e.target);
      if (atEdge) {
        onLeave();
      }
    } else {
      e.preventDefault();
      e.stopImmediatePropagation();
      const nextGroup = groups[nextIndex];
      if (nextGroup.type === 'list' && toValue(nextGroup.displayItemsCount) > 0) {
        nextGroup.contentRef.value?.focus(0);
      } else {
        const fromBefore = direction === 'forward';
        children[nextIndex].at(fromBefore ? 0 : -1).focus();
      }
    }
  }
  function nextFocusGroup(children, currentIndex, direction, target) {
    const originGroup = groups[currentIndex];
    const origin = children[currentIndex];

    // List groups always allow leaving (VList manages internal focus)
    // Element groups require being at the edge focusable child
    if (originGroup.type !== 'list') {
      const isAtEdge = direction === 'forward' ? origin.at(-1) === target : origin.at(0) === target;
      if (!isAtEdge) return null;
    }
    const step = direction === 'forward' ? 1 : -1;
    for (let i = currentIndex + step; i >= 0 && i < groups.length; i += step) {
      const group = groups[i];
      if (children[i].length > 0 || group.type === 'list' && toValue(group.displayItemsCount) > 0) {
        return i;
      }
    }
    return null;
  }
  return {
    onTabKeydown
  };
}
//# sourceMappingURL=focusGroups.js.map