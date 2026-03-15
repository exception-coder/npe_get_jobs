import { ICommand, ArrangeTypeEnum } from '@univerjs/core';
import { IDrawingOrderMapParam } from '@univerjs/drawing';
export interface ISetDrawingArrangeCommandParams extends IDrawingOrderMapParam {
    arrangeType: ArrangeTypeEnum;
}
/**
 * The command to arrange drawings.
 */
export declare const SetDocDrawingArrangeCommand: ICommand;
