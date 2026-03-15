// Composables
import { splitKeyCombination, splitKeySequence } from "./hotkey-parsing.js"; // Utilities
import { onScopeDispose, toValue, watch } from 'vue';
import { IN_BROWSER } from "../../util/index.js"; // Types
export function useHotkey(keys, callback) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!IN_BROWSER) return function () {};
  const {
    event = 'keydown',
    inputs = false,
    preventDefault = true,
    sequenceTimeout = 1000
  } = options;
  const isMac = navigator?.userAgent?.includes('Macintosh') ?? false;
  let timeout = 0;
  let keyGroups;
  let isSequence = false;
  let groupIndex = 0;
  function isInputFocused() {
    if (toValue(inputs)) return false;
    const activeElement = document.activeElement;
    return activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable || activeElement.contentEditable === 'true');
  }
  function resetSequence() {
    groupIndex = 0;
    clearTimeout(timeout);
  }
  function handler(e) {
    const group = keyGroups[groupIndex];
    if (!group || isInputFocused()) return;
    if (!matchesKeyGroup(e, group, isMac)) {
      if (isSequence) resetSequence();
      return;
    }
    if (toValue(preventDefault)) e.preventDefault();
    if (!isSequence) {
      callback(e);
      return;
    }
    clearTimeout(timeout);
    groupIndex++;
    if (groupIndex === keyGroups.length) {
      callback(e);
      resetSequence();
      return;
    }
    timeout = window.setTimeout(resetSequence, toValue(sequenceTimeout));
  }
  function cleanup() {
    window.removeEventListener(toValue(event), handler);
    clearTimeout(timeout);
  }
  watch(() => toValue(keys), newKeys => {
    cleanup();
    if (newKeys) {
      const groups = splitKeySequence(newKeys.toLowerCase());
      isSequence = groups.length > 1;
      keyGroups = groups;
      resetSequence();
      window.addEventListener(toValue(event), handler);
    }
  }, {
    immediate: true
  });

  // Watch for changes in the event type to re-register the listener
  watch(() => toValue(event), (newEvent, oldEvent) => {
    if (oldEvent && keyGroups && keyGroups.length > 0) {
      window.removeEventListener(oldEvent, handler);
      window.addEventListener(newEvent, handler);
    }
  });
  onScopeDispose(cleanup, true);
  return cleanup;
}
function matchesKeyGroup(e, group, isMac) {
  const {
    modifiers,
    actualKey
  } = parseKeyGroup(group);
  const expectCtrl = modifiers.ctrl || !isMac && (modifiers.cmd || modifiers.meta);
  const expectMeta = isMac && (modifiers.cmd || modifiers.meta);
  return e.ctrlKey === expectCtrl && e.metaKey === expectMeta && e.shiftKey === modifiers.shift && e.altKey === modifiers.alt && e.key.toLowerCase() === actualKey?.toLowerCase();
}
function parseKeyGroup(group) {
  const MODIFIERS = ['ctrl', 'shift', 'alt', 'meta', 'cmd'];

  // Use the shared combination splitting logic
  const {
    keys: parts
  } = splitKeyCombination(group.toLowerCase());

  // If the combination is invalid, return empty result
  if (parts.length === 0) {
    return {
      modifiers: Object.fromEntries(MODIFIERS.map(m => [m, false])),
      actualKey: undefined
    };
  }
  const modifiers = Object.fromEntries(MODIFIERS.map(m => [m, false]));
  let actualKey;
  for (const part of parts) {
    if (MODIFIERS.includes(part)) {
      modifiers[part] = true;
    } else {
      actualKey = part;
    }
  }
  return {
    modifiers,
    actualKey
  };
}
//# sourceMappingURL=hotkey.js.map