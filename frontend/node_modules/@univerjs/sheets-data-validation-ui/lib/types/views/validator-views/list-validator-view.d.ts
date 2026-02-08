import { Nullable, DataValidationType } from '@univerjs/core';
import { IBaseDataValidationWidget, DataValidatorDropdownType } from '@univerjs/data-validation';
import { BaseSheetDataValidatorView } from './sheet-validator-view';
export declare class ListValidatorView extends BaseSheetDataValidatorView {
    id: DataValidationType;
    canvasRender: Nullable<IBaseDataValidationWidget>;
    dropdownType: DataValidatorDropdownType | undefined;
    optionsInput: string | undefined;
    formulaInput: string;
}
