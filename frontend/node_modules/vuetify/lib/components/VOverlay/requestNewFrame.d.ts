/**
 * Schedule a task to run in an animation frame on its own
 * This is useful for heavy tasks that may cause jank if all ran together
 */
export declare function requestNewFrame(cb: () => void): void;
