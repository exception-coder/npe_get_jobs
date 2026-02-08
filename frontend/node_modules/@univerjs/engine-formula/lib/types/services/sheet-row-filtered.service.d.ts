import { Disposable } from '@univerjs/core';
type CallbackFunction = (unitId: string, subUnitId: string, row: number) => boolean;
/**
 * The service that gets the row filter status
 */
export interface ISheetRowFilteredService {
    register(callback: CallbackFunction): void;
    getRowFiltered(unitId: string, subUnitId: string, row: number): boolean;
}
export declare class SheetRowFilteredService extends Disposable implements ISheetRowFilteredService {
    private _getRowFilteredCallback;
    register(callback: CallbackFunction): void;
    getRowFiltered(unitId: string, subUnitId: string, row: number): boolean;
}
export declare const ISheetRowFilteredService: import('@wendellhu/redi').IdentifierDecorator<SheetRowFilteredService>;
export {};
