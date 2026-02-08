import { UniverRenderingContext2D } from '@univerjs/engine-render';
export declare const FILTER_BUTTON_EMPTY: Path2D;
export declare class FilterButton {
    static drawNoCriteria(ctx: UniverRenderingContext2D, size: number, fgColor: string, bgColor: string): void;
    static drawHasCriteria(ctx: UniverRenderingContext2D, size: number, fgColor: string, bgColor: string): void;
}
