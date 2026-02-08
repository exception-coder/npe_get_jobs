import { IRange, Nullable, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { IDefinedNamesService } from '@univerjs/engine-formula';
import { SheetHyperLinkType } from '../types/enums/hyper-link-type';
export interface ISheetUrlParams {
    gid?: string;
    range?: string;
    rangeid?: string;
    unitid?: string;
}
export interface ISheetHyperLinkInfo {
    type: SheetHyperLinkType;
    name: string;
    url: string;
    searchObj: Nullable<ISheetUrlParams>;
}
export declare class SheetsHyperLinkParserService {
    private _univerInstanceService;
    private _localeService;
    private _definedNamesService;
    constructor(_univerInstanceService: IUniverInstanceService, _localeService: LocaleService, _definedNamesService: IDefinedNamesService);
    buildHyperLink(unitId: string, sheetId: string, range?: string | IRange): string;
    parseHyperLink(urlStr: string): ISheetHyperLinkInfo;
    private _getURLName;
}
