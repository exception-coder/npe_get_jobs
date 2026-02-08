import { IDisposable, Disposable } from '@univerjs/core';
import { ISheetLocation } from '@univerjs/sheets';
import { ICellDropdown } from '../views/dropdown';
import { IRenderManagerService } from '@univerjs/engine-render';
import { ComponentManager, IZenZoneService } from '@univerjs/ui';
import { SheetCanvasPopManagerService } from './canvas-pop-manager.service';
export type IDropdownParam = {
    location: ISheetLocation;
    onHide?: () => void;
    closeOnOutSide?: boolean;
} & ICellDropdown;
export interface IDropdownComponentProps {
    componentKey: string;
    location: ISheetLocation;
    hideFn: () => void;
}
export interface ISheetCellDropdownManagerService {
    showDropdown(param: IDropdownParam): IDisposable;
}
export declare const ISheetCellDropdownManagerService: import('@wendellhu/redi').IdentifierDecorator<ISheetCellDropdownManagerService>;
export declare class SheetCellDropdownManagerService extends Disposable implements ISheetCellDropdownManagerService {
    private readonly _canvasPopupManagerService;
    private readonly _zenZoneService;
    private readonly _renderManagerService;
    private readonly _componentManager;
    constructor(_canvasPopupManagerService: SheetCanvasPopManagerService, _zenZoneService: IZenZoneService, _renderManagerService: IRenderManagerService, _componentManager: ComponentManager);
    showDropdown(param: IDropdownParam): IDisposable;
}
