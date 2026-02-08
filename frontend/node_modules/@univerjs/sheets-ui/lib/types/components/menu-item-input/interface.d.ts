import { ICustomComponentProps } from '@univerjs/ui';
export declare const MENU_ITEM_INPUT_COMPONENT = "UI_PLUGIN_SHEETS_MENU_ITEM_INPUT_COMPONENT";
export interface IMenuItemInputProps extends ICustomComponentProps<string> {
    prefix: string;
    suffix: string;
    min?: number;
    max?: number;
}
