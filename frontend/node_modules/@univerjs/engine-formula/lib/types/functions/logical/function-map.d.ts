import { And } from './and';
import { FUNCTION_NAMES_LOGICAL } from './function-names';
import { Iferror } from './iferror';
import { Makearray } from './makearray';
export declare const functionLogical: ((FUNCTION_NAMES_LOGICAL | typeof And)[] | (FUNCTION_NAMES_LOGICAL | typeof Iferror)[] | (FUNCTION_NAMES_LOGICAL | typeof Makearray)[])[];
