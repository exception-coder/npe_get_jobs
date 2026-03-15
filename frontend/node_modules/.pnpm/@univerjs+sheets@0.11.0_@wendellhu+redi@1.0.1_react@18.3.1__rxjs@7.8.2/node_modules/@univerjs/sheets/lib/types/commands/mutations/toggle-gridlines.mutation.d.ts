import { BooleanNumber, IMutation } from '@univerjs/core';
export interface IToggleGridlinesMutationParams {
    showGridlines: BooleanNumber;
    unitId: string;
    subUnitId: string;
}
export declare const ToggleGridlinesMutation: IMutation<IToggleGridlinesMutationParams>;
