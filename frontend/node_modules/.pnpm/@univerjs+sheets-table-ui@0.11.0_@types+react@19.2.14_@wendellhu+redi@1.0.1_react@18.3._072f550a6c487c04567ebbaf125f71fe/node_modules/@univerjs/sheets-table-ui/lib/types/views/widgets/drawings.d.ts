import { UniverRenderingContext2D } from '@univerjs/engine-render';
export declare const PIVOT_BUTTON_EMPTY: Path2D;
export declare class TableButton {
    static drawNoSetting(ctx: UniverRenderingContext2D, size: number, fgColor: string, bgColor: string): void;
    static drawIconByPath(ctx: UniverRenderingContext2D, pathData: string[], fgColor: string, bgColor: string): void;
}
