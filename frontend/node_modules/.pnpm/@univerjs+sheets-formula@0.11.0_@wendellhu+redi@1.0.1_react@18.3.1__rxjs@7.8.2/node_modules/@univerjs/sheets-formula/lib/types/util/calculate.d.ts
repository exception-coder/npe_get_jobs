import { Injector } from '@univerjs/core';
import { ISheetData } from '@univerjs/engine-formula';
export declare function calculateFormula(inject: Injector, formulaString: string, unitId: string, sheetData: ISheetData): string | number | boolean | (string | number | boolean | null)[][];
