import { IDataValidationRule, IDisposable, Nullable, Disposable, IUniverInstanceService } from '@univerjs/core';
import { ISidebarService } from '@univerjs/ui';
export declare class DataValidationPanelService extends Disposable {
    private readonly _univerInstanceService;
    private readonly _sidebarService;
    private _open$;
    readonly open$: import('rxjs').Observable<boolean>;
    private _activeRule;
    private _activeRule$;
    readonly activeRule$: import('rxjs').Observable<Nullable<{
        unitId: string;
        subUnitId: string;
        rule: IDataValidationRule;
    }>>;
    get activeRule(): Nullable<{
        unitId: string;
        subUnitId: string;
        rule: IDataValidationRule;
    }>;
    get isOpen(): boolean;
    private _closeDisposable;
    constructor(_univerInstanceService: IUniverInstanceService, _sidebarService: ISidebarService);
    dispose(): void;
    open(): void;
    close(): void;
    setCloseDisposable(disposable: IDisposable): void;
    setActiveRule(rule: Nullable<{
        unitId: string;
        subUnitId: string;
        rule: IDataValidationRule;
    }>): void;
}
