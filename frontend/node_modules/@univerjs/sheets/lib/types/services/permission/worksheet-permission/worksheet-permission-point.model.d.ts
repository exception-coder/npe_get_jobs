import { IObjectPointModel, IWorksheetProtectionPointRule } from '../type';
export declare class WorksheetProtectionPointModel {
    private _model;
    private _pointChange;
    pointChange$: import('rxjs').Observable<{
        unitId: string;
        subUnitId: string;
        permissionId: string;
    }>;
    addRule(rule: IWorksheetProtectionPointRule): void;
    deleteRule(unitId: string, subUnitId: string): void;
    getRule(unitId: string, subUnitId: string): IWorksheetProtectionPointRule | undefined;
    toObject(): IObjectPointModel;
    fromObject(obj: IObjectPointModel): void;
    deleteUnitModel(unitId: string): void;
    private _ensureSubUnitMap;
    getTargetByPermissionId(unitId: string, permissionId: string): string[] | null | undefined;
}
