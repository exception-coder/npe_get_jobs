import { DataValidationType } from '@univerjs/core';
import { CheckboxRender } from '../widgets/checkbox-widget';
import { BaseSheetDataValidatorView } from './sheet-validator-view';
export declare class CheckboxValidatorView extends BaseSheetDataValidatorView {
    id: DataValidationType;
    canvasRender: CheckboxRender;
    formulaInput: string;
}
