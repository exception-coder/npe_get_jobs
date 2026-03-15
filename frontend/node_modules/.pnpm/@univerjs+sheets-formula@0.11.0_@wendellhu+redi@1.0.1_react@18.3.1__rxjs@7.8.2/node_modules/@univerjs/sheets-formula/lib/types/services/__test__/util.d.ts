import { Dependency, IWorkbookData, Workbook, Injector, Univer } from '@univerjs/core';
export interface ITestBed {
    univer: Univer;
    get: Injector['get'];
    sheet: Workbook;
}
export declare function createCommandTestBed(workbookData?: IWorkbookData, dependencies?: Dependency[]): ITestBed;
