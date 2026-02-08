import { ISheetHyperLink, SheetHyperLinkType } from '@univerjs/sheets-hyper-link';
import { default as React } from 'react';
import { Disposable } from '@univerjs/core';
export interface ICustomHyperLinkFormProps {
    linkId: string;
    payload: string;
    display: string;
    setByPayload: React.MutableRefObject<boolean>;
    showError: boolean;
    setDisplay: (display: string) => void;
    setPayload: (payload: string) => void;
}
export interface ICustomHyperLinkView {
    type: string;
    option: {
        label: string;
        value: string;
    };
    Form: React.FC<ICustomHyperLinkFormProps>;
    convert: (link: ISheetHyperLink) => {
        display: string;
        payload: string;
        type: string;
    };
    match: (link: ISheetHyperLink) => boolean;
}
export declare class SheetsHyperLinkSidePanelService extends Disposable {
    private _customHyperLinks;
    isBuiltInLinkType(type: SheetHyperLinkType | string): boolean;
    getOptions(): {
        label: string;
        value: string;
    }[];
    findCustomHyperLink(link: ISheetHyperLink): ICustomHyperLinkView | undefined;
    registerCustomHyperLink(customHyperLink: ICustomHyperLinkView): void;
    getCustomHyperLink(type: string): ICustomHyperLinkView | undefined;
    removeCustomHyperLink(type: string): void;
    dispose(): void;
}
