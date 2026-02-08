import { DocumentDataModel, Disposable, ICommandService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { IRenderContext, IRenderModule, IRenderManagerService } from '@univerjs/engine-render';
import { DocSkeletonManagerService } from '@univerjs/docs';
import { ComponentManager } from '@univerjs/ui';
import { IEditorService } from '../services/editor/editor-manager.service';
import { DocSelectionRenderService } from '../services/selection/doc-selection-render.service';
export declare enum HeaderFooterType {
    FIRST_PAGE_HEADER = 0,
    FIRST_PAGE_FOOTER = 1,
    DEFAULT_HEADER = 2,
    DEFAULT_FOOTER = 3,
    EVEN_PAGE_HEADER = 4,
    EVEN_PAGE_FOOTER = 5
}
export declare class DocHeaderFooterController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _commandService;
    private readonly _editorService;
    private readonly _instanceSrv;
    private readonly _renderManagerService;
    private readonly _docSkeletonManagerService;
    private readonly _docSelectionRenderService;
    private readonly _localeService;
    private readonly _componentManager;
    private _loadedMap;
    constructor(_context: IRenderContext<DocumentDataModel>, _commandService: ICommandService, _editorService: IEditorService, _instanceSrv: IUniverInstanceService, _renderManagerService: IRenderManagerService, _docSkeletonManagerService: DocSkeletonManagerService, _docSelectionRenderService: DocSelectionRenderService, _localeService: LocaleService, _componentManager: ComponentManager);
    private _initialize;
    dispose(): void;
    private _listenSwitchMode;
    private _initCustomComponents;
    private _init;
    private _initialMain;
    private _getTransformCoordForDocumentOffset;
    private _drawHeaderFooterLabel;
    private _isEditorReadOnly;
    private _isTraditionalMode;
}
