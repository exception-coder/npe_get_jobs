import { ITextRange } from '../../../../sheets/typedef';
import { CustomRangeType, ICustomRange, IDocumentBody } from '../../../../types/interfaces';
/**
 * Check if two ranges intersect
 * @param line1Start - The start of the first range
 * @param line1End - The end of the first range
 * @param line2Start - The start of the second range
 * @param line2End - The end of the second range
 * @returns True if the ranges intersect, false otherwise
 */
export declare function isIntersecting(line1Start: number, line1End: number, line2Start: number, line2End: number): boolean;
export declare function getCustomRangesInterestsWithSelection(range: ITextRange, customRanges: ICustomRange[]): ICustomRange<Record<string, any>>[];
export declare function copyCustomRange(range: ICustomRange): {
    rangeId: string;
    startIndex: number;
    endIndex: number;
    rangeType: CustomRangeType | number;
    wholeEntity?: boolean;
    properties?: Record<string, any> | undefined;
};
export declare function excludePointsFromRange(range: [number, number], points: number[]): [number, number][];
export declare function getIntersectingCustomRanges(startIndex: number, endIndex: number, customRanges: ICustomRange[], rangeType?: CustomRangeType): {
    startIndex: number;
    endIndex: number;
    rangeId: string;
    rangeType: CustomRangeType | number;
    wholeEntity?: boolean;
    properties?: Record<string, any> | undefined;
}[];
export declare function getSelectionForAddCustomRange(range: ITextRange, body: IDocumentBody): {
    startOffset: number;
    endOffset: number;
    collapsed: boolean;
};
