import { UnitObject } from '@univerjs/protocol';
import { EditStateEnum, ViewStateEnum } from '../../model/range-protection-rule.model';
export interface IWorksheetProtectionRule {
    permissionId: string;
    description?: string;
    unitType: UnitObject;
    unitId: string;
    subUnitId: string;
    viewState: ViewStateEnum;
    editState: EditStateEnum;
}
export interface IWorksheetProtectionPointRule {
    unitId: string;
    subUnitId: string;
    permissionId: string;
}
export type IObjectModel = Record<string, IWorksheetProtectionRule[]>;
export type IModel = Map<string, Map<string, IWorksheetProtectionRule>>;
export type IObjectPointModel = Record<string, IWorksheetProtectionPointRule[]>;
export type IPointRuleModel = Map<string, Map<string, IWorksheetProtectionPointRule>>;
