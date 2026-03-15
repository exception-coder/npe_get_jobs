import { IAccessor, ICellData, IMutationInfo, IPosition, IRange, Nullable, Workbook, Worksheet, ObjectMatrix } from '@univerjs/core';
import { IBoundRectNoAngle, IRender, Scene, SpreadsheetSkeleton } from '@univerjs/engine-render';
import { ICollaborator } from '@univerjs/protocol';
import { ISheetLocation } from '@univerjs/sheets';
import { ISheetSkeletonManagerParam } from '../services/sheet-skeleton-manager.service';
export declare function getUserListEqual(userList1: ICollaborator[], userList2: ICollaborator[]): boolean;
export declare function checkCellContentInRanges(worksheet: Worksheet, ranges: IRange[]): boolean;
export declare function checkCellContentInRange(worksheet: Worksheet, range: IRange): boolean;
export declare function getClearContentMutationParamsForRanges(accessor: IAccessor, unitId: string, worksheet: Worksheet, ranges: IRange[]): {
    undos: IMutationInfo[];
    redos: IMutationInfo[];
};
export declare function getClearContentMutationParamForRange(worksheet: Worksheet, range: IRange): ObjectMatrix<Nullable<ICellData>>;
export declare function getCellIndexByOffsetWithMerge(offsetX: number, offsetY: number, scene: Scene, skeleton: SpreadsheetSkeleton): {
    actualRow: number;
    actualCol: number;
    mergeCell: Nullable<IRange>;
    row: number;
    col: number;
} | undefined;
export declare function getViewportByCell(row: number, column: number, scene: Scene, worksheet: Worksheet): import('@univerjs/engine-render').Viewport | undefined;
export declare function transformBound2OffsetBound(originBound: IBoundRectNoAngle, scene: Scene, skeleton: SpreadsheetSkeleton, worksheet: Worksheet): IBoundRectNoAngle;
export declare function transformPosition2Offset(x: number, y: number, scene: Scene, skeleton: SpreadsheetSkeleton, worksheet: Worksheet): {
    x: number;
    y: number;
};
export declare function getCellRealRange(workbook: Workbook, worksheet: Worksheet, skeleton: SpreadsheetSkeleton, row: number, col: number): ISheetLocation;
export declare function getHoverCellPosition(currentRender: IRender, workbook: Workbook, worksheet: Worksheet, skeletonParam: ISheetSkeletonManagerParam, offsetX: number, offsetY: number): {
    position: IPosition;
    location: {
        unitId: string;
        subUnitId: string;
        workbook: Workbook;
        worksheet: Worksheet;
        row: number;
        col: number;
    };
    overflowLocation: ISheetLocation;
} | null | undefined;
