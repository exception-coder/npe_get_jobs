import { IDisposable, ISelection, ITextRangeParam, Nullable, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { KeyCode } from '@univerjs/ui';
export interface IShortcutExperienceSearch {
    unitId: string;
    sheetId: string;
    keycode: KeyCode;
}
export interface IShortcutExperienceParam extends IShortcutExperienceSearch {
    selection?: ISelection;
    textSelection?: ITextRangeParam;
}
/**
 * This service is prepared for shortcut experience optimization,
 * including the combined use of enter and tab, the highlighting experience of formulas in the editor, and so on.
 *
 */
export declare class ShortcutExperienceService implements IDisposable {
    private readonly _univerInstanceService;
    private readonly _localeService;
    private _current;
    private _shortcutParam;
    constructor(_univerInstanceService: IUniverInstanceService, _localeService: LocaleService);
    dispose(): void;
    getCurrentBySearch(searchParm: Nullable<IShortcutExperienceSearch>): Nullable<IShortcutExperienceParam>;
    getCurrent(): Nullable<IShortcutExperienceParam>;
    addOrUpdate(insertParam: IShortcutExperienceParam): Nullable<IShortcutExperienceParam>;
    remove(searchParm: Nullable<IShortcutExperienceSearch>): Nullable<IShortcutExperienceParam>;
    private _getCurrentBySearch;
}
