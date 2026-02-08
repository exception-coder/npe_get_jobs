import { Disposable, IConfigService } from '@univerjs/core';
import { SheetRangeThemeModel, SheetRangeThemeService } from '@univerjs/sheets';
import { TableManager } from '../model/table-manager';
export declare class SheetsTableThemeController extends Disposable {
    private _tableManager;
    private _sheetRangeThemeService;
    private _sheetRangeThemeModel;
    private readonly _configService;
    private _defaultThemeIndex;
    private _allThemes;
    constructor(_tableManager: TableManager, _sheetRangeThemeService: SheetRangeThemeService, _sheetRangeThemeModel: SheetRangeThemeModel, _configService: IConfigService);
    registerTableChangeEvent(): void;
    private _initUserTableTheme;
    private _initDefaultTableTheme;
    dispose(): void;
}
