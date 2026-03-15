import { DOC_RANGE_TYPE, Nullable, RANGE_DIRECTION } from '@univerjs/core';
import { INodePosition, ITextSelectionStyle } from '@univerjs/engine-render';
export interface IDocRange {
    rangeType: DOC_RANGE_TYPE;
    anchorNodePosition?: Nullable<INodePosition>;
    focusNodePosition?: Nullable<INodePosition>;
    style: ITextSelectionStyle;
    get startOffset(): Nullable<number>;
    get endOffset(): Nullable<number>;
    get collapsed(): boolean;
    get startNodePosition(): Nullable<INodePosition>;
    get endNodePosition(): Nullable<INodePosition>;
    get direction(): RANGE_DIRECTION;
    get segmentId(): string;
    get segmentPage(): number;
    isActive(): boolean;
    dispose(): void;
    refresh(): void;
}
