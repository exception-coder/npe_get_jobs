import { ICellData, Disposable, IUniverInstanceService } from '@univerjs/core';
export interface IHyperlinkEngineFormulaService {
    generateCellValue(url: string, label: string): ICellData;
}
/**
 *
 */
export declare class HyperlinkEngineFormulaService extends Disposable implements IHyperlinkEngineFormulaService {
    private readonly _univerInstanceService;
    constructor(_univerInstanceService: IUniverInstanceService);
    generateCellValue(url: string, label: string): ICellData;
}
export declare const IHyperlinkEngineFormulaService: import('@wendellhu/redi').IdentifierDecorator<HyperlinkEngineFormulaService>;
