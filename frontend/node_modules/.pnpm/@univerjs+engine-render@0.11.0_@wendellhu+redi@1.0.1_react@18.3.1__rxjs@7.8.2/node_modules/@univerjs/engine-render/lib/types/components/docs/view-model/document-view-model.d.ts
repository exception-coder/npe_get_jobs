import { DocumentDataModel, ICustomBlock, ICustomDecorationForInterceptor, ICustomRangeForInterceptor, ICustomTable, IDisposable, IParagraph, ISectionBreak, ITable, ITextRun, Nullable } from '@univerjs/core';
import { DataStreamTreeNode } from './data-stream-tree-node';
interface ITableNodeCache {
    table: DataStreamTreeNode;
}
export interface ICustomRangeInterceptor {
    getCustomRange: (index: number) => Nullable<ICustomRangeForInterceptor>;
    getCustomDecoration: (index: number) => Nullable<ICustomDecorationForInterceptor>;
}
export declare enum DocumentEditArea {
    BODY = "BODY",
    HEADER = "HEADER",
    FOOTER = "FOOTER"
}
export declare function parseDataStreamToTree(dataStream: string, tables?: ICustomTable[]): {
    sectionList: DataStreamTreeNode[];
    tableNodeCache: Map<string, ITableNodeCache>;
};
interface ITableCoupleCache {
    table: ICustomTable;
    tableSource: ITable;
}
export declare class DocumentViewModel implements IDisposable {
    private _documentDataModel;
    private _interceptor;
    private _cacheSize;
    private _textRunsCache;
    private _paragraphCache;
    private _sectionBreakCache;
    private _customBlockCache;
    private _tableCache;
    private _tableNodeCache;
    private _children;
    private _editArea;
    private readonly _editAreaChange$;
    readonly editAreaChange$: import('rxjs').Observable<Nullable<DocumentEditArea>>;
    private _headerTreeMap;
    private _footerTreeMap;
    private readonly _segmentViewModels$;
    readonly segmentViewModels$: import('rxjs').Observable<DocumentViewModel[]>;
    constructor(_documentDataModel: DocumentDataModel);
    registerCustomRangeInterceptor(interceptor: ICustomRangeInterceptor): IDisposable;
    dispose(): void;
    getHeaderFooterTreeMap(): {
        headerTreeMap: Map<string, DocumentViewModel>;
        footerTreeMap: Map<string, DocumentViewModel>;
    };
    getEditArea(): DocumentEditArea;
    setEditArea(editArea: DocumentEditArea): void;
    getChildren(): DataStreamTreeNode[];
    getBody(): import('@univerjs/core').IDocumentBody | undefined;
    getSnapshot(): import('@univerjs/core').IDocumentData;
    getDataModel(): DocumentDataModel;
    getSelfOrHeaderFooterViewModel(segmentId?: string): DocumentViewModel;
    reset(documentDataModel: DocumentDataModel): void;
    getSectionBreak(index: number): ISectionBreak | undefined;
    getParagraph(index: number): IParagraph | undefined;
    getTextRun(index: number): Nullable<ITextRun>;
    getCustomBlock(index: number): ICustomBlock | undefined;
    getCustomBlockWithoutSetCurrentIndex(index: number): ICustomBlock | undefined;
    getTableByStartIndex(index: number): ITableCoupleCache | undefined;
    findTableNodeById(id: string): DataStreamTreeNode | undefined;
    getCustomRangeRaw(index: number): import('@univerjs/core').ICustomRange<Record<string, any>> | undefined;
    getCustomRange(index: number): Nullable<ICustomRangeForInterceptor>;
    getCustomDecorationRaw(index: number): import('@univerjs/core').ICustomDecoration | undefined;
    getCustomDecoration(index: number): Nullable<ICustomDecorationForInterceptor>;
    private _buildAllCache;
    private _buildParagraphCache;
    private _buildSectionBreakCache;
    private _buildCustomBlockCache;
    private _buildTableCache;
    private _buildTextRunsCache;
    private _buildHeaderFooterViewModel;
}
export {};
