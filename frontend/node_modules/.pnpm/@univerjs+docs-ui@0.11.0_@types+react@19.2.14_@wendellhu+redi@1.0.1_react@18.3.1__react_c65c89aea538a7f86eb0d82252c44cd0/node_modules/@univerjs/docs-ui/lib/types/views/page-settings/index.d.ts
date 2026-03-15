import { IConfirmChildrenProps } from '@univerjs/ui';
import { PageOrientType } from '@univerjs/core';
export interface IPageSettingsProps {
    onClose: () => void;
    onConfirm: (settings: IPageSettings) => void;
}
export interface IPageSettings {
    paperSize: string;
    orientation: PageOrientType;
    margins: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
}
export declare function PageSettings(props: IConfirmChildrenProps): import("react/jsx-runtime").JSX.Element;
export declare const PAGE_SETTING_COMPONENT_ID = "docs.component.page-setting";
