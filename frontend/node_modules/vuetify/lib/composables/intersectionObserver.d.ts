export declare function useIntersectionObserver(callback?: IntersectionObserverCallback, options?: IntersectionObserverInit): {
    intersectionRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    isIntersecting: import("vue").ShallowRef<boolean, boolean>;
};
