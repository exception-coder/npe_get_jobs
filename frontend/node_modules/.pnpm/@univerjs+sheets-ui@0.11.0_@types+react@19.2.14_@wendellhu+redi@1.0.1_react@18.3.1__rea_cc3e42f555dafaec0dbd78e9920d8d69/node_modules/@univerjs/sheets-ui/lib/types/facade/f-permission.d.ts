import { FPermission } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFPermissionSheetsUIMixin {
    /**
     * Set visibility of unauthorized pop-up window
     * @param {boolean} visible - visibility of unauthorized pop-up window
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const permission = fWorkbook.getPermission();
     * permission.setPermissionDialogVisible(false);
     * ```
     */
    setPermissionDialogVisible(visible: boolean): void;
}
export declare class FPermissionSheetsUIMixin extends FPermission implements IFPermissionSheetsUIMixin {
    setPermissionDialogVisible(visible: boolean): void;
}
declare module '@univerjs/sheets/facade' {
    interface FPermission extends IFPermissionSheetsUIMixin {
    }
}
