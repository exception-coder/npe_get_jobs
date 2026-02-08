import { ITextStyle, Nullable } from '@univerjs/core';
import { ISheetSkeletonManagerParam } from '../../sheet-skeleton-manager.service';
import { IClipboardPropertyItem, IUniverSheetCopyDataModel } from '../type';
import { IPastePlugin } from './paste-plugins/type';
export interface IStyleRule {
    filter: string | string[] | ((node: HTMLElement) => boolean);
    getStyle(node: HTMLElement): ITextStyle;
}
export interface IParsedTablesInfo {
    index: number;
}
interface IHtmlToUSMServiceProps {
    getCurrentSkeleton: () => Nullable<ISheetSkeletonManagerParam>;
}
export declare class HtmlToUSMService {
    private static _pluginList;
    static use(plugin: IPastePlugin): void;
    private _styleMap;
    private _styleCache;
    private _styleRules;
    private _afterProcessRules;
    private _dom;
    private _getCurrentSkeleton;
    constructor(props: IHtmlToUSMServiceProps);
    convert(html: string): IUniverSheetCopyDataModel;
    private _getStyleBySelectorText;
    private _getStyle;
    private _parseTable;
    private _parseTableByHtml;
    private _parseCellHtml;
    private _getCellTextAndRichText;
    private _generateDocumentDataModelSnapshot;
    private process;
    private _processBeforeLink;
    private _processAfterLink;
    dispose(): void;
}
/**
 * This function parses <tr> elements in the table. So it would return several things.
 * @param html raw content
 * @returns
 */
export declare function parseTableRows(html: string): {
    rowProperties: IClipboardPropertyItem[];
    rowCount: number;
};
export {};
