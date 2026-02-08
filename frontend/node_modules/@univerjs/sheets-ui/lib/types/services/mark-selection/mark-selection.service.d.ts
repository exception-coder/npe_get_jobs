import { ISelectionWithStyle } from '@univerjs/sheets';
import { Disposable, IUniverInstanceService, ThemeService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SelectionControl } from '../selection/selection-control';
export interface IMarkSelectionService {
    addShape(selection: ISelectionWithStyle, exits?: string[], zIndex?: number): string | null;
    addShapeWithNoFresh(selection: ISelectionWithStyle, exits?: string[], zIndex?: number): string | null;
    removeShape(id: string): void;
    removeAllShapes(): void;
    refreshShapes(): void;
    getShapeMap(): Map<string, IMarkSelectionInfo>;
}
interface IMarkSelectionInfo {
    unitId: string;
    subUnitId: string;
    selection: ISelectionWithStyle;
    zIndex: number;
    control: SelectionControl | null;
    exits: string[];
}
export declare const IMarkSelectionService: import('@wendellhu/redi').IdentifierDecorator<IMarkSelectionService>;
/**
 * For copy and cut selection.
 * also for selection when hover on conditional format items in the cf panel on the right.
 * NOT FOR hovering on panel in data validation.
 */
export declare class MarkSelectionService extends Disposable implements IMarkSelectionService {
    private readonly _currentService;
    private readonly _renderManagerService;
    private readonly _themeService;
    private _shapeMap;
    constructor(_currentService: IUniverInstanceService, _renderManagerService: IRenderManagerService, _themeService: ThemeService);
    addShape(selection: ISelectionWithStyle, exits?: string[], zIndex?: number): string | null;
    addShapeWithNoFresh(selection: ISelectionWithStyle, exits?: string[], zIndex?: number): string | null;
    refreshShapes(): void;
    getShapeMap(): Map<string, IMarkSelectionInfo>;
    removeShape(id: string): void;
    removeAllShapes(): void;
}
export {};
