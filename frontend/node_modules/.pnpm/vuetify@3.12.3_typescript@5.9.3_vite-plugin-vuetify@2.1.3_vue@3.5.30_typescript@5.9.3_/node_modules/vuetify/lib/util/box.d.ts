export declare class Box {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(args: Element | {
        x: number;
        y: number;
        width: number;
        height: number;
    });
    get top(): number;
    get bottom(): number;
    get left(): number;
    get right(): number;
}
export declare function getOverflow(a: Box, b: Box): {
    x: {
        before: number;
        after: number;
    };
    y: {
        before: number;
        after: number;
    };
};
export declare function getTargetBox(target: HTMLElement | [x: number, y: number]): Box;
export declare function getElementBox(el: HTMLElement): Box;
