import { IAccessor, IMutationInfo, Disposable, Injector, IUniverInstanceService, ObjectMatrix } from '@univerjs/core';
import { ICellDataWithSpanInfo, IDiscreteRange, ISheetDiscreteRangeLocation, COPY_TYPE, ISheetClipboardService } from '@univerjs/sheets-ui';
import { FormulaDataModel, LexerTreeBuilder } from '@univerjs/engine-formula';
export declare const DEFAULT_PASTE_FORMULA = "default-paste-formula";
export declare class FormulaClipboardController extends Disposable {
    private readonly _currentUniverSheet;
    private readonly _lexerTreeBuilder;
    private readonly _sheetClipboardService;
    private readonly _injector;
    private readonly _formulaDataModel;
    constructor(_currentUniverSheet: IUniverInstanceService, _lexerTreeBuilder: LexerTreeBuilder, _sheetClipboardService: ISheetClipboardService, _injector: Injector, _formulaDataModel: FormulaDataModel);
    private _initialize;
    private _registerClipboardHook;
    private _pasteFormulaHook;
    private _pasteWithFormulaHook;
    private _onPasteCells;
}
export declare function getSetCellFormulaMutations(unitId: string, subUnitId: string, range: IDiscreteRange, matrix: ObjectMatrix<ICellDataWithSpanInfo>, accessor: IAccessor, copyInfo: {
    copyType: COPY_TYPE;
    copyRange?: IDiscreteRange;
    pasteType: string;
}, lexerTreeBuilder: LexerTreeBuilder, formulaDataModel: FormulaDataModel, isSpecialPaste: boolean | undefined, pasteFrom: ISheetDiscreteRangeLocation | null): {
    undos: IMutationInfo<object>[];
    redos: IMutationInfo<object>[];
};
