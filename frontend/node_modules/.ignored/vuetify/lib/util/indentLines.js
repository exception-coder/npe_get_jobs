// Types

export function getIndentLines(_ref) {
  let {
    depth,
    isLast,
    isLastGroup,
    leafLinks,
    separateRoots,
    parentIndentLines,
    variant
  } = _ref;
  if (!parentIndentLines || !depth) {
    return {
      leaf: undefined,
      node: undefined,
      children: parentIndentLines
    };
  }
  if (variant === 'simple') {
    return {
      leaf: [...parentIndentLines, 'line'],
      node: [...parentIndentLines, 'line'],
      children: [...parentIndentLines, 'line']
    };
  }
  const isLastLeaf = isLast && (!isLastGroup || separateRoots || depth > 1);
  return {
    leaf: [...parentIndentLines, isLastLeaf ? 'last-leaf' : 'leaf', ...(leafLinks ? ['leaf-link'] : [])],
    node: [...parentIndentLines, isLastLeaf ? 'last-leaf' : 'leaf'],
    children: [...parentIndentLines, isLastLeaf ? 'none' : 'line']
  };
}
//# sourceMappingURL=indentLines.js.map