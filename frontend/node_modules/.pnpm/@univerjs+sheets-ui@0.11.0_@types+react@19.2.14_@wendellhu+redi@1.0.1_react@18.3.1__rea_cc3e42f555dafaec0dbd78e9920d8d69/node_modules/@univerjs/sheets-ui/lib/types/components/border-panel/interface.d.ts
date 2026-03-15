import { IBorderInfo } from '@univerjs/sheets';
import { ICustomComponentProps } from '@univerjs/ui';
export declare const BORDER_PANEL_COMPONENT = "UI_PLUGIN_SHEETS_BORDER_PANEL_COMPONENT";
export interface IBorderPanelProps extends ICustomComponentProps<IBorderInfo> {
}
export declare const BORDER_LINE_CHILDREN: {
    label: string;
    icon: string;
    value: string;
}[];
