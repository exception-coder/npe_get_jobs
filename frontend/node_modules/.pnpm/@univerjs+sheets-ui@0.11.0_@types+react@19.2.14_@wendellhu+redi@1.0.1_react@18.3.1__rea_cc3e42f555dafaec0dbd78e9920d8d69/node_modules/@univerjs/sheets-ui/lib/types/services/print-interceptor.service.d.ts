import { DisposableCollection, IRange, Worksheet, Disposable, InterceptorManager } from '@univerjs/core';
import { Engine, Scene, Spreadsheet, SpreadsheetSkeleton } from '@univerjs/engine-render';
interface ISheetPrintContext {
    unitId: string;
    subUnitId: string;
    scene: Scene;
    engine: Engine;
    root: HTMLElement;
    worksheet: Worksheet;
    skeleton: SpreadsheetSkeleton;
    offset: {
        offsetX: number;
        offsetY: number;
    };
}
interface ISheetPrintComponentContext extends ISheetPrintContext {
    spreadsheet: Spreadsheet;
}
export declare class SheetPrintInterceptorService extends Disposable {
    private _printComponentMap;
    readonly interceptor: InterceptorManager<{
        PRINTING_RANGE: import('@univerjs/core').IInterceptor<IRange, {
            unitId: string;
            subUnitId: string;
        }>;
        PRINTING_COMPONENT_COLLECT: import('@univerjs/core').IInterceptor<undefined, ISheetPrintComponentContext>;
        PRINTING_DOM_COLLECT: import('@univerjs/core').IInterceptor<DisposableCollection, ISheetPrintContext>;
    }>;
    constructor();
    registerPrintComponent(componentKey: string, printingComponentKey: string): void;
    getPrintComponent(componentKey: string): string | undefined;
}
export {};
