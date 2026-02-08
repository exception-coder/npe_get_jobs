import { IUniverInstanceService } from '@univerjs/core';
import { SheetsSelectionsService } from './selection.service';
/**
 * Ref selections service reuses code of `SelectionManagerService`. And it only contains ref selections
 * when user is editing formula.
 *
 * Its data should be cleared by the caller quit editing formula and reconstructed when user starts editing.
 */
export declare const IRefSelectionsService: import('@wendellhu/redi').IdentifierDecorator<SheetsSelectionsService>;
/**
 * RefSelectionsService treats `selectionMoveStart$` `selectionMoving$` and `selectionMoveEnd$` differently
 * than `SheetsSelectionsService`. Because ref selections can be in different workbooks.
 */
export declare class RefSelectionsService extends SheetsSelectionsService {
    constructor(_instanceSrv: IUniverInstanceService);
    protected _init(): void;
    dispose(): void;
    private _getAliveWorkbooks$;
}
