import { Disposable, ICommandService, IConfigService, IUniverInstanceService } from '@univerjs/core';
export declare class SheetsFreezeSyncController extends Disposable {
    private readonly _univerInstanceService;
    private readonly _commandService;
    private readonly _configService;
    private _d;
    private _enabled;
    constructor(_univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _configService: IConfigService);
    getEnabled(): boolean;
    setEnabled(enabled: boolean): void;
    private _initOnlyLocalListener;
    private _handleInsertRowMutation;
    private _handleInsertColMutation;
    private _handleRemoveRowMutation;
    private _handleRemoveColMutation;
    private _handleMoveRowsMutation;
    private _handleMoveColsMutation;
    private _getFreeze;
    private _sequenceExecute;
}
