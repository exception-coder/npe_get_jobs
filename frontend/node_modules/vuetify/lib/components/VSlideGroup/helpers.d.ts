export declare function calculateUpdatedTarget({ selectedElement, containerElement, isRtl, isHorizontal }: {
    selectedElement: HTMLElement;
    containerElement: HTMLElement;
    isRtl: boolean;
    isHorizontal: boolean;
}): number;
export declare function calculateCenteredTarget({ selectedElement, containerElement, isHorizontal }: {
    selectedElement: HTMLElement;
    containerElement: HTMLElement;
    isHorizontal: boolean;
}): number;
export declare function getScrollSize(isHorizontal: boolean, element?: HTMLElement): number;
export declare function getClientSize(isHorizontal: boolean, element?: HTMLElement): number;
export declare function getScrollPosition(isHorizontal: boolean, rtl: boolean, element?: HTMLElement): number;
export declare function getOffsetSize(isHorizontal: boolean, element?: HTMLElement): number;
export declare function getOffsetPosition(isHorizontal: boolean, element?: HTMLElement): number;
