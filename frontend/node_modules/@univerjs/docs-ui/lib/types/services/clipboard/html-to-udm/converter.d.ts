import { IDocumentData } from '@univerjs/core';
import { IPastePlugin } from './paste-plugins/type';
/**
 * Convert html strings into data structures in univer, IDocumentBody.
 * Support plug-in, add custom rules,
 */
export declare class HtmlToUDMService {
    private static _pluginList;
    static use(plugin: IPastePlugin): void;
    private _tableCache;
    private _styleCache;
    private _styleRules;
    private _afterProcessRules;
    convert(html: string, metaConfig?: {
        unitId?: string;
    }): Partial<IDocumentData>;
    private _process;
    private _processBeforeTable;
    private _processAfterTable;
    private _processBeforeLink;
    private _processAfterLink;
}
