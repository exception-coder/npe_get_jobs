import { IMutation } from '@univerjs/core';
import { IDrawingJson1Type } from '@univerjs/drawing';
export declare enum DrawingApplyType {
    INSERT = 0,
    REMOVE = 1,
    UPDATE = 2,
    ARRANGE = 3,
    GROUP = 4,
    UNGROUP = 5
}
export interface ISetDrawingApplyMutationParams extends IDrawingJson1Type {
    type: DrawingApplyType;
}
export declare const SetDrawingApplyMutation: IMutation<ISetDrawingApplyMutationParams>;
