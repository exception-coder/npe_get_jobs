import { LocaleService } from '@univerjs/core';
import { IFunctionInfo, IFunctionParam } from '@univerjs/engine-formula';
export declare function getFunctionTypeValues(enumObj: any, localeService: LocaleService): Array<{
    label: string;
    value: string;
}>;
export declare function getFunctionName(item: IFunctionInfo, localeService: LocaleService): string;
export declare function generateParam(param: IFunctionParam): string | undefined;
