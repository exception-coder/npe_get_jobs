import { Nullable, Disposable, IUniverInstanceService } from '@univerjs/core';
import { IDragEvent, IRenderManagerService } from '@univerjs/engine-render';
import { IHoverCellPosition } from './hover-manager.service';
export interface IDragCellPosition extends IHoverCellPosition {
    dataTransfer: DataTransfer;
}
export declare class DragManagerService extends Disposable {
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    private _currentCell$;
    currentCell$: import('rxjs').Observable<Nullable<IDragCellPosition>>;
    private _endCell$;
    endCell$: import('rxjs').Observable<Nullable<IDragCellPosition>>;
    constructor(_univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService);
    dispose(): void;
    private _initCellDisposableListener;
    private _calcActiveCell;
    onDragOver(evt: IDragEvent): void;
    onDrop(evt: IDragEvent): void;
}
