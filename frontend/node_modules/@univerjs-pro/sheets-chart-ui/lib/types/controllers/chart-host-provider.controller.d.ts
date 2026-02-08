import { ChartModelService } from '@univerjs-pro/sheets-chart';
import { Disposable } from '@univerjs/core';
import { IChartHostProviderService } from '../services/sheets-chart-host-provider.service';
export declare class ChartHostProviderController extends Disposable {
    private readonly _chartHostProviderService;
    private readonly _chartModelService;
    constructor(_chartHostProviderService: IChartHostProviderService, _chartModelService: ChartModelService);
    private _init;
}
