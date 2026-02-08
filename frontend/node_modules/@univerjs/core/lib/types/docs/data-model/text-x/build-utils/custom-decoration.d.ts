import { ITextRange } from '../../../../sheets/typedef';
import { DocumentDataModel } from '../../document-data-model';
import { CustomDecorationType } from '../../../../types/interfaces';
import { TextX } from '../text-x';
interface IAddCustomDecorationParam {
    ranges: ITextRange[];
    id: string;
    type: CustomDecorationType;
}
export declare function addCustomDecorationTextX(param: IAddCustomDecorationParam): TextX;
export interface IDeleteCustomRangeParam {
    id: string;
    segmentId?: string;
    documentDataModel: DocumentDataModel;
}
export declare function deleteCustomDecorationTextX(params: IDeleteCustomRangeParam): false | TextX;
export {};
