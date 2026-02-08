import { ICommandInfo, Nullable, Workbook } from '@univerjs/core';
import { IFormulaReferenceMoveParam } from './ref-range-formula';
export declare function getReferenceMoveParams(workbook: Workbook, command: ICommandInfo): Nullable<IFormulaReferenceMoveParam>;
