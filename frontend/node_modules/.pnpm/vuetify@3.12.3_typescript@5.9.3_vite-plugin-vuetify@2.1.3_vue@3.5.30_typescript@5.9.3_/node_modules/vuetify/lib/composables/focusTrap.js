// Utilities
import { nextTick, onScopeDispose, toRef, toValue, watch } from 'vue';
import { focusableChildren, IN_BROWSER, propsFactory } from "../util/index.js"; // Types
// Types
// Composables
export const makeFocusTrapProps = propsFactory({
  retainFocus: Boolean,
  captureFocus: Boolean,
  /** @deprecated */
  disableInitialFocus: Boolean
}, 'focusTrap');
const registry = new Map();
let subscribers = 0;
function onKeydown(e) {
  const activeElement = document.activeElement;
  if (e.key !== 'Tab' || !activeElement) return;
  const parentTraps = Array.from(registry.values()).filter(_ref => {
    let {
      isActive,
      contentEl
    } = _ref;
    return isActive.value && contentEl.value?.contains(activeElement);
  }).map(x => x.contentEl.value);
  let closestTrap;
  let currentParent = activeElement.parentElement;
  while (currentParent) {
    if (parentTraps.includes(currentParent)) {
      closestTrap = currentParent;
      break;
    }
    currentParent = currentParent.parentElement;
  }
  if (!closestTrap) return;
  const focusable = focusableChildren(closestTrap)
  // excluding VListItems with tabindex="-2"
  .filter(x => x.tabIndex >= 0);
  if (!focusable.length) return;
  const active = document.activeElement;
  if (focusable.length === 1 && focusable[0].classList.contains('v-list') && focusable[0].contains(active)) {
    e.preventDefault();
    return;
  }
  const firstElement = focusable[0];
  const lastElement = focusable[focusable.length - 1];
  if (e.shiftKey && (active === firstElement || firstElement.classList.contains('v-list') && firstElement.contains(active))) {
    e.preventDefault();
    lastElement.focus();
  }
  if (!e.shiftKey && (active === lastElement || lastElement.classList.contains('v-list') && lastElement.contains(active))) {
    e.preventDefault();
    firstElement.focus();
  }
}
export function useFocusTrap(props, _ref2) {
  let {
    isActive,
    localTop,
    activatorEl,
    contentEl
  } = _ref2;
  const trapId = Symbol('trap');
  let focusTrapSuppressed = false;
  let focusTrapSuppressionTimeout = -1;
  async function onPointerdown() {
    focusTrapSuppressed = true;
    focusTrapSuppressionTimeout = window.setTimeout(() => {
      focusTrapSuppressed = false;
    }, 100);
  }
  async function captureOnFocus(e) {
    const before = e.relatedTarget;
    const after = e.target;
    document.removeEventListener('pointerdown', onPointerdown);
    document.removeEventListener('keydown', captureOnKeydown);
    await nextTick();
    if (isActive.value && !focusTrapSuppressed && before !== after && contentEl.value &&
    // We're the menu without open submenus or overlays
    toValue(localTop) &&
    // It isn't the document or the container body
    ![document, contentEl.value].includes(after) &&
    // It isn't inside the container body
    !contentEl.value.contains(after)) {
      const focusable = focusableChildren(contentEl.value);
      focusable[0]?.focus();
    }
  }
  function captureOnKeydown(e) {
    if (e.key !== 'Tab') return;
    document.removeEventListener('keydown', captureOnKeydown);
    if (isActive.value && contentEl.value && e.target && !contentEl.value.contains(e.target)) {
      const allFocusableElements = focusableChildren(document.documentElement);
      if (e.shiftKey && e.target === allFocusableElements.at(0) || !e.shiftKey && e.target === allFocusableElements.at(-1)) {
        const focusable = focusableChildren(contentEl.value);
        if (focusable.length > 0) {
          e.preventDefault();
          focusable[0].focus();
        }
      }
    }
  }
  const shouldCapture = toRef(() => isActive.value && props.captureFocus && !props.disableInitialFocus);
  if (IN_BROWSER) {
    watch(() => props.retainFocus, val => {
      if (val) {
        registry.set(trapId, {
          isActive,
          contentEl
        });
      } else {
        registry.delete(trapId);
      }
    }, {
      immediate: true
    });
    watch(shouldCapture, val => {
      if (val) {
        document.addEventListener('pointerdown', onPointerdown);
        document.addEventListener('focusin', captureOnFocus, {
          once: true
        });
        document.addEventListener('keydown', captureOnKeydown);
      } else {
        document.removeEventListener('pointerdown', onPointerdown);
        document.removeEventListener('focusin', captureOnFocus);
        document.removeEventListener('keydown', captureOnKeydown);
      }
    }, {
      immediate: true
    });
    if (subscribers++ < 1) {
      document.addEventListener('keydown', onKeydown);
    }
  }
  onScopeDispose(() => {
    registry.delete(trapId);
    clearTimeout(focusTrapSuppressionTimeout);
    document.removeEventListener('pointerdown', onPointerdown);
    document.removeEventListener('focusin', captureOnFocus);
    document.removeEventListener('keydown', captureOnKeydown);
    if (--subscribers < 1) {
      document.removeEventListener('keydown', onKeydown);
    }
  });
}
//# sourceMappingURL=focusTrap.js.map