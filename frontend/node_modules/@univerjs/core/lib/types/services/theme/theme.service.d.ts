import { Observable } from 'rxjs';
import { defaultTheme } from '@univerjs/themes';
import { Disposable } from '../../shared/lifecycle';
export type Theme = typeof defaultTheme;
export declare class ThemeService extends Disposable {
    private readonly _darkMode$;
    readonly darkMode$: Observable<boolean>;
    get darkMode(): boolean;
    private _validColorCache;
    private _currentTheme;
    private readonly _currentTheme$;
    readonly currentTheme$: Observable<Theme>;
    constructor();
    /**
     * Whether the given color is a valid theme color.
     * A valid theme color can be a direct key in the theme object or a nested key with a dot notation.
     * For example:
     * @param {string} color - The color string to validate.
     * @returns {boolean} True if the color is valid, false otherwise.
     * @example
     * isValidThemeColor('primary.600'); // true
     * isValidThemeColor('blue'); // false
     */
    isValidThemeColor(color: string): boolean;
    /**
     * Get the current theme.
     * @returns The current theme.
     */
    getCurrentTheme(): Theme;
    /**
     * Set the current theme.
     * @param theme - The new theme to set.
     */
    setTheme(theme: Theme): void;
    /**
     * Get the current theme as an observable.
     * @param {boolean} darkMode - Whether to set the theme in dark mode.
     */
    setDarkMode(darkMode: boolean): void;
    /**
     * Get a color from the current theme.
     * @param {string} color - The color key to retrieve.
     * @returns {string} The color value from the current theme.
     */
    getColorFromTheme(color: string): string;
}
