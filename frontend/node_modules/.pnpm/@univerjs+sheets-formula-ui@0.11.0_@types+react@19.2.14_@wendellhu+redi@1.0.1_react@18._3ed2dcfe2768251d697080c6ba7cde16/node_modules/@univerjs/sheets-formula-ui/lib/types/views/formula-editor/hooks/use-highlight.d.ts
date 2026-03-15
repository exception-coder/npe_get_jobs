import { ITextRange, ITextRun, Workbook, IUniverInstanceService, ThemeService } from '@univerjs/core';
import { Editor } from '@univerjs/docs-ui';
import { ISequenceNode } from '@univerjs/engine-formula';
import { ISelectionWithStyle, SheetsSelectionsService } from '@univerjs/sheets';
import { INode } from './use-formula-token';
import { IDescriptionService } from '@univerjs/sheets-formula';
import { SheetSkeletonManagerService } from '@univerjs/sheets-ui';
import { RefSelectionsRenderService } from '../../../services/render-services/ref-selections.render-service';
export interface IRefSelection {
    refIndex: number;
    themeColor: string;
    token: string;
    startIndex: number;
    endIndex: number;
    index: number;
}
export declare function calcHighlightRanges(opts: {
    unitId: string;
    subUnitId: string;
    currentWorkbook: Workbook;
    refSelections: IRefSelection[];
    editor: Editor | undefined;
    refSelectionsService: SheetsSelectionsService;
    refSelectionsRenderService: RefSelectionsRenderService | undefined;
    sheetSkeletonManagerService: SheetSkeletonManagerService | undefined;
    themeService: ThemeService;
    univerInstanceService: IUniverInstanceService;
}): ISelectionWithStyle[] | undefined;
/**
 * @param {string} unitId
 * @param {string} subUnitId 打开面板的时候传入的 sheetId
 * @param {IRefSelection[]} refSelections
 */
export declare function useSheetHighlight(unitId: string, subUnitId: string): (refSelections: IRefSelection[], editor?: Editor) => void;
export declare function useDocHight(_leadingCharacter?: string): (editor: Editor, sequenceNodes: INode[], isNeedResetSelection?: any, newSelections?: ITextRange[]) => IRefSelection[];
interface IColorMap {
    formulaRefColors: string[];
    numberColor: string;
    stringColor: string;
    plainTextColor: string;
}
export declare function useColor(): IColorMap;
export declare function buildTextRuns(descriptionService: IDescriptionService, colorMap: IColorMap, sequenceNodes: Array<ISequenceNode | string>): {
    textRuns: ITextRun[];
    refSelections: IRefSelection[];
};
export {};
