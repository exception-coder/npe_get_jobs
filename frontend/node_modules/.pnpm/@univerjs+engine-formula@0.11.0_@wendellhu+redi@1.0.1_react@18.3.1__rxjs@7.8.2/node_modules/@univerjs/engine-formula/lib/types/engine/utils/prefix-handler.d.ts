import { Nullable } from '@univerjs/core';
import { IFunctionService } from '../../services/function.service';
import { IFormulaRuntimeService } from '../../services/runtime.service';
import { PrefixNode } from '../ast-node/prefix-node';
export declare function prefixHandler(tokenTrimParam: string, functionService: IFunctionService, runtimeService: IFormulaRuntimeService): {
    tokenTrim: string;
    minusPrefixNode: Nullable<PrefixNode>;
    atPrefixNode: Nullable<PrefixNode>;
};
