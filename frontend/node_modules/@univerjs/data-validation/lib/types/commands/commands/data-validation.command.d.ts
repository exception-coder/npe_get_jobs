import { ICommand, IDataValidationRule, IDataValidationRuleBase, IDataValidationRuleOptions, IMutationInfo, Injector, IRange } from '@univerjs/core';
import { IRemoveDataValidationMutationParams } from '../mutations/data-validation.mutation';
interface ISheetCommandSharedParams {
    unitId: string;
    subUnitId: string;
}
export interface IAddDataValidationCommandParams extends ISheetCommandSharedParams {
    rule: Omit<IDataValidationRule, 'ranges'> & {
        range: IRange;
    };
    index?: number;
}
/**
 * @deprecated `AddDataValidationCommand` is deprecated, please use `AddSheetDataValidationCommand` in `@univerjs/sheets-data-validation` instead!
 */
export declare const AddDataValidationCommand: ICommand<IAddDataValidationCommandParams>;
export interface IRemoveDataValidationCommandParams extends ISheetCommandSharedParams {
    ruleId: string;
}
export declare const removeDataValidationUndoFactory: (accessor: Injector, redoParams: IRemoveDataValidationMutationParams) => IMutationInfo<object>[];
/**
 * @deprecated `RemoveDataValidationCommand` is deprecated, please use `RemoveSheetDataValidationCommand` in `@univerjs/sheets-data-validation` instead!
 */
export declare const RemoveDataValidationCommand: ICommand<IRemoveDataValidationCommandParams>;
export interface IUpdateDataValidationOptionsCommandParams extends ISheetCommandSharedParams {
    ruleId: string;
    options: IDataValidationRuleOptions;
}
/**
 * @deprecated `UpdateDataValidationOptionsCommand` is deprecated, please use `UpdateSheetDataValidationOptionsCommand` in `@univerjs/sheets-data-validation` instead!
 */
export declare const UpdateDataValidationOptionsCommand: ICommand<IUpdateDataValidationOptionsCommandParams>;
export interface IUpdateDataValidationSettingCommandParams extends ISheetCommandSharedParams {
    ruleId: string;
    setting: IDataValidationRuleBase;
}
/**
 * @deprecated `UpdateDataValidationSettingCommand` is deprecated, please use `UpdateSheetDataValidationSettingCommand` in `@univerjs/sheets-data-validation` instead!
 */
export declare const UpdateDataValidationSettingCommand: ICommand<IUpdateDataValidationSettingCommandParams>;
export interface IRemoveAllDataValidationCommandParams extends ISheetCommandSharedParams {
}
/**
 * @deprecated `RemoveAllDataValidationCommand` is deprecated, please use `RemoveSheetAllDataValidationCommand` in `@univerjs/sheets-data-validation` instead!
 */
export declare const RemoveAllDataValidationCommand: ICommand<IRemoveAllDataValidationCommandParams>;
export {};
