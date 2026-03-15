import { ICellOverGridPosition, ISheetOverGridPosition } from '@univerjs/sheets';
import { ISheetSelectionRenderService } from '../selection/base-selection-render.service';
import { SheetSkeletonManagerService } from '../sheet-skeleton-manager.service';
export declare function convertPositionSheetOverGridToAbsolute(unitId: string, subUnitId: string, sheetOverGridPosition: ISheetOverGridPosition, sheetSkeletonManagerService: SheetSkeletonManagerService): {
    unitId: string;
    subUnitId: string;
    left: number;
    top: number;
    width: number;
    height: number;
};
export declare function convertPositionCellToSheetOverGrid(unitId: string, subUnitId: string, cellOverGridPosition: ICellOverGridPosition, width: number, height: number, selectionRenderService: ISheetSelectionRenderService, sheetSkeletonManagerService: SheetSkeletonManagerService): {
    unitId: string;
    subUnitId: string;
    sheetTransform: {
        from: {
            column: number;
            columnOffset: number;
            row: number;
            rowOffset: number;
        };
        to: {
            column: number;
            columnOffset: number;
            row: number;
            rowOffset: number;
        };
    };
    transform: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
};
