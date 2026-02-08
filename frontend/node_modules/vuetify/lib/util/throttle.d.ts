export declare function throttle<T extends (...args: any[]) => any>(fn: T, delay: number, options?: {
    leading: boolean;
    trailing: boolean;
}): {
    (...args: Parameters<T>): void | ReturnType<T>;
    clear: () => void;
    immediate: T;
};
