import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class DocMoveCursorController extends Disposable {
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    private readonly _textSelectionManagerService;
    private readonly _commandService;
    private _onInputSubscription;
    constructor(_univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService, _textSelectionManagerService: DocSelectionManagerService, _commandService: ICommandService);
    dispose(): void;
    private _commandExecutedListener;
    private _handleShiftMoveSelection;
    private _handleMoveCursor;
    private _getTopOrBottomPosition;
    private _getGlyphLeftOffsetInLine;
    private _matchPositionByLeftOffset;
    private _getNextOrPrevLine;
    private _scrollToFocusNodePosition;
    private _getDocObject;
}
