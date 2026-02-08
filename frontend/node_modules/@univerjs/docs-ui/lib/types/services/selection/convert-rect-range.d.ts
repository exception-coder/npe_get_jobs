import { Nullable } from '@univerjs/core';
import { DocumentSkeleton, IDocumentOffsetConfig, INodePosition, IPoint } from '@univerjs/engine-render';
export declare function isValidRectRange(anchorNodePosition: INodePosition, focusNodePosition: INodePosition): boolean;
export declare function isInSameTableCell(anchorNodePosition: INodePosition, focusNodePosition: INodePosition): boolean;
export declare function isInSameTableCellData(skeleton: DocumentSkeleton, anchorNodePosition: INodePosition, focusNodePosition: INodePosition): boolean;
export declare function compareNodePositionInTable(a: INodePosition, b: INodePosition): boolean;
interface IRectRangeNodePositions {
    anchor: INodePosition;
    focus: INodePosition;
}
export declare class NodePositionConvertToRectRange {
    private _documentOffsetConfig;
    private _docSkeleton;
    private _liquid;
    constructor(_documentOffsetConfig: IDocumentOffsetConfig, _docSkeleton: DocumentSkeleton);
    getRangePointData(startNodePosition: INodePosition, endNodePosition: INodePosition): {
        pointGroup: IPoint[][];
        startRow: number;
        startColumn: number;
        endRow: number;
        endColumn: number;
        tableId: string;
    } | undefined;
    getNodePositionGroup(anchorNodePosition: INodePosition, focusNodePosition: INodePosition): Nullable<IRectRangeNodePositions[]>;
    private _getTableRectRangeInfo;
}
export {};
