import { ICustomComponentProps } from '../../services/menu/menu';
export interface IFontFamilyProps extends ICustomComponentProps<string> {
    value: string;
}
export declare const FONT_FAMILY_COMPONENT = "UI_FONT_FAMILY_COMPONENT";
export interface IFontFamilyItemProps extends ICustomComponentProps<string> {
    value: string;
}
export declare const FONT_FAMILY_ITEM_COMPONENT = "UI_FONT_FAMILY_ITEM_COMPONENT";
export declare const FONT_FAMILY_LIST: {
    value: string;
}[];
