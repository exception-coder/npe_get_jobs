import { ThemeService } from '../../../../services/theme/theme.service';
import { Nullable } from '../../../../shared';
import { ITextRange, ITextRangeParam } from '../../../../sheets/typedef';
import { CustomRangeType, IDocumentBody } from '../../../../types/interfaces';
import { DocumentDataModel } from '../../document-data-model';
import { TextXAction } from '../action-types';
import { TextXSelection, TextX } from '../text-x';
export interface IDeleteCustomRangeParam {
    rangeId: string;
    segmentId?: string;
    documentDataModel: DocumentDataModel;
    insert?: Nullable<IDocumentBody>;
}
export declare function deleteCustomRangeTextX(params: IDeleteCustomRangeParam): false | TextXSelection;
export interface IAddCustomRangeTextXParam {
    ranges: ITextRange[];
    segmentId?: string;
    rangeId: string;
    rangeType: CustomRangeType;
    properties?: Record<string, any>;
    wholeEntity?: boolean;
    body: IDocumentBody;
}
export declare function addCustomRangeTextX(param: IAddCustomRangeTextXParam): false | (TextX & {
    selections?: ITextRange[];
});
export declare function deleteSelectionTextX(selections: ITextRange[], body: IDocumentBody, memoryCursor?: number, insertBody?: Nullable<IDocumentBody>, keepBullet?: boolean): Array<TextXAction>;
export declare function retainSelectionTextX(selections: ITextRange[], body: IDocumentBody, memoryCursor?: number): TextXAction[];
export interface IReplaceSelectionTextXParams {
    /**
     * range to be replaced.
     */
    selection: ITextRangeParam;
    /** Body to be inserted at the given position. */
    body: IDocumentBody;
    /**
     * origin document data model.
     */
    doc: DocumentDataModel;
}
export declare const replaceSelectionTextX: (params: IReplaceSelectionTextXParams) => false | TextX;
export interface IReplaceSelectionTextRunsParams extends IReplaceSelectionTextXParams {
    themeService: ThemeService;
}
export declare const replaceSelectionTextRuns: (params: IReplaceSelectionTextRunsParams) => false | TextX;
