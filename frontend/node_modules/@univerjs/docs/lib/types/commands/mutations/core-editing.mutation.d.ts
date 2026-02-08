import { IMutation, IMutationCommonParams, JSONXActions, Nullable } from '@univerjs/core';
import { ITextRangeWithStyle } from '@univerjs/engine-render';
export interface IRichTextEditingMutationParams extends IMutationCommonParams {
    unitId: string;
    actions: JSONXActions;
    textRanges: Nullable<ITextRangeWithStyle[]>;
    segmentId?: string;
    prevTextRanges?: Nullable<ITextRangeWithStyle[]>;
    noNeedSetTextRange?: boolean;
    isCompositionEnd?: boolean;
    noHistory?: boolean;
    debounce?: boolean;
    options?: {
        [key: string]: boolean;
    };
    isSync?: boolean;
    isEditing?: boolean;
    syncer?: string;
}
/**
 * The core mutator to change rich text actions. The execution result would be undo mutation params. Could be directly
 * send to undo redo service (will be used by the triggering command).
 */
export declare const RichTextEditingMutation: IMutation<IRichTextEditingMutationParams, IRichTextEditingMutationParams>;
