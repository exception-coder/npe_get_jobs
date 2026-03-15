import { DateFunction } from './date';
import { FUNCTION_NAMES_DATE } from './function-names';
import { NetworkdaysIntl } from './networkdays-intl';
import { WorkdayIntl } from './workday-intl';
export declare const functionDate: ((FUNCTION_NAMES_DATE | typeof DateFunction)[] | (FUNCTION_NAMES_DATE | typeof NetworkdaysIntl)[] | (FUNCTION_NAMES_DATE | typeof WorkdayIntl)[])[];
