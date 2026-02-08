import { Nullable, Injector } from '@univerjs/core';
import { DataValidatorDropdownType, IBaseDataValidationWidget } from '@univerjs/data-validation';
/**
 * This is the base class for all sheet data validator views. It is used to extend {@link BaseDataValidator}.
 */
export declare abstract class BaseSheetDataValidatorView {
    protected readonly injector: Injector;
    canvasRender: Nullable<IBaseDataValidationWidget>;
    dropdownType: DataValidatorDropdownType | undefined;
    optionsInput: string | undefined;
    abstract id: string;
    formulaInput: string;
    constructor(injector: Injector);
}
