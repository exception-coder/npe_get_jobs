import { IMutation } from '@univerjs/core';
export interface IRemoveRangeThemeMutationParams {
    unitId: string;
    subUnitId: string;
    styleName: string;
}
export declare const RemoveRangeThemeMutation: IMutation<IRemoveRangeThemeMutationParams>;
