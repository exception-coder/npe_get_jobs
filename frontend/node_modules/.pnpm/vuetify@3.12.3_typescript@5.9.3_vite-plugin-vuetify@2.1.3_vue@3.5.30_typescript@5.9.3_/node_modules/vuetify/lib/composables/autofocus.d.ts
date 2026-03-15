interface AutofocusProps {
    autofocus: boolean;
}
export declare function useAutofocus(props: AutofocusProps): {
    onIntersect: (isIntersecting: boolean, entries: IntersectionObserverEntry[]) => void;
};

