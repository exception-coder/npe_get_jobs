import { IAccessor, ICommand, IMutationInfo, IRange } from '@univerjs/core';
export declare const factorySetNumfmtUndoMutation: (accessor: IAccessor, option: ISetNumfmtMutationParams) => IMutationInfo<ISetNumfmtMutationParams | IRemoveNumfmtMutationParams>[];
export interface ISetNumfmtMutationParams {
    values: {
        [id: string]: {
            ranges: IRange[];
        };
    };
    refMap: {
        [id: string]: {
            pattern: string;
        };
    };
    unitId: string;
    subUnitId: string;
}
export declare const SetNumfmtMutation: ICommand<ISetNumfmtMutationParams>;
export interface IRemoveNumfmtMutationParams {
    ranges: IRange[];
    unitId: string;
    subUnitId: string;
}
export declare const RemoveNumfmtMutation: ICommand<IRemoveNumfmtMutationParams>;
export declare const factoryRemoveNumfmtUndoMutation: (accessor: IAccessor, option: IRemoveNumfmtMutationParams) => {
    id: string;
    params: ISetNumfmtMutationParams;
}[];
export type ISetCellsNumfmt = Array<{
    pattern: string;
    row: number;
    col: number;
}>;
export declare const transformCellsToRange: (unitId: string, subUnitId: string, cells: ISetCellsNumfmt) => ISetNumfmtMutationParams;
