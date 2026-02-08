import { IAccessor, IPermissionTypes, Workbook, WorkbookPermissionPointConstructor, Worksheet, IUniverInstanceService } from '@univerjs/core';
import { Observable } from 'rxjs';
interface IActive {
    workbook: Workbook;
    worksheet: Worksheet;
}
export declare function deriveStateFromActiveSheet$<T>(univerInstanceService: IUniverInstanceService, defaultValue: T, callback: (active: IActive) => Observable<T>): Observable<T>;
/**
 * @description Get the current exclusive range disable status
 * @param accessor The accessor
 * @param {Set<string>} [disableGroupSet] The disable group set, if provided, check if the interestGroupIds contains any of the disableGroupSet, otherwise check if the interestGroupIds is not empty
 * @returns {Observable<boolean>} The current exclusive range disable status
 */
export declare function getCurrentExclusiveRangeInterest$(accessor: IAccessor, disableGroupSet?: Set<string>): Observable<boolean>;
/**
 * Get the observable combine with exclusive range
 * @param accessor The accessor
 * @param {Observable<boolean>} observable$
 * @param {Set<string>} [disableGroupSet] The disable group set, if provided, check if the interestGroupIds contains any of the disableGroupSet, otherwise check if the interestGroupIds is not empty
 * @returns {Observable<boolean>} The observable combine with exclusive range
 */
export declare function getObservableWithExclusiveRange$(accessor: IAccessor, observable$: Observable<boolean>, disableGroupSet?: Set<string>): Observable<boolean>;
export declare function getCurrentRangeDisable$(accessor: IAccessor, permissionTypes?: IPermissionTypes, supportCellEdit?: boolean): Observable<boolean>;
export declare function getBaseRangeMenuHidden$(accessor: IAccessor): Observable<boolean>;
export declare function getInsertAfterMenuHidden$(accessor: IAccessor, type: 'row' | 'col'): Observable<boolean>;
export declare function getInsertBeforeMenuHidden$(accessor: IAccessor, type: 'row' | 'col'): Observable<boolean>;
export declare function getDeleteMenuHidden$(accessor: IAccessor, type: 'row' | 'col'): Observable<boolean>;
export declare function getCellMenuHidden$(accessor: IAccessor, type: 'row' | 'col'): Observable<boolean>;
export declare function getWorkbookPermissionDisable$(accessor: IAccessor, workbookPermissionTypes: WorkbookPermissionPointConstructor[]): Observable<boolean>;
export {};
