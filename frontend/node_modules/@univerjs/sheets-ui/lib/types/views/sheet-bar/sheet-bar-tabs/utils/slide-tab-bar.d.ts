import { Animate } from './animate';
export interface IScrollState {
    leftEnd: boolean;
    rightEnd: boolean;
}
export interface ISlideTabBarConfig {
    slideTabBarSelector: string;
    slideTabBarItemSelector: string;
    slideTabBarContainer: HTMLDivElement | null;
    slideTabBarItemAutoSort: boolean;
    currentIndex: number;
    onSlideEnd: (event: MouseEvent, compareIndex: number) => void;
    onChangeName: (id: string, name: string) => void;
    onChangeTab: (event: MouseEvent, id: string) => void;
    onScroll: (state: IScrollState) => void;
    onNameCheckAlert: (text: string) => boolean;
    onNameChangeCheck: () => boolean;
}
export interface SlideTabItemAnimate {
    translateX: (x: number) => void;
    cancel: () => void;
}
export declare class SlideTabItem {
    _slideTabItem: HTMLElement;
    _animate: Animate | null;
    _midline: number;
    _translateX: number;
    _scrollbar: SlideScrollbar;
    _slideTabBar: SlideTabBar;
    _editMode: boolean;
    _placeholder: HTMLElement | null;
    constructor(slideTabItem: HTMLElement, slideTabBar: SlideTabBar);
    static midline(item: SlideTabItem): number;
    static leftLine(item: SlideTabItem): number;
    static rightLine(item: SlideTabItem): number;
    static make(nodeList: NodeList, slideTabBar: SlideTabBar): SlideTabItem[];
    getSlideTabItem(): HTMLElement;
    getEditor(): HTMLSpanElement | null;
    focus(): void;
    selectAll(): void;
    isEditMode(): boolean;
    classList(): DOMTokenList;
    translateX(x: number): 0 | 1 | -1;
    setEditor(callback?: (event: FocusEvent) => void): void;
    nameCheck(): boolean;
    animate(): SlideTabItemAnimate;
    after(other: SlideTabItem): void;
    update(): void;
    disableFixed(): void;
    enableFixed(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, action: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, action: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    getScrollbar(): SlideScrollbar;
    getMidLine(): number;
    getBoundingRect(): DOMRect;
    getWidth(): number;
    getTranslateXDirection(): 0 | 1 | -1;
    equals(other: SlideTabItem | null): boolean | null;
    getId(): string;
}
export declare class SlideScrollbar {
    protected _slideTabBar: SlideTabBar;
    protected _scrollX: number;
    constructor(slideTabBar: SlideTabBar);
    scrollX(x: number): void;
    scrollRight(): void;
    getScrollX(): number;
}
export declare class SlideTabBar {
    /** Time in milliseconds to wait to raise long press events if button is still pressed */
    static LongPressDelay: number;
    /** Time in milliseconds with two consecutive clicks will be considered as a double click */
    static DoubleClickDelay: number;
    protected _activeTabItemIndex: number;
    protected _slideTabBar: HTMLElement;
    protected _slideTabItems: SlideTabItem[];
    protected _config: ISlideTabBarConfig;
    protected _downActionX: number;
    protected _moveActionX: number;
    protected _compareIndex: number;
    protected _activeTabItem: SlideTabItem | null;
    protected _moveAction: (e: MouseEvent) => void;
    protected _upAction: (e: MouseEvent) => void;
    protected _downAction: (e: MouseEvent) => void;
    protected _wheelAction: (e: WheelEvent) => void;
    protected _scrollIncremental: number;
    protected _compareDirection: number;
    protected _autoScrollTime: number | null;
    protected _slideScrollbar: SlideScrollbar;
    protected _longPressTimer: NodeJS.Timeout | number | null;
    /**
     * left border line
     */
    protected _leftBoundingLine: number;
    /**
     * right border line
     */
    protected _rightBoundingLine: number;
    /**
     * The distance required to move to the left border
     */
    protected _leftMoveX: number;
    /**
     * The distance required to move to the right border
     */
    protected _rightMoveX: number;
    constructor(config: Partial<ISlideTabBarConfig>);
    static checkedSkipSlide(event: MouseEvent): boolean;
    static keepLastIndex(inputHtml: HTMLElement): void;
    static keepSelectAll(inputHtml: HTMLElement): void;
    /**
     * The current instance is persistent, but some parameters need to be updated after refreshing
     * @param currentIndex
     */
    update(currentIndex: number): void;
    primeval(): HTMLElement;
    updateItems(): void;
    getScrollbar(): SlideScrollbar;
    getConfig(): ISlideTabBarConfig;
    getBoundingRect(): DOMRect;
    getSlideTabItems(): SlideTabItem[];
    getActiveItem(): SlideTabItem | null;
    isLeftEnd(): boolean;
    isRightEnd(): boolean;
    addListener(): void;
    removeListener(): void;
    setScroll(x: number): void;
    flipPage(x: number): void;
    scrollToItem(index?: number): void;
    calculateLeftScrollX(shouldFlipPage?: boolean): number;
    calculateRightScrollX(shouldFlipPage?: boolean): number;
    calculateTabItemScrollX(index: number): number;
    calculateActiveTabItemScrollX(): number;
    destroy(): void;
    protected _hasEditItem(): boolean;
    protected _autoScrollFrame(): void;
    protected _startAutoScroll(): void;
    protected _closeAutoScroll(): void;
    protected _scrollLeft(event: MouseEvent): void;
    protected _scrollRight(event: MouseEvent): void;
    protected _sortedItems(): void;
    protected _compareLeft(): void;
    protected _compareRight(): void;
    protected _initConfig(): void;
}
