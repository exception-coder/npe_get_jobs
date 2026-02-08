import { DataValidationType } from '@univerjs/core';
import { DataValidatorDropdownType } from '@univerjs/data-validation';
import { DropdownMultipleWidget } from '../widgets/dropdown-multiple-widget';
import { BaseSheetDataValidatorView } from './sheet-validator-view';
export declare class ListMultipleValidatorView extends BaseSheetDataValidatorView {
    id: DataValidationType;
    canvasRender: DropdownMultipleWidget;
    dropdownType: DataValidatorDropdownType | undefined;
}
