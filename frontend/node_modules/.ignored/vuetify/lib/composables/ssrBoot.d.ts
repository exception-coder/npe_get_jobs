// Composables
export declare function useSsrBoot(): {
    ssrBootStyles: Readonly<import("vue").Ref<{
        transition: string;
    } | undefined, {
        transition: string;
    } | undefined>>;
    isBooted: Readonly<import("vue").Ref<boolean, boolean>>;
};
