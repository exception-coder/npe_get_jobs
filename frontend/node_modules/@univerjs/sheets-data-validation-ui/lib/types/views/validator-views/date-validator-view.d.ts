import { DataValidationType } from '@univerjs/core';
import { DataValidatorDropdownType } from '@univerjs/data-validation';
import { BaseSheetDataValidatorView } from './sheet-validator-view';
export declare class DateValidatorView extends BaseSheetDataValidatorView {
    id: DataValidationType;
    formulaInput: string;
    optionsInput: string;
    dropdownType: DataValidatorDropdownType;
}
