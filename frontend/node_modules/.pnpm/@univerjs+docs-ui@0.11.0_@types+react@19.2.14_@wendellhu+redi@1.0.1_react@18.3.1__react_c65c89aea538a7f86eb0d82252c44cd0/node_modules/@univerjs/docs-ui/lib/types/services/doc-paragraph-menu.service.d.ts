import { DocumentDataModel, IParagraphRange, Disposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IMutiPageParagraphBound, DocEventManagerService } from './doc-event-manager.service';
import { DocSelectionManagerService, DocSkeletonManagerService } from '@univerjs/docs';
import { DocCanvasPopManagerService } from './doc-popup-manager.service';
import { DocFloatMenuService } from './float-menu.service';
export declare class DocParagraphMenuService extends Disposable implements IRenderModule {
    private _context;
    private _docSelectionManagerService;
    private _docEventManagerService;
    private _docPopupManagerService;
    private _docSkeletonManagerService;
    private _floatMenuService;
    private _paragrahMenu;
    get activeParagraph(): IParagraphRange | undefined;
    constructor(_context: IRenderContext<DocumentDataModel>, _docSelectionManagerService: DocSelectionManagerService, _docEventManagerService: DocEventManagerService, _docPopupManagerService: DocCanvasPopManagerService, _docSkeletonManagerService: DocSkeletonManagerService, _floatMenuService: DocFloatMenuService);
    private _isCursorInActiveParagraph;
    setParagraphMenuActive(active: boolean): void;
    private _init;
    showParagraphMenu(paragraph: IMutiPageParagraphBound): void;
    hideParagraphMenu(force?: boolean): void;
}
