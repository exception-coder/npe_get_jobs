import { Disposable, ICommandService, IConfigService } from '@univerjs/core';
import { SheetsFilterController } from './sheets-filter.controller';
export declare class SheetsFilterSyncController extends Disposable {
    private readonly _sheetsFilterController;
    protected readonly _commandService: ICommandService;
    private readonly _configService;
    private _d;
    private readonly _visible$;
    readonly visible$: import('rxjs').Observable<boolean>;
    get visible(): boolean;
    private readonly _enabled$;
    readonly enabled$: import('rxjs').Observable<boolean>;
    get enabled(): boolean;
    constructor(_sheetsFilterController: SheetsFilterController, _commandService: ICommandService, _configService: IConfigService);
    setEnabled(enabled: boolean): void;
    private _initOnlyLocalListener;
}
