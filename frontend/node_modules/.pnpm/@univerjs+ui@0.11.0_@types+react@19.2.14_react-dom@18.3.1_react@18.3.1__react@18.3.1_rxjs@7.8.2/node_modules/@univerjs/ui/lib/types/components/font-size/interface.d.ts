import { Observable } from 'rxjs';
import { ICustomComponentProps } from '../../services/menu/menu';
import { NamedStyleType } from '@univerjs/core';
export interface IFontSizeProps extends ICustomComponentProps<string> {
    value: string;
    min: number;
    max: number;
    onChange: (value: string) => void;
    disabled$?: Observable<boolean>;
}
export declare const FONT_SIZE_LIST: {
    label: string;
    value: number;
}[];
export declare const HEADING_LIST: {
    label: string;
    value: NamedStyleType;
}[];
export declare const FONT_SIZE_COMPONENT = "UI_FONT_SIZE_COMPONENT";
