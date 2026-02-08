import { DocumentDataModel, IDocumentData, ICommandService, Injector, IResourceManagerService, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
/**
 * @hideconstructor
 */
export declare class FDocument {
    private readonly _documentDataModel;
    protected readonly _injector: Injector;
    private readonly _univerInstanceService;
    private readonly _commandService;
    private readonly _resourceManagerService;
    private readonly _renderManagerService;
    readonly id: string;
    constructor(_documentDataModel: DocumentDataModel, _injector: Injector, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _resourceManagerService: IResourceManagerService, _renderManagerService: IRenderManagerService);
    getId(): string;
    getName(): string;
    getSnapshot(): IDocumentData;
    undo(): Promise<boolean>;
    redo(): Promise<boolean>;
    /**
     * Adds the specified text to the end of this text region.
     * @param text - The text to be added to the end of this text region.
     */
    appendText(text: string): Promise<boolean>;
    /**
     * Sets the selection to a specified text range in the document.
     * @param startOffset - The starting offset of the selection in the document.
     * @param endOffset - The ending offset of the selection in the document.
     * @example
     * ```typescript
     * document.setSelection(10, 20);
     * ```
     */
    setSelection(startOffset: number, endOffset: number): void;
}
