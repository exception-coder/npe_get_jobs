import { IFontLocale } from './sheets/util';
import { LocaleService } from './services/locale/locale.service';
import { Disposable } from './shared/lifecycle';
export declare class Skeleton extends Disposable {
    protected readonly _localeService: LocaleService;
    private _fontLocale;
    private _dirty;
    constructor(_localeService: LocaleService);
    get dirty(): boolean;
    getFontLocale(): IFontLocale;
    makeDirty(state: boolean): void;
    dispose(): void;
    private _localeInitial;
}
