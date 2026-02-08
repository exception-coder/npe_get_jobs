import { Disposable, ICommandService, IConfigService, ILogService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { HTTPService } from '@univerjs/network';
import { IMessageService } from '@univerjs/ui';
/**
 * Implementation of formula calculation guard service
 */
export declare class FormulaCalculationGuardService extends Disposable {
    private readonly _messageService;
    private readonly _commandService;
    private readonly _configService;
    private readonly _httpService;
    private readonly _univerInstanceService;
    protected readonly _logService: ILogService;
    private readonly _localeService;
    private _pollingInterval;
    private _maxFormulaLimit;
    private _currentUsage;
    private _taskIds;
    private _lastResponseTimestamp;
    constructor(_messageService: IMessageService, _commandService: ICommandService, _configService: IConfigService, _httpService: HTTPService, _univerInstanceService: IUniverInstanceService, _logService: ILogService, _localeService: LocaleService);
    private _initCommandInterceptor;
    dispose(): void;
    private _checkAndWaitForCalculationPermission;
    /**
     * Apply the command after getting permission
     * @param command
     * @param options
     */
    private _applyCommand;
    private _setFormulaLimitStatus;
    private _startCalculationLimit;
    private _getFormulaLimitStatus;
    private _releaseCalculationLimit;
    private _checkCalculationAvailable;
    private _clearPolling;
    private _showGuardMessage;
    private _hasFormulaInDirtyRanges;
}
