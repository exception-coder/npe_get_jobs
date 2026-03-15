import { IAccessor, Worksheet } from '@univerjs/core';
export declare enum DisableLinkType {
    ALLOWED = 0,
    DISABLED_BY_CELL = 1,
    ALLOW_ON_EDITING = 2
}
export declare const getShouldDisableCellLink: (accessor: IAccessor, worksheet: Worksheet, row: number, col: number) => true | DisableLinkType;
export declare const getShouldDisableCurrentCellLink: (accessor: IAccessor) => boolean;
export declare const shouldDisableAddLink: (accessor: IAccessor) => boolean;
