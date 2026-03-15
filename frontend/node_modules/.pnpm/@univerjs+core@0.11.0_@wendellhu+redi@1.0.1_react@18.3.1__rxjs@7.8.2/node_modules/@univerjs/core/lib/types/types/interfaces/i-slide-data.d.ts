import { ISize } from '../../shared/shape';
import { IKeyType, Nullable } from '../../shared/types';
import { IWorksheetData } from '../../sheets/typedef';
import { LocaleType, ThemeColorType } from '../enum';
import { ShapeType } from '../enum/prst-geom-type';
import { ICustomBlock, IDocumentData, ILists } from './i-document-data';
import { ITransformState } from './i-drawing';
import { IImageProperties } from './i-image-properties';
import { IPlaceholder } from './i-placeholder';
import { IShapeProperties } from './i-shape-properties';
import { IColorStyle, IStyleBase, IStyleData } from './i-style-data';
export interface ISlideData extends IReferenceSource {
    id: string;
    locale?: LocaleType;
    title: string;
    pageSize: ISize;
    body?: ISlidePageBody;
}
interface IReferenceSource {
    master?: {
        [id: string]: ISlidePage;
    };
    handoutMaster?: {
        [id: string]: ISlidePage;
    };
    notesMaster?: {
        [id: string]: ISlidePage;
    };
    layouts?: {
        [id: string]: ISlidePage;
    };
    lists?: ILists;
}
interface ISlidePageBody {
    pages: {
        [id: string]: ISlidePage;
    };
    pageOrder: string[];
}
export interface ISlidePage {
    id: string;
    pageType: PageType;
    zIndex: number;
    title: string;
    description: string;
    pageBackgroundFill: IColorStyle;
    colorScheme?: ThemeColorType;
    pageElements: {
        [elementId: string]: IPageElement;
    };
    slideProperties?: ISlideProperties;
    layoutProperties?: ILayoutProperties;
    notesProperties?: INotesProperties;
    handoutProperties?: IHandoutProperties;
    masterProperties?: IMasterProperties;
}
interface ISlideProperties {
    layoutObjectId: string;
    masterObjectId: string;
    isSkipped: boolean;
}
interface ILayoutProperties {
    masterObjectId: string;
    name: string;
}
interface INotesProperties {
    name: string;
}
interface IHandoutProperties {
    name: string;
}
interface IMasterProperties {
    name: string;
}
export interface ISlideRichTextProps extends ITransformState, IStyleBase {
    text?: string;
    rich?: IDocumentData;
}
export interface IPageElement {
    id: string;
    zIndex: number;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    angle?: number;
    scaleX?: number;
    scaleY?: number;
    skewX?: number;
    skewY?: number;
    flipX?: boolean;
    flipY?: boolean;
    title: string;
    description: string;
    type: PageElementType;
    shape?: IShape;
    image?: IImage;
    richText?: ISlideRichTextProps;
    /** @deprecated */
    spreadsheet?: {
        worksheet: IWorksheetData;
        styles: IKeyType<Nullable<IStyleData>>;
    };
    /** @deprecated */
    document?: IDocumentData;
    /** @deprecated */
    slide?: ISlideData;
    customBlock?: ICustomBlock;
}
export declare enum PageType {
    SLIDE = 0,// A slide page.
    MASTER = 1,// A master slide page.
    LAYOUT = 2,// A layout page.
    HANDOUT_MASTER = 3,// A handout master page.
    NOTES_MASTER = 4
}
export declare enum PageElementType {
    SHAPE = 0,
    IMAGE = 1,
    TEXT = 2,
    SPREADSHEET = 3,
    DOCUMENT = 4,
    SLIDE = 5
}
/**
 * IShape
 */
export interface IShape {
    shapeType: ShapeType;
    text: string;
    shapeProperties: IShapeProperties;
    placeholder?: IPlaceholder;
    link?: ILink;
}
export interface IImage {
    imageProperties?: IImageProperties;
    placeholder?: IPlaceholder;
    link?: ILink;
}
interface ILink {
    relativeLink: RelativeSlideLink;
    pageId?: string;
    slideIndex?: number;
}
export declare enum RelativeSlideLink {
    RELATIVE_SLIDE_LINK_UNSPECIFIED = 0,// An unspecified relative slide link.
    NEXT_SLIDE = 1,// A link to the next slide.
    PREVIOUS_SLIDE = 2,// A link to the previous slide.
    FIRST_SLIDE = 3,// A link to the first slide in the presentation.
    LAST_SLIDE = 4
}
export {};
