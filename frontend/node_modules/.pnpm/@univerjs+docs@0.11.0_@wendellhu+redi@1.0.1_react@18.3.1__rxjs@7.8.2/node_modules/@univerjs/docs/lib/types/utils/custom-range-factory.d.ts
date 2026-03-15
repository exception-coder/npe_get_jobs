import { CustomRangeType, DocumentDataModel, IAccessor, IAddCustomRangeTextXParam, IDocumentBody, IMutationInfo, ITextRangeParam, Nullable, TextX } from '@univerjs/core';
import { IRichTextEditingMutationParams } from '../commands/mutations/core-editing.mutation';
interface IAddCustomRangeParam extends IAddCustomRangeTextXParam {
    unitId: string;
}
/**
 * @deprecated This is a duplication from docs-ui to avoid making too much breaking changes.
 */
export declare function getRichTextEditPath(docDataModel: DocumentDataModel, segmentId?: string): string[];
export declare function addCustomRangeFactory(accessor: IAccessor, param: IAddCustomRangeParam, body: IDocumentBody): false | IMutationInfo<IRichTextEditingMutationParams>;
interface IAddCustomRangeFactoryParam {
    rangeId: string;
    rangeType: CustomRangeType;
    wholeEntity?: boolean;
    properties?: Record<string, any>;
    unitId: string;
    selections?: ITextRangeParam[];
}
export declare function addCustomRangeBySelectionFactory(accessor: IAccessor, param: IAddCustomRangeFactoryParam): false | (IMutationInfo<IRichTextEditingMutationParams> & {
    textX: TextX;
});
export interface IDeleteCustomRangeFactoryParams {
    rangeId: string;
    segmentId?: string;
    unitId: string;
    insert?: Nullable<IDocumentBody>;
}
export declare function deleteCustomRangeFactory(accessor: IAccessor, params: IDeleteCustomRangeFactoryParams): false | IMutationInfo<IRichTextEditingMutationParams>;
export {};
