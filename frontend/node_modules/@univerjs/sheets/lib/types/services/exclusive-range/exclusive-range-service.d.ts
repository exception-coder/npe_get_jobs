import { IRange, Disposable } from '@univerjs/core';
import { Observable } from 'rxjs';
import { ISelectionWithStyle } from '../../basics/selection';
interface IFeatureRange {
    groupId: string;
    range: IRange;
}
export interface IExclusiveRangeService {
    exclusiveRangesChange$: Observable<{
        unitId: string;
        subUnitId: string;
        ranges: IRange[];
    }>;
    /**
     * @description Add an exclusive range to the service
     * @param {string} unitId The unitId of the exclusive range
     * @param {string} sheetId The sheetId of the exclusive range
     * @param {string} feature The feature of the exclusive range
     * @param {IFeatureRange} range The exclusive range
     */
    addExclusiveRange(unitId: string, sheetId: string, feature: string, ranges: IFeatureRange[]): void;
    /**
     * @description Get the exclusive ranges
     * @param {string} unitId The unitId of the exclusive range
     * @param {string} sheetId The sheetId of the exclusive range
     * @param {string} feature The feature of the exclusive range
     * @returns {undefined | IFeatureRange[]} The exclusive ranges
     */
    getExclusiveRanges(unitId: string, sheetId: string, feature: string): undefined | IFeatureRange[];
    /**
     * @description Clear the exclusive ranges
     * @param {string} unitId The unitId of the exclusive range
     * @param {string} sheetId The sheetId of the exclusive range
     * @param {string} feature The feature of the exclusive range
     */
    clearExclusiveRanges(unitId: string, sheetId: string, feature: string): void;
    /**
     * @description Clear the exclusive ranges by groupId
     * @param {string} unitId  The unitId of the exclusive range
     * @param {string} sheetId The sheetId of the exclusive range
     * @param {string} feature The feature of the exclusive range
     * @param {string} groupId The groupId of the exclusive range
     */
    clearExclusiveRangesByGroupId(unitId: string, sheetId: string, feature: string, groupId: string): void;
    /**
     * Check the interest group id of the giving selection
     * @param {ISelectionWithStyle[]} selections The selections to check
     */
    getInterestGroupId(selections: ISelectionWithStyle[]): string[];
}
export declare const IExclusiveRangeService: import('@wendellhu/redi').IdentifierDecorator<IExclusiveRangeService>;
export declare class ExclusiveRangeService extends Disposable implements IExclusiveRangeService {
    /**
     * Exclusive range data structure is as follows: unitId -> sheetId -> feature -> range
     */
    private _exclusiveRanges;
    private _exclusiveRangesChange$;
    exclusiveRangesChange$: Observable<{
        unitId: string;
        subUnitId: string;
        ranges: IRange[];
    }>;
    private _ensureUnitMap;
    private _ensureSubunitMap;
    private _ensureFeature;
    addExclusiveRange(unitId: string, sheetId: string, feature: string, ranges: IFeatureRange[]): void;
    getExclusiveRanges(unitId: string, sheetId: string, feature: string): undefined | IFeatureRange[];
    clearExclusiveRanges(unitId: string, sheetId: string, feature: string): void;
    clearExclusiveRangesByGroupId(unitId: string, sheetId: string, feature: string, groupId: string): void;
    getInterestGroupId(selections: ISelectionWithStyle[]): string[];
}
export {};
