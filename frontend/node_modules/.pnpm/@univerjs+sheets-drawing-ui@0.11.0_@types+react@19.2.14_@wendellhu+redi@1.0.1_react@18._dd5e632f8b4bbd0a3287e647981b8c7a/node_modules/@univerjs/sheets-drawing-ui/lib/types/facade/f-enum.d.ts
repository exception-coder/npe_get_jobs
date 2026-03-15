import { DrawingTypeEnum, ImageSourceType } from '@univerjs/core';
import { FEnum } from '@univerjs/core/facade';
import { SheetDrawingAnchorType } from '@univerjs/sheets-drawing';
/**
 * @ignore
 */
export interface IFDrawingEnumMixin {
    /** Please refer to {@link DrawingTypeEnum}. */
    DrawingType: typeof DrawingTypeEnum;
    /** Please refer to {@link ImageSourceType}. */
    ImageSourceType: Omit<typeof ImageSourceType, 'UUID'>;
    /** Please refer to {@link SheetDrawingAnchorType}. */
    SheetDrawingAnchorType: typeof SheetDrawingAnchorType;
}
export declare class FDrawingEnumMixin extends FEnum implements IFDrawingEnumMixin {
    get DrawingType(): typeof DrawingTypeEnum;
    get ImageSourceType(): Omit<typeof ImageSourceType, 'UUID'>;
    get SheetDrawingAnchorType(): typeof SheetDrawingAnchorType;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFDrawingEnumMixin {
    }
}
