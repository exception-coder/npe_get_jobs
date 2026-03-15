import { IRange } from '@univerjs/core';
import { IRangeProtectionRule, IWorksheetProtectionRule } from '@univerjs/sheets';
export declare const DEFAULT_RANGE_RULE: IRangeProtectionRule;
export type IPermissionPanelRule = (IRangeProtectionRule | IWorksheetProtectionRule) & {
    ranges: IRange[];
    id: string;
};
export declare class SheetPermissionPanelModel {
    private _rule;
    private _visible;
    setVisible(v: boolean): void;
    getVisible(): boolean;
    reset(): void;
}
