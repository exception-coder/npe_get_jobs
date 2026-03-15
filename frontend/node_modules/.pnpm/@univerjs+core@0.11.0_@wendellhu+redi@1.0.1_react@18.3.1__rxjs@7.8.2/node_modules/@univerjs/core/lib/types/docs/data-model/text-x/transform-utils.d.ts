import { IDocumentBody } from '../../../types/interfaces';
import { IRetainAction } from './action-types';
import { UpdateDocsAttributeType } from '../../../shared';
interface ITransformBodyResult {
    body: IDocumentBody;
    coverType: UpdateDocsAttributeType;
}
export declare function transformBody(thisAction: IRetainAction, otherAction: IRetainAction, priority?: boolean): ITransformBodyResult;
export {};
