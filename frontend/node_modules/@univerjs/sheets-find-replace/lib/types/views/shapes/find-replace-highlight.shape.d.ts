import { IRgbColor, Nullable } from '@univerjs/core';
import { IShapeProps, Shape } from '@univerjs/engine-render';
export interface ISheetFindReplaceHighlightShapeProps extends IShapeProps {
    inHiddenRange: boolean;
    color: IRgbColor;
    activated?: boolean;
}
export declare class SheetFindReplaceHighlightShape extends Shape<ISheetFindReplaceHighlightShapeProps> {
    protected _activated: boolean;
    protected _inHiddenRange: boolean;
    protected _color: Nullable<IRgbColor>;
    constructor(key?: string, props?: ISheetFindReplaceHighlightShapeProps);
    setShapeProps(props: Partial<ISheetFindReplaceHighlightShapeProps>): void;
    protected _draw(ctx: CanvasRenderingContext2D): void;
}
