import { ITextRange } from '../../../../sheets/typedef';
import { ICustomTable, IParagraph, IParagraphStyle, ITextStyle } from '../../../../types/interfaces';
import { DocumentDataModel } from '../../document-data-model';
import { TextX } from '../text-x';
export interface ISwitchParagraphBulletParams {
    paragraphs: IParagraph[];
    listType: string;
    segmentId?: string;
    document: DocumentDataModel;
}
export declare const switchParagraphBullet: (params: ISwitchParagraphBulletParams) => TextX;
export interface IToggleChecklistParagraphParams {
    paragraphIndex: number;
    segmentId?: string;
    document: DocumentDataModel;
}
export declare const toggleChecklistParagraph: (params: IToggleChecklistParagraphParams) => false | TextX;
export interface ISetParagraphBulletParams {
    paragraphs: IParagraph[];
    listType: string;
    segmentId?: string;
    document: DocumentDataModel;
}
export declare const setParagraphBullet: (params: ISetParagraphBulletParams) => false | TextX;
export interface IChangeParagraphBulletNestLevelParams {
    paragraphs: IParagraph[];
    segmentId?: string;
    document: DocumentDataModel;
    type: 1 | -1;
}
export declare function hasParagraphInTable(paragraph: IParagraph, tables: ICustomTable[]): boolean;
export declare const changeParagraphBulletNestLevel: (params: IChangeParagraphBulletNestLevelParams) => TextX;
export interface ISetParagraphStyleParams {
    textRanges: readonly ITextRange[];
    segmentId?: string;
    document: DocumentDataModel;
    style: IParagraphStyle;
    paragraphTextRun?: ITextStyle;
    cursor?: number;
    deleteLen?: number;
    textX?: TextX;
}
export declare const setParagraphStyle: (params: ISetParagraphStyleParams) => TextX;
