import { ListValidator } from './list-validator';
export declare class ListMultipleValidator extends ListValidator {
    id: string;
    title: string;
    readonly offsetFormulaByRange = false;
    skipDefaultFontRender: () => boolean;
}
