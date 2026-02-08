import { CustomDecorationType, IAccessor, IMutationInfo } from '@univerjs/core';
import { IRichTextEditingMutationParams } from '@univerjs/docs';
import { ITextRangeWithStyle } from '@univerjs/engine-render';
interface IAddCustomDecorationParam {
    unitId: string;
    ranges: ITextRangeWithStyle[];
    segmentId?: string;
    id: string;
    type: CustomDecorationType;
}
export declare function addCustomDecorationFactory(param: IAddCustomDecorationParam): IMutationInfo<IRichTextEditingMutationParams>;
interface IAddCustomDecorationFactoryParam {
    segmentId?: string;
    id: string;
    type: CustomDecorationType;
    unitId?: string;
}
export declare function addCustomDecorationBySelectionFactory(accessor: IAccessor, param: IAddCustomDecorationFactoryParam): false | IMutationInfo<IRichTextEditingMutationParams>;
export interface IDeleteCustomRangeParam {
    unitId: string;
    id: string;
    segmentId?: string;
}
export declare function deleteCustomDecorationFactory(accessor: IAccessor, params: IDeleteCustomRangeParam): false | IMutationInfo<IRichTextEditingMutationParams>;
export {};
