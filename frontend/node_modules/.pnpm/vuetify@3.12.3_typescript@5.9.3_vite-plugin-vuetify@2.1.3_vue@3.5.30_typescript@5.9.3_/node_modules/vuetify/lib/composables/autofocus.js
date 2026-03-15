export function useAutofocus(props) {
  function onIntersect(isIntersecting, entries) {
    if (!props.autofocus || !isIntersecting) return;
    const el = entries[0].target;
    const target = el.matches('input,textarea') ? el : el.querySelector('input,textarea');
    target?.focus();
  }
  return {
    onIntersect
  };
}
//# sourceMappingURL=autofocus.js.map