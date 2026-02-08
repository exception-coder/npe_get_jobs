import { Workbook, ICommandService, IConfigService, RxDisposable } from '@univerjs/core';
import { IRenderContext, IRenderModule, ISummaryMetric } from '@univerjs/engine-render';
import { ITelemetryService } from '@univerjs/telemetry';
import { SheetSkeletonManagerService } from '../../services/sheet-skeleton-manager.service';
import { SheetsRenderService } from '../../services/sheets-render.service';
export interface ITelemetryData {
    unitId: string;
    sheetId: string;
    FPS: ISummaryMetric;
    frameTime: ISummaryMetric;
    elapsedTimeToStart: number;
}
export declare class SheetRenderController extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _configService;
    private readonly _sheetSkeletonManagerService;
    private readonly _sheetRenderService;
    private readonly _commandService;
    private readonly _telemetryService?;
    private _renderMetric$;
    renderMetric$: import('rxjs').Observable<ITelemetryData>;
    constructor(_context: IRenderContext<Workbook>, _configService: IConfigService, _sheetSkeletonManagerService: SheetSkeletonManagerService, _sheetRenderService: SheetsRenderService, _commandService: ICommandService, _telemetryService?: ITelemetryService | undefined);
    private _addNewRender;
    private _renderFrameTimeMetric;
    private _renderFrameTags;
    private _afterRenderMetric$;
    private _initRenderMetricSubscriber;
    /**
     * Send render metric to telemetry service
     * @param frameInfoList
     */
    private _captureRenderMetric;
    private _addComponent;
    private _initViewports;
    /**
     *
     * initViewport & wheel event
     * +-----------------+--------------------+-------------------+
     * |  VIEW_LEFT_TOP  |  VIEW_COLUMN_LEFT  | VIEW_COLUMN_RIGHT |
     * +-----------------+--------------------+-------------------+
     * |  VIEW_ROW_TOP   | VIEW_MAIN_LEFT_TOP |   VIEW_MAIN_TOP   |
     * +-----------------+--------------------+-------------------+
     * | VIEW_ROW_BOTTOM |   VIEW_MAIN_LEFT   |     VIEW_MAIN     |
     * +-----------------+--------------------+-------------------+
     */
    private _addViewport;
    private _initRerenderScheduler;
    private _initCommandListener;
    private _markUnitDirty;
    /**
     * cellValue data structure:
     * {[row]: { [col]: value}}
     * @param cellValue
     * @returns IRange
     */
    private _cellValueToRange;
    private _rangeToBounds;
    private _markViewportDirty;
    private _spreadsheetViewports;
}
