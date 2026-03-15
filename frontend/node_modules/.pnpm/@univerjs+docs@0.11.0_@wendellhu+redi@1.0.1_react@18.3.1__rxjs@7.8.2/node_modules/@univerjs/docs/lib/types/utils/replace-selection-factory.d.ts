import { DocumentDataModel, IAccessor, IDocumentBody, IMutationInfo, ITextRangeParam, TextX } from '@univerjs/core';
import { ITextRangeWithStyle } from '@univerjs/engine-render';
import { IRichTextEditingMutationParams } from '../commands/mutations/core-editing.mutation';
export interface IReplaceSelectionFactoryParams {
    unitId: string;
    /**
     * selection to be replaced, if not provided, use the current selection.
     */
    selection?: ITextRangeParam;
    /** Body to be inserted at the given position. */
    body: IDocumentBody;
    /**
     * Text ranges to be replaced.
     */
    textRanges?: ITextRangeWithStyle[];
    doc?: DocumentDataModel;
}
export declare function replaceSelectionFactory(accessor: IAccessor, params: IReplaceSelectionFactoryParams): false | (IMutationInfo<IRichTextEditingMutationParams> & {
    textX: TextX;
});
