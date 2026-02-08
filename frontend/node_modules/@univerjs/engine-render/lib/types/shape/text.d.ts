import { Nullable, CellValueType, HorizontalAlign, TextDecoration, VerticalAlign } from '@univerjs/core';
import { UniverRenderingContext } from '../context';
import { IShapeProps, Shape } from './shape';
import { DocSimpleSkeleton } from '../components/docs/layout/doc-simple-skeleton';
export interface ITextProps extends IShapeProps {
    width: number;
    height: number;
    text: string;
    fontStyle: string;
    warp?: boolean;
    hAlign?: HorizontalAlign;
    vAlign?: VerticalAlign;
    color?: Nullable<string>;
    strokeLine?: boolean;
    underline?: boolean;
    underlineType?: TextDecoration;
    cellValueType?: Nullable<CellValueType>;
}
export declare const TEXT_OBJECT_ARRAY: string[];
export declare class Text extends Shape<ITextProps> {
    text: string;
    fontStyle: string;
    warp: boolean;
    hAlign: HorizontalAlign;
    vAlign: VerticalAlign;
    skeleton: DocSimpleSkeleton;
    constructor(key: string, props: ITextProps);
    static drawWith(ctx: UniverRenderingContext, props: ITextProps, _skeleton?: DocSimpleSkeleton): number;
    /**
     * Draw text decoration lines (underline, strikethrough, etc.)
     */
    private static _drawTextDecoration;
    private static _drawLine;
    private static _setLineType;
    private static _isWave;
    private static _isDouble;
    protected _draw(ctx: UniverRenderingContext): void;
    makeDirty(state?: boolean): this | undefined;
    toJson(): {
        [x: string]: any;
    };
}
