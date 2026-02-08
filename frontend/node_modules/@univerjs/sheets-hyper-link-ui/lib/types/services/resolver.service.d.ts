import { IRange, Worksheet, ICommandService, IConfigService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { ISheetHyperLinkInfo } from '@univerjs/sheets-hyper-link';
import { IDefinedNamesService } from '@univerjs/engine-formula';
import { IMessageService } from '@univerjs/ui';
export declare class SheetsHyperLinkResolverService {
    private _univerInstanceService;
    private _commandService;
    private _definedNamesService;
    private _messageService;
    private _localeService;
    private _configService;
    constructor(_univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _definedNamesService: IDefinedNamesService, _messageService: IMessageService, _localeService: LocaleService, _configService: IConfigService);
    navigate(info: ISheetHyperLinkInfo): void;
    private _navigateToUniver;
    navigateToRange(unitId: string, subUnitId: string, range: IRange, forceTop?: boolean): Promise<void>;
    navigateToSheetById(unitId: string, subUnitId: string): Promise<false | Worksheet>;
    navigateToDefineName(unitId: string, rangeId: string): Promise<boolean>;
    navigateToOtherWebsite(url: string): Promise<void>;
}
