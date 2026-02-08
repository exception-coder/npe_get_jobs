import { Theme } from '@univerjs/themes';
import { Disposable } from '@univerjs/core';
export declare class ThemeSwitcherService extends Disposable {
    private _styleSheetId;
    injectThemeToHead(theme: Theme): void;
    dispose(): void;
}
