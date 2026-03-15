import { ICellLinkContent, ISheetHyperLink } from '../types/interfaces/i-hyper-link';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
type LinkUpdate = {
    type: 'add';
    payload: ISheetHyperLink;
    unitId: string;
    subUnitId: string;
    silent?: boolean;
} | {
    type: 'remove';
    payload: ISheetHyperLink;
    unitId: string;
    subUnitId: string;
    silent?: boolean;
} | {
    type: 'update';
    unitId: string;
    subUnitId: string;
    payload: ICellLinkContent;
    id: string;
    silent?: boolean;
} | {
    type: 'updateRef';
    unitId: string;
    subUnitId: string;
    id: string;
    payload: {
        row: number;
        column: number;
    };
    silent?: boolean;
} | {
    type: 'unload';
    unitId: string;
    unitLinks: {
        unitId: string;
        subUnitId: string;
        links: ISheetHyperLink[];
    }[];
    silent?: boolean;
};
export declare class HyperLinkModel extends Disposable {
    private readonly _univerInstanceService;
    private _linkUpdate$;
    linkUpdate$: import('rxjs').Observable<LinkUpdate>;
    private _linkMap;
    private _linkPositionMap;
    constructor(_univerInstanceService: IUniverInstanceService);
    private _ensureMap;
    addHyperLink(unitId: string, subUnitId: string, link: ISheetHyperLink): boolean;
    updateHyperLink(unitId: string, subUnitId: string, id: string, payload: Partial<ICellLinkContent>, silent?: boolean): boolean;
    updateHyperLinkRef(unitId: string, subUnitId: string, id: string, payload: {
        row: number;
        column: number;
    }, silent?: boolean): boolean;
    removeHyperLink(unitId: string, subUnitId: string, id: string): boolean;
    getHyperLink(unitId: string, subUnitId: string, id: string): import('@univerjs/core').Nullable<ISheetHyperLink>;
    getHyperLinkByLocation(unitId: string, subUnitId: string, row: number, column: number): ISheetHyperLink | undefined;
    getHyperLinkByLocationSync(unitId: string, subUnitId: string, row: number, column: number): {
        display: string;
        id: string;
        row: number;
        column: number;
        payload: string;
    } | undefined;
    getSubUnit(unitId: string, subUnitId: string): ISheetHyperLink[];
    getUnit(unitId: string): {
        unitId: string;
        subUnitId: string;
        links: ISheetHyperLink[];
    }[];
    deleteUnit(unitId: string): void;
    getAll(): {
        unitId: string;
        subUnitId: string;
        links: ISheetHyperLink[];
    }[][];
}
export {};
