import { IAccessor, ICommand } from '@univerjs/core';
export declare const shouldDisableAddLink: (accessor: IAccessor) => boolean;
export interface IShowDocHyperLinkEditPopupOperationParams {
    link?: {
        unitId: string;
        linkId: string;
        segmentId?: string;
        segmentPage?: number;
        startIndex: number;
        endIndex: number;
    };
}
export declare const ShowDocHyperLinkEditPopupOperation: ICommand<IShowDocHyperLinkEditPopupOperationParams>;
export interface IShowDocHyperLinkInfoPopupOperationParams {
    linkId: string;
    segmentId?: string;
    unitId: string;
    segmentPage?: number;
    startIndex: number;
    endIndex: number;
}
export declare const ToggleDocHyperLinkInfoPopupOperation: ICommand<IShowDocHyperLinkInfoPopupOperationParams>;
export declare const ClickDocHyperLinkOperation: ICommand<{
    unitId: string;
    linkId: string;
    segmentId?: string;
}>;
