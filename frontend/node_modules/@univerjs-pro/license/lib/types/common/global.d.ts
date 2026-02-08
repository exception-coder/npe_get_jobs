/**
 * Get the global object no matter in browser main thread, the worker thread or Node.js process.
 */
export declare function getGlobalObject(): typeof globalThis;
