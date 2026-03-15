import { Nullable } from '@univerjs/core';
import { Editor } from '@univerjs/docs-ui';
import { ISequenceNode } from '@univerjs/engine-formula';
export declare function useRangesHighlight(editor: Nullable<Editor>, focusing: boolean, unitId: string, subUnitId: string): {
    sequenceNodes: (string | ISequenceNode)[];
};
