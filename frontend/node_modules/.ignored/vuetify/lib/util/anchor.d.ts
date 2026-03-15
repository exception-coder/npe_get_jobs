declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
export type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;
export type ParsedAnchor = {
    side: 'center';
    align: 'center';
} | {
    side: Tblock;
    align: 'left' | 'right' | 'center';
} | {
    side: 'left' | 'right';
    align: Tblock | 'center';
};
/** Parse a raw anchor string into an object */
export declare function parseAnchor(anchor: Anchor, isRtl: boolean): ParsedAnchor;
export declare function toPhysical(str: 'center' | Tblock | Tinline, isRtl: boolean): "bottom" | "center" | "left" | "right" | "top";
export declare function flipSide(anchor: ParsedAnchor): ParsedAnchor;
export declare function flipAlign(anchor: ParsedAnchor): ParsedAnchor;
export declare function flipCorner(anchor: ParsedAnchor): ParsedAnchor;
export declare function getAxis(anchor: ParsedAnchor): "x" | "y";

