import { IMutation } from '@univerjs/core';
import { IFeatureCalculationManagerParam } from '../../services/feature-calculation-manager.service';
export interface ISetFeatureCalculationMutation {
    featureId: string;
    calculationParam: IFeatureCalculationManagerParam;
}
/**
 * In the formula engine, the mutation is solely responsible for communication between the worker and the main thread.
 * It requires setting local to true during execution.
 */
export declare const SetFeatureCalculationMutation: IMutation<ISetFeatureCalculationMutation>;
export interface IRemoveFeatureCalculationMutationParam {
    featureIds: string[];
    unitId: string;
    subUnitId: string;
}
export declare const RemoveFeatureCalculationMutation: IMutation<IRemoveFeatureCalculationMutationParam>;
