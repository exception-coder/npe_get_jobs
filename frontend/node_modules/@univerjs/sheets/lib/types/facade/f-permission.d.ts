import { RangePermissionPointConstructor, WorkbookPermissionPointConstructor, WorkSheetPermissionPointConstructor, IAuthzIoService, ICommandService, Injector, IPermissionService } from '@univerjs/core';
import { Observable } from 'rxjs';
import { FRange } from './f-range';
import { FBase } from '@univerjs/core/facade';
import { RangeProtectionRuleModel, WorkbookEditablePermission, WorkbookPermissionService, WorksheetEditPermission, WorksheetProtectionPointModel, WorksheetProtectionRuleModel, WorksheetViewPermission } from '@univerjs/sheets';
/**
 * @description Used to generate permission instances to control permissions for the entire workbook
 * @hideconstructor
 */
export declare class FPermission extends FBase {
    protected readonly _injector: Injector;
    protected readonly _commandService: ICommandService;
    protected readonly _permissionService: IPermissionService;
    protected readonly _worksheetProtectionRuleModel: WorksheetProtectionRuleModel;
    protected readonly _rangeProtectionRuleModel: RangeProtectionRuleModel;
    protected readonly _worksheetProtectionPointRuleModel: WorksheetProtectionPointModel;
    protected readonly _workbookPermissionService: WorkbookPermissionService;
    protected readonly _authzIoService: IAuthzIoService;
    /**
     * Permission point definition, can read the point constructor want to modify from here
     */
    permissionPointsDefinition: {
        WorkbookCommentPermission: typeof import('@univerjs/sheets').WorkbookCommentPermission;
        WorkbookCopyPermission: typeof import('@univerjs/sheets').WorkbookCopyPermission;
        WorkbookCreateProtectPermission: typeof import('@univerjs/sheets').WorkbookCreateProtectPermission;
        WorkbookCreateSheetPermission: typeof import('@univerjs/sheets').WorkbookCreateSheetPermission;
        WorkbookDeleteSheetPermission: typeof import('@univerjs/sheets').WorkbookDeleteSheetPermission;
        WorkbookDuplicatePermission: typeof import('@univerjs/sheets').WorkbookDuplicatePermission;
        WorkbookEditablePermission: typeof WorkbookEditablePermission;
        WorkbookExportPermission: typeof import('@univerjs/sheets').WorkbookExportPermission;
        WorkbookHideSheetPermission: typeof import('@univerjs/sheets').WorkbookHideSheetPermission;
        WorkbookHistoryPermission: typeof import('@univerjs/sheets').WorkbookHistoryPermission;
        WorkbookManageCollaboratorPermission: typeof import('@univerjs/sheets').WorkbookManageCollaboratorPermission;
        WorkbookMoveSheetPermission: typeof import('@univerjs/sheets').WorkbookMoveSheetPermission;
        WorkbookPrintPermission: typeof import('@univerjs/sheets').WorkbookPrintPermission;
        WorkbookRecoverHistoryPermission: typeof import('@univerjs/sheets').WorkbookRecoverHistoryPermission;
        WorkbookRenameSheetPermission: typeof import('@univerjs/sheets').WorkbookRenameSheetPermission;
        WorkbookSharePermission: typeof import('@univerjs/sheets').WorkbookSharePermission;
        WorkbookViewHistoryPermission: typeof import('@univerjs/sheets').WorkbookViewHistoryPermission;
        WorkbookViewPermission: typeof import('@univerjs/sheets').WorkbookViewPermission;
        WorksheetCopyPermission: typeof import('@univerjs/sheets').WorksheetCopyPermission;
        WorksheetDeleteColumnPermission: typeof import('@univerjs/sheets').WorksheetDeleteColumnPermission;
        WorksheetDeleteProtectionPermission: typeof import('@univerjs/sheets').WorksheetDeleteProtectionPermission;
        WorksheetDeleteRowPermission: typeof import('@univerjs/sheets').WorksheetDeleteRowPermission;
        WorksheetEditExtraObjectPermission: typeof import('@univerjs/sheets').WorksheetEditExtraObjectPermission;
        WorksheetEditPermission: typeof WorksheetEditPermission;
        WorksheetFilterPermission: typeof import('@univerjs/sheets').WorksheetFilterPermission;
        WorksheetInsertColumnPermission: typeof import('@univerjs/sheets').WorksheetInsertColumnPermission;
        WorksheetInsertHyperlinkPermission: typeof import('@univerjs/sheets').WorksheetInsertHyperlinkPermission;
        WorksheetInsertRowPermission: typeof import('@univerjs/sheets').WorksheetInsertRowPermission;
        WorksheetManageCollaboratorPermission: typeof import('@univerjs/sheets').WorksheetManageCollaboratorPermission;
        WorksheetPivotTablePermission: typeof import('@univerjs/sheets').WorksheetPivotTablePermission;
        WorksheetSetCellStylePermission: typeof import('@univerjs/sheets').WorksheetSetCellStylePermission;
        WorksheetSetCellValuePermission: typeof import('@univerjs/sheets').WorksheetSetCellValuePermission;
        WorksheetSetColumnStylePermission: typeof import('@univerjs/sheets').WorksheetSetColumnStylePermission;
        WorksheetSetRowStylePermission: typeof import('@univerjs/sheets').WorksheetSetRowStylePermission;
        WorksheetSortPermission: typeof import('@univerjs/sheets').WorksheetSortPermission;
        WorksheetViewPermission: typeof WorksheetViewPermission;
        RangeProtectionPermissionEditPoint: typeof import('@univerjs/sheets').RangeProtectionPermissionEditPoint;
        RangeProtectionPermissionViewPoint: typeof import('@univerjs/sheets').RangeProtectionPermissionViewPoint;
    };
    /**
     * An observable object used to monitor permission change events within a range, thereby triggering corresponding subsequent processing.
     */
    rangeRuleChangedAfterAuth$: Observable<string>;
    /**
     * An observable object used to monitor permission change events within a worksheet, thereby triggering corresponding subsequent processing.
     */
    sheetRuleChangedAfterAuth$: Observable<string>;
    /**
     * An observable object used to monitor the initialization state changes of unit permissions.
     */
    unitPermissionInitStateChange$: Observable<boolean>;
    constructor(_injector: Injector, _commandService: ICommandService, _permissionService: IPermissionService, _worksheetProtectionRuleModel: WorksheetProtectionRuleModel, _rangeProtectionRuleModel: RangeProtectionRuleModel, _worksheetProtectionPointRuleModel: WorksheetProtectionPointModel, _workbookPermissionService: WorkbookPermissionService, _authzIoService: IAuthzIoService);
    /**
     * Configures a specific permission point for a workbook.
     * This function sets or updates a permission point for a workbook identified by `unitId`.
     * It creates a new permission point if it does not already exist, and updates the point with the provided value.
     * @param {string} unitId - The unique identifier of the workbook for which the permission is being set.
     * @param {WorkbookPermissionPointConstructor} FPointClass - The constructor function for creating a permission point instance. Other point constructors can See the [permission-point documentation](https://github.com/dream-num/univer/tree/dev/packages/sheets/src/services/permission/permission-point) for more details.
     * @param {boolean} value - The boolean value to determine whether the permission point is enabled or disabled.
     *
     * @example
     * ```typescript
     * const workbook = univerAPI.getActiveWorkbook();
     * const permission = workbook.getPermission();
     * const unitId = workbook.getId();
     * permission.setWorkbookPermissionPoint(unitId, permission.permissionPointsDefinition.WorkbookEditablePermission, false)
     * ```
     */
    setWorkbookPermissionPoint(unitId: string, FPointClass: WorkbookPermissionPointConstructor, value: boolean): void;
    /**
     * Check if a specific permission point is enabled for a workbook.
     * @param unitId - The unique identifier of the workbook.
     * @param FPointClass - The constructor for the permission point class.
     *    See the [permission-point documentation](https://github.com/dream-num/univer/tree/dev/packages/sheets/src/services/permission/permission-point) for more details.
     * @example
     * ```typescript
     * const workbook = univerAPI.getActiveWorkbook();
     * const permission = workbook.getPermission();
     * const unitId = workbook.getId();
     * // Check if the workbook is editable
     * const isEditable = permission.checkWorkbookPermissionPoint(unitId, permission.permissionPointsDefinition.WorkbookEditablePermission);
     * console.log('Workbook is editable:', isEditable);
     * ```
     */
    checkWorkbookPermissionPoint(unitId: string, FPointClass: WorkbookPermissionPointConstructor): boolean | undefined;
    /**
     * This function is used to set whether the workbook can be edited
     * @param {string} unitId - The unique identifier of the workbook for which the permission is being set.
     * @param {boolean} value - A value that controls whether the workbook can be edited
     *
     * @example
     * ```typescript
     * const workbook = univerAPI.getActiveWorkbook();
     * const permission = workbook.getPermission();
     * const unitId = workbook.getId();
     * permission.setWorkbookEditPermission(unitId, false);
     * ```
     */
    setWorkbookEditPermission(unitId: string, value: boolean): void;
    /**
     * This function is used to add a base permission for a worksheet.
     * Note that after adding, only the background mask of the permission module will be rendered. If you want to modify the function permissions,
     * you need to modify the permission points with the permissionId returned by this function.
     * @param {string} unitId - The unique identifier of the workbook for which the permission is being set.
     * @param {string} subUnitId - The unique identifier of the worksheet for which the permission is being set.
     * @returns {Promise<string | undefined>} - Returns the `permissionId` if the permission is successfully added. If the operation fails or no result is returned, it resolves to `undefined`.
     *
     * @example
     * ```typescript
     * const workbook = univerAPI.getActiveWorkbook();
     * const permission = workbook.getPermission();
     * const unitId = workbook.getId();
     * const worksheet = workbook.getActiveSheet();
     * const subUnitId = worksheet.getSheetId();
     * // Note that there will be no permission changes after this step is completed. It only returns an ID for subsequent permission changes.
     * // For details, please see the example of the **`setWorksheetPermissionPoint`** API.
     * const permissionId = await permission.addWorksheetBasePermission(unitId, subUnitId)
     * // Can still edit and read it.
     * console.log('debugger', permissionId)
     * ```
     */
    addWorksheetBasePermission(unitId: string, subUnitId: string): Promise<string | undefined>;
    /**
     * Delete the entire table protection set for the worksheet and reset the point permissions of the worksheet to true
     * @param {string} unitId - The unique identifier of the workbook for which the permission is being set.
     * @param {string} subUnitId - The unique identifier of the worksheet for which the permission is being set.
     *
     * @example
     * ```typescript
     * const workbook = univerAPI.getActiveWorkbook();
     * const permission = workbook.getPermission();
     * const unitId = workbook.getId();
     * const worksheet = workbook.getActiveSheet();
     * const subUnitId = worksheet.getSheetId();
     * permission.removeWorksheetPermission(unitId, subUnitId);
     * ```
     */
    removeWorksheetPermission(unitId: string, subUnitId: string): void;
    /**
     * Sets the worksheet permission point by updating or adding the permission point for the worksheet.
     * If the worksheet doesn't have a base permission, it creates one to used render
     * @param {string} unitId - The unique identifier of the workbook.
     * @param {string} subUnitId - The unique identifier of the worksheet.
     * @param {WorkSheetPermissionPointConstructor} FPointClass - The constructor for the permission point class.
     *    See the [permission-point documentation](https://github.com/dream-num/univer/tree/dev/packages/sheets/src/services/permission/permission-point) for more details.
     * @param {boolean} value - The new permission value to be set for the worksheet.
     * @returns {Promise<string | undefined>} - Returns the `permissionId` if the permission point is successfully set or created. If no permission is set, it resolves to `undefined`.
     *
     * @example
     * ```typescript
     * const workbook = univerAPI.getActiveWorkbook();
     * const permission = workbook.getPermission();
     * const unitId = workbook.getId();
     * const worksheet = workbook.getActiveSheet();
     * const subUnitId = worksheet.getSheetId();
     * const permissionId = await permission.addWorksheetBasePermission(unitId, subUnitId)
     * // After this line of code , the worksheet will no longer be editable
     * permission.setWorksheetPermissionPoint(unitId, subUnitId, permission.permissionPointsDefinition.WorksheetEditPermission, false);
     * ```
     */
    setWorksheetPermissionPoint(unitId: string, subUnitId: string, FPointClass: WorkSheetPermissionPointConstructor, value: boolean): Promise<string | undefined>;
    /**
     * Check if a specific permission point is enabled for a worksheet.
     * @param unitId - The unique identifier of the workbook.
     * @param subUnitId - The unique identifier of the worksheet.
     * @param FPointClass - The constructor for the permission point class.
     *    See the [permission-point documentation](https://github.com/dream-num/univer/tree/dev/packages/sheets/src/services/permission/permission-point) for more details.
     * @returns {boolean | undefined} - Returns true if the permission point is enabled, false if it is disabled, or undefined if the permission point does not exist.
     * @example
     * ```typescript
     * const workbook = univerAPI.getActiveWorkbook();
     * const permission = workbook.getPermission();
     * const unitId = workbook.getId();
     * const worksheet = workbook.getActiveSheet();
     * const subUnitId = worksheet.getSheetId();
     * // Check if the worksheet is editable
     * const isEditable = permission.checkWorksheetPermissionPoint(unitId, subUnitId, permission.permissionPointsDefinition.WorksheetEditPermission);
     * console.log('Worksheet is editable:', isEditable);
     * ```
     */
    checkWorksheetPermissionPoint(unitId: string, subUnitId: string, FPointClass: WorkSheetPermissionPointConstructor): boolean | undefined;
    /**
     * Adds a range protection to the worksheet.
     * Note that after adding, only the background mask of the permission module will be rendered. If you want to modify the function permissions,
     * you need to modify the permission points with the permissionId returned by this function.
     * @param {string} unitId - The unique identifier of the workbook.
     * @param {string} subUnitId - The unique identifier of the worksheet.
     * @param {FRange[]} ranges - The ranges to be protected.
     * @returns {Promise<{ permissionId: string, ruleId: string } | undefined>} - Returns an object containing the `permissionId` and `ruleId` if the range protection is successfully added. If the operation fails or no result is returned, it resolves to `undefined`. permissionId is used to stitch permission point ID，ruleId is used to store permission rules
     *
     * @example
     * ```typescript
     * const workbook = univerAPI.getActiveWorkbook();
     * const permission = workbook.getPermission();
     * const unitId = workbook.getId();
     * const worksheet = workbook.getActiveSheet();
     * const subUnitId = worksheet.getSheetId();
     * const range = worksheet.getRange('A1:B2');
     * const ranges = [];
     * ranges.push(range);
     * // Note that there will be no permission changes after this step is completed. It only returns an ID for subsequent permission changes.
     * // For details, please see the example of the **`setRangeProtectionPermissionPoint`** API.
     * const res = await permission.addRangeBaseProtection(unitId, subUnitId, ranges);
     * const {permissionId, ruleId} = res;
     * console.log('debugger', permissionId, ruleId);
     * ```
     */
    addRangeBaseProtection(unitId: string, subUnitId: string, ranges: FRange[]): Promise<{
        permissionId: string;
        ruleId: string;
    } | undefined>;
    /**
     * Removes the range protection from the worksheet.
     * @param {string} unitId - The unique identifier of the workbook.
     * @param {string} subUnitId - The unique identifier of the worksheet.
     * @param {string[]} ruleIds - The rule IDs of the range protection to be removed.
     *
     * @example
     * ```typescript
     * const workbook = univerAPI.getActiveWorkbook();
     * const permission = workbook.getPermission();
     * const unitId = workbook.getId();
     * const worksheet = workbook.getActiveSheet();
     * const subUnitId = worksheet.getSheetId();
     * const range = worksheet.getRange('A1:B2');
     * const ranges = [];
     * ranges.push(range);
     * const res = await permission.addRangeBaseProtection(unitId, subUnitId, ranges);
     * const ruleId = res.ruleId;
     * permission.removeRangeProtection(unitId, subUnitId, [ruleId]);
     * ```
     */
    removeRangeProtection(unitId: string, subUnitId: string, ruleIds: string[]): void;
    /**
     * Modify the permission points of a custom area
     * @param {string} unitId - The unique identifier of the workbook.
     * @param {string} subUnitId - The unique identifier of the worksheet within the workbook.
     * @param {string} permissionId - The unique identifier of the permission that controls access to the range.
     * @param {RangePermissionPointConstructor} FPointClass - The constructor for the range permission point class.
     *    See the [permission-point documentation](https://github.com/dream-num/univer/tree/dev/packages/sheets/src/services/permission/permission-point) for more details.
     * @param {boolean} value - The new permission value to be set for the range (e.g., true for allowing access, false for restricting access).
     *
     * @example
     * ```typescript
     * const workbook = univerAPI.getActiveWorkbook();
     * const permission = workbook.getPermission();
     * const unitId = workbook.getId();
     * const worksheet = workbook.getActiveSheet();
     * const subUnitId = worksheet.getSheetId();
     * const range = worksheet.getRange('A1:B2');
     * const ranges = [];
     * ranges.push(range);
     * // Note that there will be no permission changes after this step is completed. It only returns an ID for subsequent permission changes.
     * // For details, please see the example of the **`setRangeProtectionPermissionPoint`** API.
     * const res = await permission.addRangeBaseProtection(unitId, subUnitId, ranges);
     * const {permissionId, ruleId} = res;
     * // After passing the following line of code, the range set above will become uneditable
     * permission.setRangeProtectionPermissionPoint(unitId,subUnitId,permissionId, permission.permissionPointsDefinition.RangeProtectionPermissionEditPoint, false);
     * ```
     */
    setRangeProtectionPermissionPoint(unitId: string, subUnitId: string, permissionId: string, FPointClass: RangePermissionPointConstructor, value: boolean): void;
    /**
     * Sets the ranges for range protection in a worksheet.
     *
     * This method finds the rule by unitId, subUnitId, and ruleId, and updates the rule with the provided ranges.
     * It checks for overlaps with existing ranges in the same subunit and shows an error message if any overlap is detected.
     * If no overlap is found, it executes the command to update the range protection with the new ranges.
     * @param {string} unitId - The unique identifier of the workbook.
     * @param {string} subUnitId - The unique identifier of the worksheet within the workbook.
     * @param {string} ruleId - The ruleId of the range protection rule that is being updated.
     * @param {FRange[]} ranges - The array of new ranges to be set for the range protection rule.
     *
     * @example
     * ```typescript
     * const workbook = univerAPI.getActiveWorkbook();
     * const permission = workbook.getPermission();
     * const unitId = workbook.getId();
     * const worksheet = workbook.getActiveSheet();
     * const subUnitId = worksheet.getSheetId();
     * const range = worksheet.getRange('A1:B2');
     * const ranges = [];
     * ranges.push(range);
     * const res = await permission.addRangeBaseProtection(unitId, subUnitId, ranges);
     * const {permissionId, ruleId} = res;
     * const newRange = worksheet.getRange('C1:D2');
     * permission.setRangeProtectionRanges(unitId, subUnitId, ruleId, [newRange]);
     * ```
     */
    setRangeProtectionRanges(unitId: string, subUnitId: string, ruleId: string, ranges: FRange[]): void;
    /**
     * Get the permission information for a specific cell in a worksheet.
     * @param {string} unitId - The unique identifier of the workbook.
     * @param {string} subUnitId - The unique identifier of the worksheet within the workbook.
     * @param {number} row - The row index of the cell.
     * @param {number} column - The column index of the cell.
     * @returns {{ permissionId: string, ruleId: string } | undefined} - Returns an object containing the `permissionId` and `ruleId` if the cell is protected by a range protection rule. If no protection is found, it returns `undefined`.
     *
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const permission = fWorkbook.getPermission();
     * const unitId = fWorkbook.getId();
     * const subUnitId = fWorksheet.getSheetId();
     *
     * // Get the permission information for cell C3
     * const cell = fWorksheet.getRange('C3');
     * const permissionInfo = permission.getPermissionInfoWithCell(
     *   unitId,
     *   subUnitId,
     *   cell.getRow(),
     *   cell.getColumn()
     * );
     * console.log(permissionInfo);
     *
     * // If the cell is protected, you can remove the protection like this:
     * if (permissionInfo) {
     *   const { ruleId } = permissionInfo;
     *
     *   // After 2 seconds, remove the protection for the cell
     *   setTimeout(() => {
     *     permission.removeRangeProtection(unitId, subUnitId, [ruleId]);
     *   }, 2000);
     * }
     * ```
     */
    getPermissionInfoWithCell(unitId: string, subUnitId: string, row: number, column: number): {
        permissionId: string;
        ruleId: string;
    } | undefined;
}
