import { ICommand, ArrangeTypeEnum } from '@univerjs/core';
import { IDrawingOrderMapParam } from '@univerjs/drawing';
export interface ISetDrawingArrangeCommandParams extends IDrawingOrderMapParam {
    arrangeType: ArrangeTypeEnum;
}
/**
 * The command to insert new defined name
 */
export declare const SetDrawingArrangeCommand: ICommand;
