/**
 * Returns:
 *  - 'null' if the node is not attached to the DOM
 *  - the root node (HTMLDocument | ShadowRoot) otherwise
 */
export declare function attachedRoot(node: Node): null | HTMLDocument | ShadowRoot;
