/**
 * Register locale data for a language so for use when formatting.
 * Any partial set of properties may be returned to have the defaults used where properties are missing.
 *
 * @param localeSettings A collection of settings for a locale.
 * @param [localeSettings.ampm=["AM","PM"]] How AM and PM should be presented.
 * @param [localeSettings.bool=["TRUE", "FALSE"]] How TRUE and FALSE should be presented.
 * @param [localeSettings.ddd=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]] Shortened day names (e.g. `Wed`)
 * @param [localeSettings.dddd=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]] Long day names (e.g. `Wednesday`)
 * @param [localeSettings.decimal="."] Symbol used to separate integers from fractions (usually `.`)
 * @param [localeSettings.exponent="E"] Symbol used to indicate an exponent (usually `E`)
 * @param [localeSettings.group="\u00a0"] Symbol used as a grouping separator (`1,000,000` uses `,`)
 * @param [localeSettings.infinity="∞"] Symbol used to indicate infinite values (`∞`)
 * @param [localeSettings.mmm=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]] Short month names for the Gregorian calendar (e.g. `Nov`)
 * @param [localeSettings.mmm6=["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."]] Short month names for the Islamic calendar (e.g. `Raj.`)
 * @param [localeSettings.mmmm=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]] Long month names for the Gregorian calendar (e.g. `November`)
 * @param [localeSettings.mmmm6=["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]] Long month names for the Islamic calendar (e.g. `Rajab`)
 * @param [localeSettings.nan="NaN"] Symbol used to indicate NaN values (`NaN`)
 * @param [localeSettings.negative="-"] Symbol used to indicate positive numbers (usually `-`)
 * @param [localeSettings.percent="%"] Symbol used to indicate a percentage (usually `%`)
 * @param [localeSettings.positive="+"] Symbol used to indicate positive numbers (usually `+`)
 * @param [localeSettings.preferMDY=false] Is the prefered date format month first (12/31/2025) or day first (31/12/2025)
 * @param l4e A string BCP 47 tag of the locale.
 * @returns - A full collection of settings for a locale
 */
export declare function addLocale(localeSettings: {
    /** How AM and PM should be presented. */
    ampm?: Array<string>;
    /** How TRUE and FALSE should be presented. */
    bool?: Array<string>;
    /** Shortened day names (e.g. `Wed`) */
    ddd?: Array<string>;
    /** Long day names (e.g. `Wednesday`) */
    dddd?: Array<string>;
    /** Symbol used to separate integers from fractions (usually `.`) */
    decimal?: string;
    /** Symbol used to indicate an exponent (usually `E`) */
    exponent?: string;
    /** Symbol used as a grouping separator (`1,000,000` uses `,`) */
    group?: string;
    /** Symbol used to indicate infinite values (`∞`) */
    infinity?: string;
    /** Short month names for the Gregorian calendar (e.g. `Nov`) */
    mmm?: Array<string>;
    /** Short month names for the Islamic calendar (e.g. `Raj.`) */
    mmm6?: Array<string>;
    /** Long month names for the Gregorian calendar (e.g. `November`) */
    mmmm?: Array<string>;
    /** Long month names for the Islamic calendar (e.g. `Rajab`) */
    mmmm6?: Array<string>;
    /** Symbol used to indicate NaN values (`NaN`) */
    nan?: string;
    /** Symbol used to indicate positive numbers (usually `-`) */
    negative?: string;
    /** Symbol used to indicate a percentage (usually `%`) */
    percent?: string;
    /** Symbol used to indicate positive numbers (usually `+`) */
    positive?: string;
    /** Is the prefered date format month first (12/31/2025) or day first (31/12/2025) */
    preferMDY?: boolean;
}, l4e: string): LocaleData;

/**
 * Convert a spreadsheet serial date to an array of date parts.
 * Accurate to a second.
 * ```js
 * // output as [ Y, M, D, h, m, s ]
 * dateFromSerial(28627); // [ 1978, 5, 17, 0, 0, 0 ]
 * ````
 *
 * @param serialDate The date
 * @param [options={}] The options
 * @param [options.leap1900=true] Simulate the Lotus 1-2-3 [1900 leap year bug](https://docs.microsoft.com/en-us/office/troubleshoot/excel/wrongly-assumes-1900-is-leap-year).
 * @returns returns an array of date parts
 */
export declare function dateFromSerial(serialDate: number, options?: {
    /** Simulate the Lotus 1-2-3 [1900 leap year bug](https://docs.microsoft.com/en-us/office/troubleshoot/excel/wrongly-assumes-1900-is-leap-year). */
    leap1900?: boolean;
}): Array<number>;

/**
 * Convert a native JavaScript Date, or array to an spreadsheet serial date.
 * Returns a serial date number if input was a Date object or an array of
 * numbers, a null.
 * ```js
 * // input as Date
 * dateToSerial(new Date(1978, 5, 17)); // 28627
 * // input as [ Y, M, D, h, m, s ]
 * dateToSerial([ 1978, 5, 17 ]); // 28627
 * // other input
 * dateToSerial("something else"); // null
 * ````
 *
 * @param date The date
 * @param [options={}] Options
 * @param [options.ignoreTimezone=false] Normally time zone will be taken into account. This makes the conversion to
  serial date ignore the timezone offset.
 * @returns The date as a spreadsheet serial date, or null.
 */
export declare function dateToSerial(date: (Date | Array<number>), options?: {
    /**
     * Normally time zone will be taken into account. This makes the conversion to
     *   serial date ignore the timezone offset.
     */
    ignoreTimezone?: boolean;
}): (number | null);

/**
 * Formats a value as a string and returns the result.
 * - Dates are normalized to spreadsheet style serial dates and then formatted.
 * - Booleans are emitted as uppercase "TRUE" or "FALSE".
 * - Null and Undefined will return an empty string "".
 * - Any non number values will be stringified and passed through the text section of the format pattern.
 * - NaNs and infinites will use the corresponding strings from the active locale.
 *
 * @param pattern A format pattern in the ECMA-376 number format.
 * @param value The value to format.
 * @param [options={}] Options
 * @param [options.bigintErrorNumber=false] Should the formatter switch to a plain string number format when trying to
   format a bigint that is out of bounds?
 * @param [options.dateErrorNumber=true] Should the formatter switch to a General number format when trying to
   format a date that is out of bounds?
 * @param [options.dateErrorThrows=false] Should the formatter throw an error when trying to format a date that is
   out of bounds?
 * @param [options.dateSpanLarge=true] Extends the allowed range of dates from Excel bounds (1900–9999) to
   Google Sheet bounds (0–99999).
 * @param [options.fillChar=''] When the formatter encounters `*` it normally emits nothing instead of the
   `*` and the next character (like Excel TEXT function does). Setting this
   to a character will make the formatter emit that followed by the next one.
 * @param [options.ignoreTimezone=false] Normally when date objects are used with the formatter, time zone is taken
   into account. This makes the formatter ignore the timezone offset.
 * @param [options.invalid="######"] The string emitted when no-throw mode fails to parse a pattern.
 * @param [options.leap1900=true] Simulate the Lotus 1-2-3 [1900 leap year bug](https://docs.microsoft.com/en-us/office/troubleshoot/excel/wrongly-assumes-1900-is-leap-year).
   It is a requirement in the Ecma OOXML specification so it is on by default.
 * @param [options.locale=""] A BCP 47 string tag. Locale default is english with a `\u00a0`
   grouping symbol (see [addLocale](#addLocale))
 * @param [options.nbsp=false] By default the output will use a regular space, but in many cases you
   may desire a non-breaking-space instead.
 * @param [options.overflow="######"] The string emitted when a formatter fails to format a date that is out
   of bounds.
 * @param [options.skipChar=''] When the formatter encounters `_` it normally emits a single space instead
   of the `_` and the next character (like Excel TEXT function does). Setting
   this to a character will make the formatter emit that followed by the next
   one.
 * @param [options.throws=true] Should the formatter throw an error if a provided pattern is invalid.
   If false, a formatter will be constructed which instead outputs an error
   string (see _invalid_ in this table).
 * @returns A formatted value
 */
export declare function format(pattern: string, value: any, options?: {
    /**
     * Should the formatter switch to a plain string number format when trying to
     *    format a bigint that is out of bounds?
     */
    bigintErrorNumber?: boolean;
    /**
     * Should the formatter switch to a General number format when trying to
     *    format a date that is out of bounds?
     */
    dateErrorNumber?: boolean;
    /**
     * Should the formatter throw an error when trying to format a date that is
     *    out of bounds?
     */
    dateErrorThrows?: boolean;
    /**
     * Extends the allowed range of dates from Excel bounds (1900–9999) to
     *    Google Sheet bounds (0–99999).
     */
    dateSpanLarge?: boolean;
    /**
     * When the formatter encounters `*` it normally emits nothing instead of the
     *    `*` and the next character (like Excel TEXT function does). Setting this
     *    to a character will make the formatter emit that followed by the next one.
     */
    fillChar?: boolean;
    /**
     * Normally when date objects are used with the formatter, time zone is taken
     *    into account. This makes the formatter ignore the timezone offset.
     */
    ignoreTimezone?: boolean;
    /** The string emitted when no-throw mode fails to parse a pattern. */
    invalid?: string;
    /**
     * Simulate the Lotus 1-2-3 [1900 leap year bug](https://docs.microsoft.com/en-us/office/troubleshoot/excel/wrongly-assumes-1900-is-leap-year).
     *    It is a requirement in the Ecma OOXML specification so it is on by default.
     */
    leap1900?: boolean;
    /**
     * A BCP 47 string tag. Locale default is english with a `\u00a0`
     *    grouping symbol (see [addLocale](#addLocale))
     */
    locale?: string;
    /**
     * By default the output will use a regular space, but in many cases you
     *    may desire a non-breaking-space instead.
     */
    nbsp?: boolean;
    /**
     * The string emitted when a formatter fails to format a date that is out
     *    of bounds.
     */
    overflow?: string;
    /**
     * When the formatter encounters `_` it normally emits a single space instead
     *    of the `_` and the next character (like Excel TEXT function does). Setting
     *    this to a character will make the formatter emit that followed by the next
     *    one.
     */
    skipChar?: boolean;
    /**
     * Should the formatter throw an error if a provided pattern is invalid.
     *    If false, a formatter will be constructed which instead outputs an error
     *    string (see _invalid_ in this table).
     */
    throws?: boolean;
}): string;

/**
 * Find the color appropriate to a value as dictated by a format pattern.
 * If the pattern defines colors, this function will emit the color appropriate
 * to the value. If no colors were specified this function returns `undefined`.
 * ```js
 * const color = formatColor("[green]#,##0;[red]-#,##0", -10);
 * console.log(color); // "red"
 * const color = formatColor("[green]#,##0;-#,##0", -10);
 * console.log(color); // null
 * ```
 *
 * @param pattern A format pattern in the ECMA-376 number format.
 * @param value The value to format.
 * @param [options={}] Options
 * @param [options.ignoreTimezone=false] Normally when date objects are used with the formatter, time zone is taken
   into account. This makes the formatter ignore the timezone offset.
 * @param [options.indexColors=true] When indexed color modifiers are used (`[Color 1]`) the formatter will
   convert the index into the corresponding hex color of the default palette.
   When this option is set to false, the number will instead by emitted
   allowing you to index against a custom palette.
 * @param [options.throws=true] Should the formatter throw an error if a provided pattern is invalid.
   If false, a formatter will be constructed which instead outputs an error
   string (see _invalid_ in this table).
 * @returns A string color value as described by the pattern or a number if the
   indexColors option has been set to false.
 */
export declare function formatColor(pattern: string, value: any, options?: {
    /**
     * Normally when date objects are used with the formatter, time zone is taken
     *    into account. This makes the formatter ignore the timezone offset.
     */
    ignoreTimezone?: boolean;
    /**
     * When indexed color modifiers are used (`[Color 1]`) the formatter will
     *    convert the index into the corresponding hex color of the default palette.
     *    When this option is set to false, the number will instead by emitted
     *    allowing you to index against a custom palette.
     */
    indexColors?: boolean;
    /**
     * Should the formatter throw an error if a provided pattern is invalid.
     *    If false, a formatter will be constructed which instead outputs an error
     *    string (see _invalid_ in this table).
     */
    throws?: boolean;
}): (string | number | null);

/**
 * Gets information about date codes use in a format string.
 *
 * @param pattern A format pattern in the ECMA-376 number format.
 * @returns An object of format date properties.
 */
export declare function getFormatDateInfo(pattern: string): FormatDateInfo;

/**
 * Returns an object detailing the properties and internals of a format parsed
 * format pattern.
 *
 * @param pattern A format pattern in the ECMA-376 number format.
 * @param [options={}] Options
 * @param [options.currency] Limit the patterns identified as currency to those that use the give string.
  If nothing is provided, patterns will be tagged as currency if one of the
  following currency symbols is used: ¤$£¥֏؋৳฿៛₡₦₩₪₫€₭₮₱₲₴₸₹₺₼₽₾₿
 * @returns An object of format properties.
 */
export declare function getFormatInfo(pattern: string, options?: {
    /**
     * Limit the patterns identified as currency to those that use the give string.
     *   If nothing is provided, patterns will be tagged as currency if one of the
     *   following currency symbols is used: ¤$£¥֏؋৳฿៛₡₦₩₪₫€₭₮₱₲₴₸₹₺₼₽₾₿
     */
    currency?: string;
}): FormatInfo;

/**
 * Used by the formatter to pull a locate from its registered locales. If
 * subtag isn't available but the base language is, the base language is used.
 * So if `en-CA` is not found, the formatter tries to find `en` else it
 * returns a `null`.
 *
 * @param locale A BCP 47 string tag of the locale, or an Excel locale code.
 * @returns - An object of format date properties.
 */
export declare function getLocale(locale: string): (LocaleData | null);

/**
 * Determine if a given format pattern is a date pattern.
 * The pattern is considered a date pattern if any of its sections contain a
 * date symbol (such as `Y` or `H`). Each section is restricted to be
 * _either_ a number or date format.
 *
 * @param pattern A format pattern in the ECMA-376 number format.
 * @returns True if the specified pattern is date pattern, False otherwise.
 */
export declare function isDateFormat(pattern: string): boolean;

/**
 * Determine if a given format pattern is a percentage pattern.
 * The pattern is considered a percentage pattern if any of its sections
 * contains an unescaped percentage symbol.
 *
 * @param pattern A format pattern in the ECMA-376 number format.
 * @returns True if the specified pattern is date pattern, False otherwise.
 */
export declare function isPercentFormat(pattern: string): boolean;

/**
 * Determine if a given format pattern is a text only pattern.
 * The pattern is considered text only if its definition is composed of a single
 * section that includes that text symbol (`@`).
 * For example `@` or `@" USD"` are text patterns but `#;@` is not.
 *
 * @param pattern A format pattern in the ECMA-376 number format.
 * @returns True if the specified pattern is date pattern, False otherwise.
 */
export declare function isTextFormat(pattern: string): boolean;

/**
 * Determine if a given format pattern is valid.
 *
 * @param pattern A format pattern in the ECMA-376 number format.
 * @returns True if the specified pattern is valid, False otherwise.
 */
export declare function isValidFormat(pattern: string): boolean;

/**
 * Parse a string input and return its boolean value. If the input was not
 * recognized or valid, the function returns a `null`, for valid input it
 * returns an object with one property:
 * - `v`: the parsed value.
 *
 * @param value The supposed boolean to parse
 * @param [options={}] Options
 * @param [options.locale=""] A BCP 47 string tag. Locale default is english with a `\u00a0`
   grouping symbol (see [addLocale](#addLocale))
 * @returns An object of the parsed value and a corresponding format string
 */
export declare function parseBool(value: string, options?: {
    /**
     * A BCP 47 string tag. Locale default is english with a `\u00a0`
     *    grouping symbol (see [addLocale](#addLocale))
     */
    locale?: string;
}): (ParseData | null);

/**
 * Parse a date or datetime string input and return its value and format. If
 * the input was not recognized or valid, the function returns a `null`, for
 * valid input it returns an object with two properties:
 * - `v`: the parsed value.
 * - `z`: the number format of the input (if applicable).
 *
 * @param value The date to parse
 * @param [options={}] Options
 * @param [options.locale=""] A BCP 47 string tag. Locale default is english with a `\u00a0`
   grouping symbol (see [addLocale](#addLocale))
 * @returns An object of the parsed value and a corresponding format string
 */
export declare function parseDate(value: string, options?: {
    /**
     * A BCP 47 string tag. Locale default is english with a `\u00a0`
     *    grouping symbol (see [addLocale](#addLocale))
     */
    locale?: string;
}): (ParseData | null);

/**
 * Parse a regular IETF BCP 47 locale tag and emit an object of its parts.
 * Irregular tags and subtags are not supported.
 *
 * @param locale A BCP 47 string tag of the locale.
 * @returns - An object describing the locale.
 */
export declare function parseLocale(locale: string): LocaleToken;

/**
 * Parse a numeric string input and return its value and format. If the input
 * was not recognized or valid, the function returns a `null`, for valid input
 * it returns an object with two properties:
 * * `v`: the parsed value.
 * * `z`: the number format of the input (if applicable).
 *
 * @param value The number to parse
 * @param [options={}] Options
 * @param [options.locale=""] A BCP 47 string tag. Locale default is english with a `\u00a0`
   grouping symbol (see [addLocale](#addLocale))
 * @returns An object of the parsed value and a corresponding format string
 */
export declare function parseNumber(value: string, options?: {
    /**
     * A BCP 47 string tag. Locale default is english with a `\u00a0`
     *    grouping symbol (see [addLocale](#addLocale))
     */
    locale?: string;
}): (ParseData | null);

/**
 * Parse a time string input and return its value and format. If the input was
 * not recognized or valid, the function returns a `null`, for valid input it
 * returns an object with two properties:
 * - `v`: the parsed value.
 * - `z`: the number format of the input (if applicable).
 *
 * @param value The date to parse
 * @param [options={}] Options
 * @param [options.locale=""] A BCP 47 string tag. Locale default is english with a `\u00a0`
   grouping symbol (see [addLocale](#addLocale))
 * @returns An object of the parsed value and a corresponding format string
 */
export declare function parseTime(value: string, options?: {
    /**
     * A BCP 47 string tag. Locale default is english with a `\u00a0`
     *    grouping symbol (see [addLocale](#addLocale))
     */
    locale?: string;
}): (ParseData | null);

/**
 * Attempt to parse a "spreadsheet input" string input and return its value and
 * format. If the input was not recognized or valid, the function returns a
 * `null`, for valid input it returns an object with two properties:
 * - `v`: The parsed value. For dates, this will be an Excel style serial date.
 * - `z`: (Optionally) the number format string of the input. This property will
 *        not be present if it amounts to the `General` format.
 * `parseValue()` recognizes a wide range of dates and date-times, times,
 * numbers, and booleans. Some examples:
 * ```js
 * // basic number
 * parseValue("-123");// { v: -123 }
 * // formatted number
 * parseValue("$1,234"); // { v: 1234, z: "$#,##0" }
 * // a percent
 * parseValue("12.3%"); // { v: 0.123, z: "0.00%" }
 * // a date
 * parseValue("07 October 1984"); // { v: 30962, z: 'dd mmmm yyyy' }
 * // an ISO formatted date-time
 * parseValue("1984-09-10 11:12:13.1234"); // { v: 30935.46681855787, z: "yyyy-mm-dd hh:mm:ss" }
 * // a boolean
 * parseValue("false"); // { v: false }
 * ```
 * The formatting string outputted may not correspond exactly to the input.
 * Rather, is it composed of certain elements which the input controls. This is
 * comparable to how Microsoft Excel and Google Sheets parse pasted input. Some
 * things you may expect:
 * - Whitespace is ignored.
 * - Decimal fractions are always represented by `.00` regardless of how many
 *   digits were shown in the input.
 * - Negatives denoted by parentheses [`(1,234)`] will not include the
 *   parentheses in the format string (the value will still by negative.)
 * - All "scientific notation" returns the same format: `0.00E+00`.
 * Internally the parser calls, `parseNumber`, `parseDate`,
 * `parseTime` and `parseBool`. They work in the same way except
 * with a more limited scope. You may want those function if you are limiting
 * input to a smaller scope.
 * Be warned that the parser do not (yet) take locale into account so all input
 * is assumed to be in "en-US". This means that `1,234.5` will parse, but
 * `1.234,5` will not. Similarly, the order of date parts will be US centric.
 * This may change in the future so be careful what options you pass the
 * functions.
 *
 * @param value The value to parse
 * @param [options={}] Options
 * @param [options.locale=""] A BCP 47 string tag. Locale default is english with a `\u00a0`
   grouping symbol (see [addLocale](#addLocale))
 * @returns An object of the parsed value and a corresponding format string
 */
export declare function parseValue(value: string, options?: {
    /**
     * A BCP 47 string tag. Locale default is english with a `\u00a0`
     *    grouping symbol (see [addLocale](#addLocale))
     */
    locale?: string;
}): (ParseData | null);

/**
 * Return a number rounded to the specified amount of places. This is the
 * rounding function used internally by the formatter (symmetric arithmetic
 * rounding).
 *
 * @param number The number to round.
 * @param [places=0] The number of decimals to round to.
 * @returns A rounded number.
 */
export declare function round(number: number, places?: number): number;

/**
 * Breaks a format pattern string into a list of tokens.
 * The returned output will be an array of objects representing the tokens:
 * ```js
 * [
 *   { type: 'zero', value: '0', raw: '0' },
 *   { type: 'point', value: '.', raw: '.' },
 *   { type: 'zero', value: '0', raw: '0' },
 *   { type: 'percent', value: '%', raw: '%' }
 * ]
 * ```
 * Token types may be found as an Object as the
 * [`tokenTypes` export]{@link tokenTypes} of the package.
 *
 * @param pattern The format pattern
 * @returns a list of tokens
 */
export declare function tokenize(pattern: string): Array<FormatToken>;

/** A dictionary of the types used to identify token variants. */
export declare const tokenTypes: Readonly<{
    /** AM/PM operator (`AM/PM`, `A/P`) */
    AMPM: string;
    /** Semicolon operator indicating a break between format sections (`;`) */
    BREAK: string;
    /** Calendar modifier (`B2`) */
    CALENDAR: string;
    /** Single non-operator character (`m`) */
    CHAR: string;
    /** Color modifier (`[Black]`, `[color 5]`) */
    COLOR: string;
    /** Plain non-operator comma (`,`) */
    COMMA: string;
    /** Condition modifier for a section (`[>=10]`) */
    CONDITION: string;
    /** Date-time operator (`mmmm`, `YY`) */
    DATETIME: string;
    /** Number display modifier (`[DBNum23]`) */
    DBNUM: string;
    /** A digit between 1 and 9 (`3`) */
    DIGIT: string;
    /** Time duration (`[ss]`) */
    DURATION: string;
    /** Unidentifiable or illegal character (`Ň`) */
    ERROR: string;
    /** Escaped character (`\E`) */
    ESCAPED: string;
    /** Exponent operator (`E+`) */
    EXP: string;
    /** Fill with char operator and operand (`*_`) */
    FILL: string;
    /** General format operator (`General`) */
    GENERAL: string;
    /** Number grouping operator (`,`) */
    GROUP: string;
    /** Hash operator (digit if available) (`#`) */
    HASH: string;
    /** Locale modifier (`[$-1E020404]`) */
    LOCALE: string;
    /** Minus sign (`-`) */
    MINUS: string;
    /** An unidentified modifier (`[Schwarz]`) */
    MODIFIER: string;
    /** Number display modifier (`[NatNum3]`) */
    NATNUM: string;
    /** Parenthesis character (`)`) */
    PAREN: string;
    /** Percent operator (`%`) */
    PERCENT: string;
    /** Plus sign (`+`) */
    PLUS: string;
    /** Decimal point operator (`.`) */
    POINT: string;
    /** Question mark operator (digit or space if not available) (`?`) */
    QMARK: string;
    /** Scaling operator (`,`) */
    SCALE: string;
    /** Skip with char operator and operand (`*_`) */
    SKIP: string;
    /** Slash operator (`/`) */
    SLASH: string;
    /** Space (` `) */
    SPACE: string;
    /** Quoted string (`"days"`) */
    STRING: string;
    /** Text output operator (`@`) */
    TEXT: string;
    /** Zero operator (digit or zero if not available) (`0`) */
    ZERO: string;
}>;

/** An object detailing which date specifiers are used in a format pattern. */
export declare type FormatDateInfo = {
    /** 12 if the pattern uses AM/PM clock else 24. */
    clockType: (12 | 24);
    /** true if the pattern uses day of the month else false. */
    day: boolean;
    /** true if the pattern uses hours else false. */
    hours: boolean;
    /** true if the pattern uses minutes else false. */
    minutes: boolean;
    /** true if the pattern uses months else false. */
    month: boolean;
    /** true if the pattern uses seconds else false. */
    seconds: boolean;
    /** true if the pattern uses years else false. */
    year: boolean;
};

/** An object of information properties based on a format pattern. */
export declare type FormatInfo = {
    /**
     * Corresponds to Excel's `CELL("format")` functionality. It should match
     *     Excel's esoteric behaviour fairly well.
     *     [See Microsoft's documentation.](https://support.microsoft.com/en-us/office/cell-function-51bd39a5-f338-4dbe-a33f-955d67c2b2cf)
     */
    code: string;
    /**
     * 1 if the format uses color on the negative portion of the string, else
     *     a 0. This replicates Excel's `CELL("color")` functionality.
     */
    color: (0 | 1);
    /**
     * 1 if the positive portion of the format uses a thousands separator,
     *     else a 0.
     */
    grouped: (0 | 1);
    /** Corresponds to the output from isDateFormat. */
    isDate: boolean;
    /** Corresponds to the output from isPercentFormat. */
    isPercent: boolean;
    /** Corresponds to the output from isTextFormat. */
    isText: boolean;
    /**
     * An arbirarty number that represents the format's specificity if you want
     *     to compare one to another. Integer comparisons roughly match Excel's
     *     resolutions when it determines which format wins out.
     */
    level: number;
    /** The maximum number of decimals this format will emit. */
    maxDecimals: number;
    /**
     * 1 if the positive portion of the number format contains an open
     *     parenthesis, else a 0. This is replicates Excel's `CELL("parentheses")`
     *     functionality.
     */
    parentheses: (0 | 1);
    /** The multiplier used when formatting the number (100 for percentages). */
    scale: number;
    /** A string identifier for the type of the number formatter. */
    type: ("currency" | "date" | "datetime" | "error" | "fraction" | "general" | "grouped" | "number" | "percent" | "scientific" | "text" | "time");
};

export declare type FormatToken = {
    /** Raw token source. */
    raw: string;
    /** Token type. */
    type: string;
    /** The value of the token, cleaned of extra characters. */
    value: any;
};

/** An object of properties used by a formatter when printing a number in a certain locale. */
export declare type LocaleData = {
    /** How AM and PM should be presented */
    ampm: Array<string>;
    /** How TRUE and FALSE should be presented */
    bool: Array<string>;
    /** Shortened day names (`Wed`) */
    ddd: Array<string>;
    /** Long day names (`Wednesday`) */
    dddd: Array<string>;
    /** Symbol used to separate integers from fractions (usually `.`) */
    decimal: string;
    /** Symbol used to indicate an exponent (usually `E`) */
    exponent: string;
    /** Symbol used as a grouping separator (`1,000,000` uses `,`) */
    group: string;
    /** Symbol used to indicate infinite values (`∞`) */
    infinity: string;
    /** Short month names for the Gregorian calendar (`Nov`) */
    mmm: Array<string>;
    /** Short month names for the Islamic calendar (`Raj.`) */
    mmm6: Array<string>;
    /** Long month names for the Gregorian calendar (`November`) */
    mmmm: Array<string>;
    /** Long month names for the Islamic calendar (`Rajab`) */
    mmmm6: Array<string>;
    /** Symbol used to indicate NaN values (`NaN`) */
    nan: string;
    /** Symbol used to indicate positive numbers (usually `-`) */
    negative: string;
    /** Symbol used to indicate a percentage (usually `%`) */
    percent: string;
    /** Symbol used to indicate positive numbers (usually `+`) */
    positive: string;
    /** Is the prefered date format month first (12/31/2025) or day first (31/12/2025) */
    preferMDY: boolean;
};

/** An object of properties for a locale tag. */
export declare type LocaleToken = {
    /** The basic tag such as `zh_CN` or `fi` */
    lang: string;
    /** The language section (`zh` for `zh_CN`) */
    language: string;
    /** The territory section (`CN` for `zh_CN`) */
    territory: string;
};

export declare type ParseData = {
    /** the value */
    v: (number | boolean);
    /** number format pattern */
    z?: string;
};

