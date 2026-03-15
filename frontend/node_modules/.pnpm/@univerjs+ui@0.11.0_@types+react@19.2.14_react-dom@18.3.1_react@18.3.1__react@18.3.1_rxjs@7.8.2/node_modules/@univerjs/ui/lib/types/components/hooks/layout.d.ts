import { Nullable } from '@univerjs/core';
/**
 * These hooks are used for browser layout
 * Prefer to client-side
 */
/**
 * Allow the element to scroll when its height over the container height
 * @param element
 * Container means the window view that the element displays in.
 * Recommend pass the sheet mountContainer as container
 * @param container
 */
export declare function useScrollYOverContainer(element: Nullable<HTMLElement>, container: Nullable<HTMLElement>): void;
export declare function useConfigValue<T>(configKey: string): void | T | null;
