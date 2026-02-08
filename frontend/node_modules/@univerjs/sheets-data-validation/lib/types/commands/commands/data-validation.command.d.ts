import { IAccessor, ICommand, IDataValidationRuleBase, IDataValidationRuleOptions, IMutationInfo, Injector, IRange, ISheetDataValidationRule } from '@univerjs/core';
import { DataValidationChangeSource, IRemoveDataValidationMutationParams } from '@univerjs/data-validation';
import { ISheetCommandSharedParams } from '@univerjs/sheets';
import { RangeMutation } from '../../models/rule-matrix';
export interface IUpdateSheetDataValidationRangeCommandParams {
    unitId: string;
    subUnitId: string;
    ruleId: string;
    ranges: IRange[];
}
export declare function getDataValidationDiffMutations(unitId: string, subUnitId: string, diffs: RangeMutation[], accessor: IAccessor, source?: DataValidationChangeSource, fillDefaultValue?: boolean): {
    redoMutations: IMutationInfo<object>[];
    undoMutations: IMutationInfo<object>[];
};
export declare const UpdateSheetDataValidationRangeCommand: ICommand<IUpdateSheetDataValidationRangeCommandParams>;
export interface IAddSheetDataValidationCommandParams {
    unitId: string;
    subUnitId: string;
    rule: ISheetDataValidationRule;
}
export declare const AddSheetDataValidationCommand: ICommand<IAddSheetDataValidationCommandParams>;
export interface IUpdateSheetDataValidationSettingCommandParams extends ISheetCommandSharedParams {
    ruleId: string;
    setting: IDataValidationRuleBase;
}
export declare const UpdateSheetDataValidationSettingCommand: ICommand<IUpdateSheetDataValidationSettingCommandParams>;
export interface IUpdateSheetDataValidationOptionsCommandParams extends ISheetCommandSharedParams {
    ruleId: string;
    options: IDataValidationRuleOptions;
}
export declare const UpdateSheetDataValidationOptionsCommand: ICommand<IUpdateSheetDataValidationOptionsCommandParams>;
export interface IClearRangeDataValidationCommandParams {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
}
export declare const ClearRangeDataValidationCommand: ICommand<IClearRangeDataValidationCommandParams>;
export interface IRemoveSheetAllDataValidationCommandParams extends ISheetCommandSharedParams {
}
export declare const RemoveSheetAllDataValidationCommand: ICommand<IRemoveSheetAllDataValidationCommandParams>;
export interface IRemoveSheetDataValidationCommandParams extends ISheetCommandSharedParams {
    ruleId: string;
}
export declare const removeDataValidationUndoFactory: (accessor: Injector, redoParams: IRemoveDataValidationMutationParams) => IMutationInfo<object>[];
export declare const RemoveSheetDataValidationCommand: ICommand<IRemoveSheetDataValidationCommandParams>;
