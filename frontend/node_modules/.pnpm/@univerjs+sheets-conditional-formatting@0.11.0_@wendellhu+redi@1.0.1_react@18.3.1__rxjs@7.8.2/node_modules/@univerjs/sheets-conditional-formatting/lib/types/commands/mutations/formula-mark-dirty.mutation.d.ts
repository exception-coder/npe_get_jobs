import { IMutation } from '@univerjs/core';
export interface IConditionalFormattingFormulaMarkDirtyParams {
    [unitId: string]: {
        [sunUnitId: string]: {
            [formulaId: string]: boolean;
        };
    };
}
export declare const ConditionalFormattingFormulaMarkDirty: IMutation<IConditionalFormattingFormulaMarkDirtyParams>;
