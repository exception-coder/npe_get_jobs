import { Disposable } from '@univerjs/core';
import { SheetsHyperLinkParserService } from '@univerjs/sheets-hyper-link';
import { SheetsHyperLinkResolverService } from '../services/resolver.service';
export declare class SheetHyperLinkUrlController extends Disposable {
    private readonly _parserService;
    private _resolverService;
    constructor(_parserService: SheetsHyperLinkParserService, _resolverService: SheetsHyperLinkResolverService);
    private _handleInitUrl;
}
