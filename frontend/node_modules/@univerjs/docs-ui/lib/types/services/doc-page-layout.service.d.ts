import { DocumentDataModel, Disposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
export declare class DocPageLayoutService extends Disposable implements IRenderModule {
    private _context;
    constructor(_context: IRenderContext<DocumentDataModel>);
    calculatePagePosition(): this | undefined;
}
