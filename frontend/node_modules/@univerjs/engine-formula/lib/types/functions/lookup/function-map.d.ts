import { Choose } from './choose';
import { FUNCTION_NAMES_LOOKUP } from './function-names';
import { Hstack } from './hstack';
import { Indirect } from './indirect';
import { Lookup } from './lookup';
import { Match } from './match';
export declare const functionLookup: ((FUNCTION_NAMES_LOOKUP | typeof Choose)[] | (FUNCTION_NAMES_LOOKUP | typeof Hstack)[] | (FUNCTION_NAMES_LOOKUP | typeof Indirect)[] | (FUNCTION_NAMES_LOOKUP | typeof Lookup)[] | (FUNCTION_NAMES_LOOKUP | typeof Match)[])[];
