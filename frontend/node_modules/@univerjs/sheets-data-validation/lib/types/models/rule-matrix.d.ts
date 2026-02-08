import { IRange, ISheetDataValidationRule, IUniverInstanceService } from '@univerjs/core';
export type RangeMutation = {
    type: 'update';
    ruleId: string;
    oldRanges: IRange[];
    newRanges: IRange[];
    rule: ISheetDataValidationRule;
} | {
    type: 'delete';
    rule: ISheetDataValidationRule;
    index: number;
} | {
    type: 'add';
    rule: ISheetDataValidationRule;
};
export declare class RuleMatrix {
    private _unitId;
    private _subUnitId;
    private _univerInstanceService;
    private _disableTree;
    private _map;
    private _tree;
    private _dirty;
    constructor(value: Map<string, IRange[]>, _unitId: string, _subUnitId: string, _univerInstanceService: IUniverInstanceService, _disableTree?: boolean);
    private _buildTree;
    private _debonceBuildTree;
    get _worksheet(): import('@univerjs/core').Nullable<import('@univerjs/core').Worksheet>;
    private _addRule;
    addRule(rule: ISheetDataValidationRule): void;
    removeRange(_ranges: IRange[]): void;
    private _removeRule;
    removeRule(rule: ISheetDataValidationRule): void;
    updateRange(ruleId: string, _newRanges: IRange[]): void;
    addRangeRules(rules: {
        id: string;
        ranges: IRange[];
    }[]): void;
    diff(rules: ISheetDataValidationRule[]): RangeMutation[];
    diffWithAddition(rules: ISheetDataValidationRule[], additionRules: IterableIterator<ISheetDataValidationRule>): RangeMutation[];
    clone(): RuleMatrix;
    getValue(row: number, col: number): string | undefined;
}
