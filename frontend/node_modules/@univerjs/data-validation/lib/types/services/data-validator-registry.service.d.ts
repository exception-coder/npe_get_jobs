import { BaseDataValidator } from '../validators/base-data-validator';
export declare enum DataValidatorRegistryScope {
    SHEET = "sheet"
}
/**
 * Register data validator
 */
export declare class DataValidatorRegistryService {
    private _validatorByScopes;
    private _validatorMap;
    private _validatorsChange$;
    validatorsChange$: import('rxjs').Observable<void>;
    private _addValidatorToScope;
    private _removeValidatorFromScope;
    register(validator: BaseDataValidator): import('@wendellhu/redi').IDisposable;
    getValidatorItem(id: string): BaseDataValidator | undefined;
    getValidatorsByScope(scope: string): BaseDataValidator[] | undefined;
}
