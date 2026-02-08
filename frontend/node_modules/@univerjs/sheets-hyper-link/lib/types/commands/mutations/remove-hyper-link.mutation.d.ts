import { ICommand } from '@univerjs/core';
export interface IRemoveHyperLinkMutationParams {
    unitId: string;
    subUnitId: string;
    id: string;
}
export declare const RemoveHyperLinkMutation: ICommand<IRemoveHyperLinkMutationParams>;
