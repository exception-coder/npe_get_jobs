import { ITextStyle, Nullable, Disposable, IUniverInstanceService } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class DocMenuStyleService extends Disposable {
    private readonly _textSelectionManagerService;
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    private _cacheStyle;
    constructor(_textSelectionManagerService: DocSelectionManagerService, _univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService);
    private _init;
    private _listenDocRangeChange;
    getStyleCache(): Nullable<ITextStyle>;
    getDefaultStyle(): ITextStyle;
    setStyleCache(style: ITextStyle): void;
    private _clearStyleCache;
}
