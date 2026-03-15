import { Concat } from './concat';
import { Concatenate } from './concatenate';
import { FUNCTION_NAMES_TEXT } from './function-names';
import { Textafter } from './textafter';
import { Textbefore } from './textbefore';
import { Textsplit } from './textsplit';
export declare const functionText: ((FUNCTION_NAMES_TEXT | typeof Concat)[] | (FUNCTION_NAMES_TEXT | typeof Concatenate)[] | (FUNCTION_NAMES_TEXT | typeof Textafter)[] | (FUNCTION_NAMES_TEXT | typeof Textbefore)[] | (FUNCTION_NAMES_TEXT | typeof Textsplit)[])[];
