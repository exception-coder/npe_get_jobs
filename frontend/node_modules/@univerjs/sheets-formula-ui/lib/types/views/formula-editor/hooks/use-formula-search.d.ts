import { Editor } from '@univerjs/docs-ui';
import { ISearchItemWithType } from '@univerjs/sheets-formula';
import { INode } from './use-formula-token';
import { FunctionType } from '@univerjs/engine-formula';
export declare const useFormulaSearch: (isNeed: boolean, nodes?: INode[], editor?: Editor) => {
    searchList: ISearchItemWithType[];
    searchText: string;
    handlerFormulaReplace: (formulaName: string, functionType: FunctionType) => {
        text: string;
        offset: number;
    } | undefined;
    reset: () => void;
};
