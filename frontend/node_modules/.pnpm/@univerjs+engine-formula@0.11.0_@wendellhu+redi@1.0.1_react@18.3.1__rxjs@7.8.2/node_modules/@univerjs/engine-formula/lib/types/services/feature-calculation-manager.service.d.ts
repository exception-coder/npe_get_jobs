import { IUnitRange, Nullable, Disposable } from '@univerjs/core';
import { Observable } from 'rxjs';
import { IFeatureDirtyRangeType, IRuntimeUnitDataType } from '../basics/common';
import { IRemoveFeatureCalculationMutationParam } from '../commands/mutations/set-feature-calculation.mutation';
import { IFormulaDirtyData } from './current-data.service';
import { IAllRuntimeData } from './runtime.service';
export interface IFeatureCalculationManagerParam {
    unitId: string;
    subUnitId: string;
    dependencyRanges: IUnitRange[];
    getDirtyData: (dirtyData: IFormulaDirtyData, runtimeData: IAllRuntimeData) => {
        runtimeCellData: IRuntimeUnitDataType;
        dirtyRanges: IFeatureDirtyRangeType;
    };
}
export interface IFeatureCalculationManagerService {
    dispose(): void;
    remove(unitId: string, subUnitId: string, featureIds: string[]): void;
    get(unitId: string, subUnitId: string, featureId: string): Nullable<IFeatureCalculationManagerParam>;
    has(unitId: string, subUnitId: string, featureId: string): boolean;
    register(unitId: string, subUnitId: string, featureId: string, referenceExecutor: IFeatureCalculationManagerParam): void;
    getReferenceExecutorMap(): Map<string, Map<string, Map<string, IFeatureCalculationManagerParam>>>;
    onChanged$: Observable<IRemoveFeatureCalculationMutationParam>;
}
/**
 * Passively marked as dirty, register the reference and execution actions of the feature plugin.
 * After execution, a dirty area and calculated data will be returned,
 * causing the formula to be marked dirty again,
 * thereby completing the calculation of the entire dependency tree.
 */
export declare class FeatureCalculationManagerService extends Disposable implements IFeatureCalculationManagerService {
    private _referenceExecutorMap;
    private _onChanged$;
    readonly onChanged$: Observable<IRemoveFeatureCalculationMutationParam>;
    dispose(): void;
    remove(unitId: string, subUnitId: string, featureIds: string[]): void;
    get(unitId: string, subUnitId: string, featureId: string): IFeatureCalculationManagerParam | undefined;
    has(unitId: string, subUnitId: string, featureId: string): boolean;
    register(unitId: string, subUnitId: string, featureId: string, referenceExecutor: IFeatureCalculationManagerParam): void;
    getReferenceExecutorMap(): Map<string, Map<string, Map<string, IFeatureCalculationManagerParam>>>;
}
export declare const IFeatureCalculationManagerService: import('@wendellhu/redi').IdentifierDecorator<FeatureCalculationManagerService>;
