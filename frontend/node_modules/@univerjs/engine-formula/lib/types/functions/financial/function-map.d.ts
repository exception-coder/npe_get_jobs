import { FUNCTION_NAMES_FINANCIAL } from './function-names';
import { Accrint } from './accrint';
import { Npv } from './npv';
import { Oddfprice } from './oddfprice';
import { Oddfyield } from './oddfyield';
import { Oddlprice } from './oddlprice';
import { Oddlyield } from './oddlyield';
import { Price } from './price';
export declare const functionFinancial: ((FUNCTION_NAMES_FINANCIAL | typeof Accrint)[] | (FUNCTION_NAMES_FINANCIAL | typeof Npv)[] | (FUNCTION_NAMES_FINANCIAL | typeof Oddfprice)[] | (FUNCTION_NAMES_FINANCIAL | typeof Oddfyield)[] | (FUNCTION_NAMES_FINANCIAL | typeof Oddlprice)[] | (FUNCTION_NAMES_FINANCIAL | typeof Oddlyield)[] | (FUNCTION_NAMES_FINANCIAL | typeof Price)[])[];
