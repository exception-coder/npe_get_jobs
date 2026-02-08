import { Editor } from '@univerjs/docs-ui';
import { IFunctionInfo } from '@univerjs/engine-formula';
export declare const useFormulaDescribe: (isNeed: boolean, formulaText: string, editor?: Editor) => {
    functionInfo: IFunctionInfo | undefined;
    paramIndex: number;
    reset: () => void;
};
