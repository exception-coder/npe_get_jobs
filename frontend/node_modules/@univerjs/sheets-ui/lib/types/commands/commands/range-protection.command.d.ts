import { ICommand } from '@univerjs/core';
import { IRangeProtectionRule } from '@univerjs/sheets';
export interface IAddRangeProtectionParams {
    permissionId: string;
    rule: IRangeProtectionRule;
}
export type ISetRangeProtectionParams = IAddRangeProtectionParams;
export interface IDeleteRangeProtectionParams {
    unitId: string;
    subUnitId: string;
    rule: IRangeProtectionRule;
}
export declare const AddRangeProtectionFromToolbarCommand: ICommand;
export declare const AddRangeProtectionFromContextMenuCommand: ICommand;
export declare const ViewSheetPermissionFromContextMenuCommand: ICommand;
export declare const AddRangeProtectionFromSheetBarCommand: ICommand;
export declare const ViewSheetPermissionFromSheetBarCommand: ICommand;
export declare const DeleteRangeProtectionFromContextMenuCommand: ICommand;
export declare const SetRangeProtectionFromContextMenuCommand: ICommand;
