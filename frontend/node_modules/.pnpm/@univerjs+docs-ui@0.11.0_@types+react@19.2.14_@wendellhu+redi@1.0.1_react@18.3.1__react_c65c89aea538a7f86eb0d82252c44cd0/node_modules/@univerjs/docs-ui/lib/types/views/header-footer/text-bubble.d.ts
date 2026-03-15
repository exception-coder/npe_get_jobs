import { IShapeProps, UniverRenderingContext, Shape } from '@univerjs/engine-render';
export declare const COLLAB_CURSOR_LABEL_HEIGHT = 18;
export declare const COLLAB_CURSOR_LABEL_MAX_WIDTH = 200;
export declare const COLLAB_CURSOR_LABEL_TEXT_PADDING_LR = 6;
export declare const COLLAB_CURSOR_LABEL_TEXT_PADDING_TB = 4;
export interface ITextBubbleShapeProps extends IShapeProps {
    color: string;
    text: string;
}
/**
 * Render a single collaborated cursor on the canvas.
 */
export declare class TextBubbleShape<T extends ITextBubbleShapeProps = ITextBubbleShapeProps> extends Shape<T> {
    color: string;
    text: string;
    constructor(key: string, props: T);
    static drawWith(ctx: CanvasRenderingContext2D, props: ITextBubbleShapeProps): void;
    protected _draw(ctx: UniverRenderingContext): void;
}
