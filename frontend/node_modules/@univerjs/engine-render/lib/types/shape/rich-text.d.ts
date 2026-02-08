import { IDocumentData, IStyleBase, ITransformState, LocaleService, DocumentDataModel } from '@univerjs/core';
import { BASE_OBJECT_ARRAY, BaseObject, ObjectType } from '../base-object';
import { IViewportInfo } from '../basics/vector2';
import { UniverRenderingContext } from '../context';
export interface IRichTextProps extends ITransformState, IStyleBase {
    text?: string;
    richText?: IDocumentData;
    zIndex: number;
    forceRender?: boolean;
}
export type RichtextObjectJSONType = {
    [key in typeof BASE_OBJECT_ARRAY[number]]: number;
} & {
    text: string;
    fs: number;
    richText?: unknown;
};
export declare const RICHTEXT_OBJECT_ARRAY: string[];
export declare class RichText extends BaseObject {
    private _localeService;
    private _documentData;
    private _documentSkeleton;
    private _documents;
    documentModel: DocumentDataModel;
    /**
     * fontFamily
     */
    private _ff?;
    /**
     * fontSize
     * pt
     */
    private _fs?;
    /**
     * italic
     * 0: false
     * 1: true
     */
    private _it?;
    /**
     * bold
     * 0: false
     * 1: true
     */
    private _bl?;
    /**
     * underline
     */
    private _ul?;
    /**
     * strikethrough
     */
    private _st?;
    /**
     * overline
     */
    private _ol?;
    /**
     * background
     */
    private _bg?;
    /**
     * border
     */
    private _bd?;
    /**
     * foreground
     */
    private _cl?;
    objectType: ObjectType;
    constructor(_localeService: LocaleService, key?: string, props?: IRichTextProps);
    get fs(): number;
    get text(): string;
    get documentData(): IDocumentData;
    /**
     * get last page size
     */
    getDocsSkeletonPageSize(): {
        width: number;
        height: number;
    } | undefined;
    /**
     * this[`_${key}`] = props[key];
     * @param props
     */
    setProps(props?: IRichTextProps): this | undefined;
    render(mainCtx: UniverRenderingContext, bounds?: IViewportInfo): this;
    toJson(): RichtextObjectJSONType;
    protected _draw(ctx: UniverRenderingContext): void;
    private _convertToDocumentData;
    private _initialProps;
    /**
     * After changing editor size & end of editing, update skeleton of doc.
     */
    refreshDocumentByDocData(): void;
    /**
     * invoked when end editing.
     */
    resizeToContentSize(): void;
}
