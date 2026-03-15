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
  const isLastLeaf = isLast && (!isLastGroup || separateRoots || depth > 1);
  if (!parentIndentLines || !depth) {
    return {
      leaf: undefined,
      node: undefined,
      children: parentIndentLines,
      footer: parentIndentLines && (!isLastLeaf || variant === 'simple') ? [...parentIndentLines, separateRoots ? 'none' : 'line'] : ['none']
    };
  }
  if (variant === 'simple') {
    return {
      leaf: [...parentIndentLines, 'line'],
      node: [...parentIndentLines, 'line'],
      children: [...parentIndentLines, 'line'],
      footer: [...parentIndentLines, 'line', 'line']
    };
  }
  return {
    leaf: [...parentIndentLines, isLastLeaf ? 'last-leaf' : 'leaf', ...(leafLinks ? ['leaf-link'] : [])],
    node: [...parentIndentLines, isLastLeaf ? 'last-leaf' : 'leaf'],
    children: [...parentIndentLines, isLastLeaf ? 'none' : 'line'],
    footer: [...parentIndentLines, isLastLeaf ? 'none' : 'line']
  };
}
//# sourceMappingURL=indentLines.js.map