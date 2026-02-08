import { IMutation } from '@univerjs/core';
export interface IOtherFormulaMarkDirtyParams {
    [unitId: string]: {
        [sunUnitId: string]: {
            [formulaId: string]: boolean;
        };
    };
}
export declare const OtherFormulaMarkDirty: IMutation<IOtherFormulaMarkDirtyParams>;
