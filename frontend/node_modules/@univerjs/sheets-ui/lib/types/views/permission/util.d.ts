import { Injector, IRange, Worksheet } from '@univerjs/core';
import { IPermissionPanelRule } from '../../services/permission/sheet-permission-panel.model';
import { EditStateEnum, UnitObject, ViewStateEnum } from '@univerjs/sheets';
export declare const checkRangeValid: (injector: Injector, permissionRanges: IRange[], permissionId: string, unitId: string, subUnitId: string) => string | undefined;
export declare const checkRangesIsWholeSheet: (ranges: IRange[], sheet: Worksheet) => boolean;
export declare const generateDefaultRule: (injector: Injector, fromSheetBar: boolean) => {
    unitId: string;
    subUnitId: string;
    permissionId: string;
    unitType: UnitObject.Worksheet | UnitObject.SelectRange;
    description: string;
    id: string;
    ranges: IRange[];
    editState: EditStateEnum;
    viewState: ViewStateEnum;
};
export declare const generateRuleByUnitType: (injector: Injector, rule: IPermissionPanelRule) => IPermissionPanelRule;
