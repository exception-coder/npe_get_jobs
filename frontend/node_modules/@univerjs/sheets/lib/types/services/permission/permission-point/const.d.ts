import { RangeProtectionPermissionEditPoint } from './range/edit';
import { RangeProtectionPermissionViewPoint } from './range/view';
import { WorkbookCommentPermission } from './workbook/comment';
import { WorkbookCopyPermission } from './workbook/copy';
import { WorkbookCreateProtectPermission } from './workbook/create-permission';
import { WorkbookCreateSheetPermission } from './workbook/create-sheet';
import { WorkbookDeleteSheetPermission } from './workbook/delete-sheet';
import { WorkbookDuplicatePermission } from './workbook/duplicate';
import { WorkbookEditablePermission } from './workbook/editable';
import { WorkbookExportPermission } from './workbook/export';
import { WorkbookHideSheetPermission } from './workbook/hide-sheet';
import { WorkbookHistoryPermission } from './workbook/history';
import { WorkbookManageCollaboratorPermission } from './workbook/manage-collaborator';
import { WorkbookMoveSheetPermission } from './workbook/move-sheet';
import { WorkbookPrintPermission } from './workbook/print';
import { WorkbookRecoverHistoryPermission } from './workbook/recover-history';
import { WorkbookRenameSheetPermission } from './workbook/rename-sheet';
import { WorkbookSharePermission } from './workbook/share';
import { WorkbookViewPermission } from './workbook/view';
import { WorkbookViewHistoryPermission } from './workbook/view-history';
import { WorksheetCopyPermission } from './worksheet/copy';
import { WorksheetDeleteColumnPermission } from './worksheet/delete-column';
import { WorksheetDeleteProtectionPermission } from './worksheet/delete-protection';
import { WorksheetDeleteRowPermission } from './worksheet/delete-row';
import { WorksheetEditPermission } from './worksheet/edit';
import { WorksheetEditExtraObjectPermission } from './worksheet/edit-extra-object';
import { WorksheetFilterPermission } from './worksheet/filter';
import { WorksheetInsertColumnPermission } from './worksheet/insert-column';
import { WorksheetInsertHyperlinkPermission } from './worksheet/insert-hyperlink';
import { WorksheetInsertRowPermission } from './worksheet/insert-row';
import { WorksheetManageCollaboratorPermission } from './worksheet/manage-collaborator';
import { WorksheetPivotTablePermission } from './worksheet/pivot-table';
import { WorksheetSetCellStylePermission } from './worksheet/set-cell-style';
import { WorksheetSetCellValuePermission } from './worksheet/set-cell-value';
import { WorksheetSetColumnStylePermission } from './worksheet/set-column-style';
import { WorksheetSetRowStylePermission } from './worksheet/set-row-style';
import { WorksheetSortPermission } from './worksheet/sort';
import { WorksheetViewPermission } from './worksheet/view';
/**
 * @ignore
 */
export declare const PermissionPointsDefinitions: {
    /**
     * The permission point for adding or editing workbook comments
     */
    WorkbookCommentPermission: typeof WorkbookCommentPermission;
    /**
     * The permission point for copy in workbook
     */
    WorkbookCopyPermission: typeof WorkbookCopyPermission;
    /**
     * The permission point for creating protect in a workbook
     */
    WorkbookCreateProtectPermission: typeof WorkbookCreateProtectPermission;
    /**
     * The permission point for creating new sheets in a workbook
     */
    WorkbookCreateSheetPermission: typeof WorkbookCreateSheetPermission;
    /**
     * The permission point for deleting sheets in a workbook
     */
    WorkbookDeleteSheetPermission: typeof WorkbookDeleteSheetPermission;
    /**
     * The permission point for duplicating a sheet in a workbook
     */
    WorkbookDuplicatePermission: typeof WorkbookDuplicatePermission;
    /**
     * The permission point for editing workbook content
     */
    WorkbookEditablePermission: typeof WorkbookEditablePermission;
    /**
     * The permission point for exporting workbook data
     */
    WorkbookExportPermission: typeof WorkbookExportPermission;
    /**
     * The permission point for hiding sheets in a workbook
     */
    WorkbookHideSheetPermission: typeof WorkbookHideSheetPermission;
    /**
     * The permission point for viewing and managing workbook history
     */
    WorkbookHistoryPermission: typeof WorkbookHistoryPermission;
    /**
     * The permission point for managing collaborators in a workbook
     */
    WorkbookManageCollaboratorPermission: typeof WorkbookManageCollaboratorPermission;
    /**
     * The permission point for moving sheets within a workbook
     */
    WorkbookMoveSheetPermission: typeof WorkbookMoveSheetPermission;
    /**
     * The permission point for printing a workbook
     */
    WorkbookPrintPermission: typeof WorkbookPrintPermission;
    /**
     * The permission point for recovering a previous history state of a workbook
     */
    WorkbookRecoverHistoryPermission: typeof WorkbookRecoverHistoryPermission;
    /**
     * The permission point for renaming sheets in a workbook
     */
    WorkbookRenameSheetPermission: typeof WorkbookRenameSheetPermission;
    /**
     * The permission point for sharing a workbook with others
     */
    WorkbookSharePermission: typeof WorkbookSharePermission;
    /**
     * The permission point for viewing the history of a workbook
     */
    WorkbookViewHistoryPermission: typeof WorkbookViewHistoryPermission;
    /**
     * The permission point for viewing a workbook
     */
    WorkbookViewPermission: typeof WorkbookViewPermission;
    /**
     * The permission point for copying contents from a worksheet
     */
    WorksheetCopyPermission: typeof WorksheetCopyPermission;
    /**
     * The permission point for deleting columns in a worksheet
     */
    WorksheetDeleteColumnPermission: typeof WorksheetDeleteColumnPermission;
    /**
     * The permission point for deleting worksheet protection rules
     */
    WorksheetDeleteProtectionPermission: typeof WorksheetDeleteProtectionPermission;
    /**
     * The permission point for deleting rows in a worksheet
     */
    WorksheetDeleteRowPermission: typeof WorksheetDeleteRowPermission;
    /**
     * The permission point for editing extra objects (e.g. shapes) in a worksheet
     */
    WorksheetEditExtraObjectPermission: typeof WorksheetEditExtraObjectPermission;
    /**
     * The permission point for editing the content of a worksheet
     */
    WorksheetEditPermission: typeof WorksheetEditPermission;
    /**
     * The permission point for applying filters in a worksheet
     */
    WorksheetFilterPermission: typeof WorksheetFilterPermission;
    /**
     * The permission point for inserting columns into a worksheet
     */
    WorksheetInsertColumnPermission: typeof WorksheetInsertColumnPermission;
    /**
     * The permission point for inserting hyperlinks in a worksheet
     */
    WorksheetInsertHyperlinkPermission: typeof WorksheetInsertHyperlinkPermission;
    /**
     * The permission point for inserting rows into a worksheet
     */
    WorksheetInsertRowPermission: typeof WorksheetInsertRowPermission;
    /**
     * The permission point for managing collaborators of a worksheet
     */
    WorksheetManageCollaboratorPermission: typeof WorksheetManageCollaboratorPermission;
    /**
     * The permission point for creating or modifying pivot tables in a worksheet
     */
    WorksheetPivotTablePermission: typeof WorksheetPivotTablePermission;
    /**
     * The permission point for setting the style of cells in a worksheet
     */
    WorksheetSetCellStylePermission: typeof WorksheetSetCellStylePermission;
    /**
     * The permission point for setting the value of cells in a worksheet
     */
    WorksheetSetCellValuePermission: typeof WorksheetSetCellValuePermission;
    /**
     * The permission point for setting the style of columns in a worksheet
     */
    WorksheetSetColumnStylePermission: typeof WorksheetSetColumnStylePermission;
    /**
     * The permission point for setting the style of rows in a worksheet
     */
    WorksheetSetRowStylePermission: typeof WorksheetSetRowStylePermission;
    /**
     * The permission point for performing sort operations on a worksheet
     */
    WorksheetSortPermission: typeof WorksheetSortPermission;
    /**
     * The permission point for viewing the content of a worksheet
     */
    WorksheetViewPermission: typeof WorksheetViewPermission;
    /**
     * The permission point for editing the range protection settings
     */
    RangeProtectionPermissionEditPoint: typeof RangeProtectionPermissionEditPoint;
    /**
     * The permission point for viewing the range protection settings
     */
    RangeProtectionPermissionViewPoint: typeof RangeProtectionPermissionViewPoint;
};
