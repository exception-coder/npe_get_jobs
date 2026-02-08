import { IParagraph } from '@univerjs/core';
import { ISectionBreakConfig } from '../../../../../basics/interfaces';
import { DataStreamTreeNode } from '../../../view-model/data-stream-tree-node';
import { DocumentViewModel } from '../../../view-model/document-view-model';
export declare function otherHandler(index: number, charArray: string, viewModel: DocumentViewModel, paragraphNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig, paragraph: IParagraph): {
    step: number;
    glyphGroup: import('../../../../..').IDocumentSkeletonGlyph[];
};
export declare function ArabicHandler(index: number, charArray: string, viewModel: DocumentViewModel, paragraphNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig, paragraph: IParagraph): {
    step: number;
    glyphGroup: import('../../../../..').IDocumentSkeletonGlyph[];
};
export declare function emojiHandler(index: number, charArray: string, viewModel: DocumentViewModel, paragraphNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig, paragraph: IParagraph): {
    step: number;
    glyphGroup: import('../../../../..').IDocumentSkeletonGlyph[];
};
export declare function TibetanHandler(index: number, charArray: string, viewModel: DocumentViewModel, paragraphNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig, paragraph: IParagraph): {
    step: number;
    glyphGroup: import('../../../../..').IDocumentSkeletonGlyph[];
};
