# Numfmt API

**Functions**

- [addLocale( localeSettings, l4e )](#addLocale)
- [dateFromSerial( serialDate, _\[options\]_ )](#dateFromSerial)
- [dateToSerial( date, _\[options\]_ )](#dateToSerial)
- [format( pattern, value, _\[options\]_ )](#format)
- [formatColor( pattern, value, _\[options\]_ )](#formatColor)
- [getFormatDateInfo( pattern )](#getFormatDateInfo)
- [getFormatInfo( pattern, _\[options\]_ )](#getFormatInfo)
- [getLocale( locale )](#getLocale)
- [isDateFormat( pattern )](#isDateFormat)
- [isPercentFormat( pattern )](#isPercentFormat)
- [isTextFormat( pattern )](#isTextFormat)
- [isValidFormat( pattern )](#isValidFormat)
- [parseBool( value, _\[options\]_ )](#parseBool)
- [parseDate( value, _\[options\]_ )](#parseDate)
- [parseLocale( locale )](#parseLocale)
- [parseNumber( value, _\[options\]_ )](#parseNumber)
- [parseTime( value, _\[options\]_ )](#parseTime)
- [parseValue( value, _\[options\]_ )](#parseValue)
- [round( number, _\[places\]_ )](#round)
- [tokenize( pattern )](#tokenize)

**Constant**

- [tokenTypes](#tokenTypes)

**Types**

- [FormatDateInfo](#FormatDateInfo)
- [FormatInfo](#FormatInfo)
- [FormatToken](#FormatToken)
- [LocaleData](#LocaleData)
- [LocaleToken](#LocaleToken)
- [ParseData](#ParseData)

## Functions

### <a id="addLocale" href="#addLocale">#</a> addLocale( localeSettings, l4e ) ⇒ [`LocaleData`](#LocaleData)

Register locale data for a language so for use when formatting.

Any partial set of properties may be returned to have the defaults used where properties are missing.

**See also:** {LocaleData}.

##### Parameters

| Name                       | Type            | Default                                                                                                                                           | Description                                                                    |
| -------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| localeSettings             | `object`        |                                                                                                                                                   | A collection of settings for a locale.                                         |
| localeSettings.[ampm]      | `Array<string>` | `["AM","PM"]`                                                                                                                                     | How AM and PM should be presented.                                             |
| localeSettings.[bool]      | `Array<string>` | `["TRUE", "FALSE"]`                                                                                                                               | How TRUE and FALSE should be presented.                                        |
| localeSettings.[ddd]       | `Array<string>` | `["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]`                                                                                               | Shortened day names (e.g. `Wed`)                                               |
| localeSettings.[dddd]      | `Array<string>` | `["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]`                                                                  | Long day names (e.g. `Wednesday`)                                              |
| localeSettings.[decimal]   | `string`        | `"."`                                                                                                                                             | Symbol used to separate integers from fractions (usually `.`)                  |
| localeSettings.[exponent]  | `string`        | `"E"`                                                                                                                                             | Symbol used to indicate an exponent (usually `E`)                              |
| localeSettings.[group]     | `string`        | `"\u00a0"`                                                                                                                                        | Symbol used as a grouping separator (`1,000,000` uses `,`)                     |
| localeSettings.[infinity]  | `string`        | `"∞"`                                                                                                                                             | Symbol used to indicate infinite values (`∞`)                                  |
| localeSettings.[mmm]       | `Array<string>` | `["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]`                                                            | Short month names for the Gregorian calendar (e.g. `Nov`)                      |
| localeSettings.[mmm6]      | `Array<string>` | `["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."]`                             | Short month names for the Islamic calendar (e.g. `Raj.`)                       |
| localeSettings.[mmmm]      | `Array<string>` | `["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]`                      | Long month names for the Gregorian calendar (e.g. `November`)                  |
| localeSettings.[mmmm6]     | `Array<string>` | `["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]` | Long month names for the Islamic calendar (e.g. `Rajab`)                       |
| localeSettings.[nan]       | `string`        | `"NaN"`                                                                                                                                           | Symbol used to indicate NaN values (`NaN`)                                     |
| localeSettings.[negative]  | `string`        | `"-"`                                                                                                                                             | Symbol used to indicate positive numbers (usually `-`)                         |
| localeSettings.[percent]   | `string`        | `"%"`                                                                                                                                             | Symbol used to indicate a percentage (usually `%`)                             |
| localeSettings.[positive]  | `string`        | `"+"`                                                                                                                                             | Symbol used to indicate positive numbers (usually `+`)                         |
| localeSettings.[preferMDY] | `boolean`       | `false`                                                                                                                                           | Is the prefered date format month first (12/31/2025) or day first (31/12/2025) |
| l4e                        | `string`        |                                                                                                                                                   | A string BCP 47 tag of the locale.                                             |

##### Returns

[`LocaleData`](#LocaleData) – - A full collection of settings for a locale

---

### <a id="dateFromSerial" href="#dateFromSerial">#</a> dateFromSerial( serialDate, _[options = `{}`]_ ) ⇒ `Array<number>`

Convert a spreadsheet serial date to an array of date parts. Accurate to a second.

```js
// output as [ Y, M, D, h, m, s ]
dateFromSerial(28627); // [ 1978, 5, 17, 0, 0, 0 ]
````

##### Parameters

| Name               | Type      | Default | Description                                                                                                                                  |
| ------------------ | --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| serialDate         | `number`  |         | The date                                                                                                                                     |
| [options]          | `object`  | `{}`    | The options                                                                                                                                  |
| [options].leap1900 | `boolean` | `true`  | Simulate the Lotus 1-2-3 [1900 leap year bug](https://docs.microsoft.com/en-us/office/troubleshoot/excel/wrongly-assumes-1900-is-leap-year). |

##### Returns

`Array<number>` – returns an array of date parts

---

### <a id="dateToSerial" href="#dateToSerial">#</a> dateToSerial( date, _[options = `{}`]_ ) ⇒ `number` | `null`

Convert a native JavaScript Date, or array to an spreadsheet serial date.

Returns a serial date number if input was a Date object or an array of numbers, a null.

```js
// input as Date
dateToSerial(new Date(1978, 5, 17)); // 28627
// input as [ Y, M, D, h, m, s ]
dateToSerial([ 1978, 5, 17 ]); // 28627
// other input
dateToSerial("something else"); // null
````

##### Parameters

| Name                     | Type                      | Default | Description                                                                                                           |
| ------------------------ | ------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| date                     | `Date` \| `Array<number>` |         | The date                                                                                                              |
| [options]                | `object`                  | `{}`    | Options                                                                                                               |
| [options].ignoreTimezone | `boolean`                 | `false` | Normally time zone will be taken into account. This makes the conversion to   serial date ignore the timezone offset. |

##### Returns

`number` | `null` – The date as a spreadsheet serial date, or null.

---

### <a id="format" href="#format">#</a> format( pattern, value, _[options = `{}`]_ ) ⇒ `string`

Formats a value as a string and returns the result.

- Dates are normalized to spreadsheet style serial dates and then formatted. - Booleans are emitted as uppercase "TRUE" or "FALSE". - Null and Undefined will return an empty string "". - Any non number values will be stringified and passed through the text section of the format pattern. - NaNs and infinites will use the corresponding strings from the active locale.

##### Parameters

| Name                        | Type      | Default    | Description                                                                                                                                                                                                                                    |
| --------------------------- | --------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pattern                     | `string`  |            | A format pattern in the ECMA-376 number format.                                                                                                                                                                                                |
| value                       | `any`     |            | The value to format.                                                                                                                                                                                                                           |
| [options]                   | `object`  | `{}`       | Options                                                                                                                                                                                                                                        |
| [options].bigintErrorNumber | `boolean` | `false`    | Should the formatter switch to a plain string number format when trying to    format a bigint that is out of bounds?                                                                                                                           |
| [options].dateErrorNumber   | `boolean` | `true`     | Should the formatter switch to a General number format when trying to    format a date that is out of bounds?                                                                                                                                  |
| [options].dateErrorThrows   | `boolean` | `false`    | Should the formatter throw an error when trying to format a date that is    out of bounds?                                                                                                                                                     |
| [options].dateSpanLarge     | `boolean` | `true`     | Extends the allowed range of dates from Excel bounds (1900–9999) to    Google Sheet bounds (0–99999).                                                                                                                                          |
| [options].fillChar          | `boolean` | `""`       | When the formatter encounters `*` it normally emits nothing instead of the    `*` and the next character (like Excel TEXT function does). Setting this    to a character will make the formatter emit that followed by the next one.           |
| [options].ignoreTimezone    | `boolean` | `false`    | Normally when date objects are used with the formatter, time zone is taken    into account. This makes the formatter ignore the timezone offset.                                                                                               |
| [options].invalid           | `string`  | `"######"` | The string emitted when no-throw mode fails to parse a pattern.                                                                                                                                                                                |
| [options].leap1900          | `boolean` | `true`     | Simulate the Lotus 1-2-3 [1900 leap year bug](https://docs.microsoft.com/en-us/office/troubleshoot/excel/wrongly-assumes-1900-is-leap-year).    It is a requirement in the Ecma OOXML specification so it is on by default.                    |
| [options].locale            | `string`  | `""`       | A BCP 47 string tag. Locale default is english with a `\u00a0`    grouping symbol (see [addLocale](#addLocale))                                                                                                                                |
| [options].nbsp              | `boolean` | `false`    | By default the output will use a regular space, but in many cases you    may desire a non-breaking-space instead.                                                                                                                              |
| [options].overflow          | `string`  | `"######"` | The string emitted when a formatter fails to format a date that is out    of bounds.                                                                                                                                                           |
| [options].skipChar          | `boolean` | `""`       | When the formatter encounters `_` it normally emits a single space instead    of the `_` and the next character (like Excel TEXT function does). Setting    this to a character will make the formatter emit that followed by the next    one. |
| [options].throws            | `boolean` | `true`     | Should the formatter throw an error if a provided pattern is invalid.    If false, a formatter will be constructed which instead outputs an error    string (see _invalid_ in this table).                                                     |

##### Returns

`string` – A formatted value

---

### <a id="formatColor" href="#formatColor">#</a> formatColor( pattern, value, _[options = `{}`]_ ) ⇒ `string` | `number` | `null`

Find the color appropriate to a value as dictated by a format pattern.

If the pattern defines colors, this function will emit the color appropriate to the value. If no colors were specified this function returns `undefined`.

```js
const color = formatColor("[green]#,##0;[red]-#,##0", -10);
console.log(color); // "red"
const color = formatColor("[green]#,##0;-#,##0", -10);
console.log(color); // null
```

##### Parameters

| Name                     | Type      | Default | Description                                                                                                                                                                                                                                                                     |
| ------------------------ | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pattern                  | `string`  |         | A format pattern in the ECMA-376 number format.                                                                                                                                                                                                                                 |
| value                    | `any`     |         | The value to format.                                                                                                                                                                                                                                                            |
| [options]                | `object`  | `{}`    | Options                                                                                                                                                                                                                                                                         |
| [options].ignoreTimezone | `boolean` | `false` | Normally when date objects are used with the formatter, time zone is taken    into account. This makes the formatter ignore the timezone offset.                                                                                                                                |
| [options].indexColors    | `boolean` | `true`  | When indexed color modifiers are used (`[Color 1]`) the formatter will    convert the index into the corresponding hex color of the default palette.    When this option is set to false, the number will instead by emitted    allowing you to index against a custom palette. |
| [options].throws         | `boolean` | `true`  | Should the formatter throw an error if a provided pattern is invalid.    If false, a formatter will be constructed which instead outputs an error    string (see _invalid_ in this table).                                                                                      |

##### Returns

`string` | `number` | `null` – A string color value as described by the pattern or a number if the    indexColors option has been set to false.

---

### <a id="getFormatDateInfo" href="#getFormatDateInfo">#</a> getFormatDateInfo( pattern ) ⇒ [`FormatDateInfo`](#FormatDateInfo)

Gets information about date codes use in a format string.

##### Parameters

| Name    | Type     | Description                                     |
| ------- | -------- | ----------------------------------------------- |
| pattern | `string` | A format pattern in the ECMA-376 number format. |

##### Returns

[`FormatDateInfo`](#FormatDateInfo) – An object of format date properties.

---

### <a id="getFormatInfo" href="#getFormatInfo">#</a> getFormatInfo( pattern, _[options = `{}`]_ ) ⇒ [`FormatInfo`](#FormatInfo)

Returns an object detailing the properties and internals of a format parsed format pattern.

##### Parameters

| Name               | Type     | Default | Description                                                                                                                                                                                                                |
| ------------------ | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pattern            | `string` |         | A format pattern in the ECMA-376 number format.                                                                                                                                                                            |
| [options]          | `object` | `{}`    | Options                                                                                                                                                                                                                    |
| [options].currency | `string` |         | Limit the patterns identified as currency to those that use the give string.   If nothing is provided, patterns will be tagged as currency if one of the   following currency symbols is used: ¤$£¥֏؋৳฿៛₡₦₩₪₫€₭₮₱₲₴₸₹₺₼₽₾₿ |

##### Returns

[`FormatInfo`](#FormatInfo) – An object of format properties.

---

### <a id="getLocale" href="#getLocale">#</a> getLocale( locale ) ⇒ [`LocaleData`](#LocaleData) | `null`

Used by the formatter to pull a locate from its registered locales. If subtag isn't available but the base language is, the base language is used. So if `en-CA` is not found, the formatter tries to find `en` else it returns a `null`.

##### Parameters

| Name   | Type     | Description                                                 |
| ------ | -------- | ----------------------------------------------------------- |
| locale | `string` | A BCP 47 string tag of the locale, or an Excel locale code. |

##### Returns

[`LocaleData`](#LocaleData) | `null` – - An object of format date properties.

---

### <a id="isDateFormat" href="#isDateFormat">#</a> isDateFormat( pattern ) ⇒ `boolean`

Determine if a given format pattern is a date pattern.

The pattern is considered a date pattern if any of its sections contain a date symbol (such as `Y` or `H`). Each section is restricted to be _either_ a number or date format.

##### Parameters

| Name    | Type     | Description                                     |
| ------- | -------- | ----------------------------------------------- |
| pattern | `string` | A format pattern in the ECMA-376 number format. |

##### Returns

`boolean` – True if the specified pattern is date pattern, False otherwise.

---

### <a id="isPercentFormat" href="#isPercentFormat">#</a> isPercentFormat( pattern ) ⇒ `boolean`

Determine if a given format pattern is a percentage pattern.

The pattern is considered a percentage pattern if any of its sections contains an unescaped percentage symbol.

##### Parameters

| Name    | Type     | Description                                     |
| ------- | -------- | ----------------------------------------------- |
| pattern | `string` | A format pattern in the ECMA-376 number format. |

##### Returns

`boolean` – True if the specified pattern is date pattern, False otherwise.

---

### <a id="isTextFormat" href="#isTextFormat">#</a> isTextFormat( pattern ) ⇒ `boolean`

Determine if a given format pattern is a text only pattern.

The pattern is considered text only if its definition is composed of a single section that includes that text symbol (`@`).

For example `@` or `@" USD"` are text patterns but `#;@` is not.

##### Parameters

| Name    | Type     | Description                                     |
| ------- | -------- | ----------------------------------------------- |
| pattern | `string` | A format pattern in the ECMA-376 number format. |

##### Returns

`boolean` – True if the specified pattern is date pattern, False otherwise.

---

### <a id="isValidFormat" href="#isValidFormat">#</a> isValidFormat( pattern ) ⇒ `boolean`

Determine if a given format pattern is valid.

##### Parameters

| Name    | Type     | Description                                     |
| ------- | -------- | ----------------------------------------------- |
| pattern | `string` | A format pattern in the ECMA-376 number format. |

##### Returns

`boolean` – True if the specified pattern is valid, False otherwise.

---

### <a id="parseBool" href="#parseBool">#</a> parseBool( value, _[options = `{}`]_ ) ⇒ [`ParseData`](#ParseData) | `null`

Parse a string input and return its boolean value. If the input was not recognized or valid, the function returns a `null`, for valid input it returns an object with one property:

- `v`: the parsed value.

**See also:**  [parseValue](#parseValue).

##### Parameters

| Name             | Type     | Default | Description                                                                                                     |
| ---------------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| value            | `string` |         | The supposed boolean to parse                                                                                   |
| [options]        | `object` | `{}`    | Options                                                                                                         |
| [options].locale | `string` | `""`    | A BCP 47 string tag. Locale default is english with a `\u00a0`    grouping symbol (see [addLocale](#addLocale)) |

##### Returns

[`ParseData`](#ParseData) | `null` – An object of the parsed value and a corresponding format string

---

### <a id="parseDate" href="#parseDate">#</a> parseDate( value, _[options = `{}`]_ ) ⇒ [`ParseData`](#ParseData) | `null`

Parse a date or datetime string input and return its value and format. If the input was not recognized or valid, the function returns a `null`, for valid input it returns an object with two properties:

- `v`: the parsed value. - `z`: the number format of the input (if applicable).

**See also:**  [parseValue](#parseValue).

##### Parameters

| Name             | Type     | Default | Description                                                                                                     |
| ---------------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| value            | `string` |         | The date to parse                                                                                               |
| [options]        | `object` | `{}`    | Options                                                                                                         |
| [options].locale | `string` | `""`    | A BCP 47 string tag. Locale default is english with a `\u00a0`    grouping symbol (see [addLocale](#addLocale)) |

##### Returns

[`ParseData`](#ParseData) | `null` – An object of the parsed value and a corresponding format string

---

### <a id="parseLocale" href="#parseLocale">#</a> parseLocale( locale ) ⇒ [`LocaleToken`](#LocaleToken)

Parse a regular IETF BCP 47 locale tag and emit an object of its parts. Irregular tags and subtags are not supported.

##### Parameters

| Name   | Type     | Description                        |
| ------ | -------- | ---------------------------------- |
| locale | `string` | A BCP 47 string tag of the locale. |

##### Returns

[`LocaleToken`](#LocaleToken) – - An object describing the locale.

---

### <a id="parseNumber" href="#parseNumber">#</a> parseNumber( value, _[options = `{}`]_ ) ⇒ [`ParseData`](#ParseData) | `null`

Parse a numeric string input and return its value and format. If the input was not recognized or valid, the function returns a `null`, for valid input it returns an object with two properties:

* `v`: the parsed value. * `z`: the number format of the input (if applicable).

**See also:**  [parseValue](#parseValue).

##### Parameters

| Name             | Type     | Default | Description                                                                                                     |
| ---------------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| value            | `string` |         | The number to parse                                                                                             |
| [options]        | `object` | `{}`    | Options                                                                                                         |
| [options].locale | `string` | `""`    | A BCP 47 string tag. Locale default is english with a `\u00a0`    grouping symbol (see [addLocale](#addLocale)) |

##### Returns

[`ParseData`](#ParseData) | `null` – An object of the parsed value and a corresponding format string

---

### <a id="parseTime" href="#parseTime">#</a> parseTime( value, _[options = `{}`]_ ) ⇒ [`ParseData`](#ParseData) | `null`

Parse a time string input and return its value and format. If the input was not recognized or valid, the function returns a `null`, for valid input it returns an object with two properties:

- `v`: the parsed value. - `z`: the number format of the input (if applicable).

**See also:**  [parseValue](#parseValue).

##### Parameters

| Name             | Type     | Default | Description                                                                                                     |
| ---------------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| value            | `string` |         | The date to parse                                                                                               |
| [options]        | `object` | `{}`    | Options                                                                                                         |
| [options].locale | `string` | `""`    | A BCP 47 string tag. Locale default is english with a `\u00a0`    grouping symbol (see [addLocale](#addLocale)) |

##### Returns

[`ParseData`](#ParseData) | `null` – An object of the parsed value and a corresponding format string

---

### <a id="parseValue" href="#parseValue">#</a> parseValue( value, _[options = `{}`]_ ) ⇒ [`ParseData`](#ParseData) | `null`

Attempt to parse a "spreadsheet input" string input and return its value and format. If the input was not recognized or valid, the function returns a `null`, for valid input it returns an object with two properties:

- `v`: The parsed value. For dates, this will be an Excel style serial date. - `z`: (Optionally) the number format string of the input. This property will        not be present if it amounts to the `General` format.

`parseValue()` recognizes a wide range of dates and date-times, times, numbers, and booleans. Some examples:

```js
// basic number
parseValue("-123");// { v: -123 }
// formatted number
parseValue("$1,234"); // { v: 1234, z: "$#,##0" }
// a percent
parseValue("12.3%"); // { v: 0.123, z: "0.00%" }
// a date
parseValue("07 October 1984"); // { v: 30962, z: 'dd mmmm yyyy' }
// an ISO formatted date-time
parseValue("1984-09-10 11:12:13.1234"); // { v: 30935.46681855787, z: "yyyy-mm-dd hh:mm:ss" }
// a boolean
parseValue("false"); // { v: false }
```

The formatting string outputted may not correspond exactly to the input. Rather, is it composed of certain elements which the input controls. This is comparable to how Microsoft Excel and Google Sheets parse pasted input. Some things you may expect:

- Whitespace is ignored. - Decimal fractions are always represented by `.00` regardless of how many   digits were shown in the input. - Negatives denoted by parentheses [`(1,234)`] will not include the   parentheses in the format string (the value will still by negative.) - All "scientific notation" returns the same format: `0.00E+00`.

Internally the parser calls, `parseNumber`, `parseDate`, `parseTime` and `parseBool`. They work in the same way except with a more limited scope. You may want those function if you are limiting input to a smaller scope.

Be warned that the parser do not (yet) take locale into account so all input is assumed to be in "en-US". This means that `1,234.5` will parse, but `1.234,5` will not. Similarly, the order of date parts will be US centric. This may change in the future so be careful what options you pass the functions.

##### Parameters

| Name             | Type     | Default | Description                                                                                                     |
| ---------------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| value            | `string` |         | The value to parse                                                                                              |
| [options]        | `object` | `{}`    | Options                                                                                                         |
| [options].locale | `string` | `""`    | A BCP 47 string tag. Locale default is english with a `\u00a0`    grouping symbol (see [addLocale](#addLocale)) |

##### Returns

[`ParseData`](#ParseData) | `null` – An object of the parsed value and a corresponding format string

---

### <a id="round" href="#round">#</a> round( number, _[places]_ ) ⇒ `number`

Return a number rounded to the specified amount of places. This is the rounding function used internally by the formatter (symmetric arithmetic rounding).

##### Parameters

| Name     | Type     | Default | Description                         |
| -------- | -------- | ------- | ----------------------------------- |
| number   | `number` |         | The number to round.                |
| [places] | `number` | `0`     | The number of decimals to round to. |

##### Returns

`number` – A rounded number.

---

### <a id="tokenize" href="#tokenize">#</a> tokenize( pattern ) ⇒ `Array<FormatToken>`

Breaks a format pattern string into a list of tokens.

The returned output will be an array of objects representing the tokens:

```js
[
  { type: 'zero', value: '0', raw: '0' },
  { type: 'point', value: '.', raw: '.' },
  { type: 'zero', value: '0', raw: '0' },
  { type: 'percent', value: '%', raw: '%' }
]
```

Token types may be found as an Object as the [`tokenTypes` export](#tokenTypes) of the package.

##### Parameters

| Name    | Type     | Description        |
| ------- | -------- | ------------------ |
| pattern | `string` | The format pattern |

##### Returns

`Array<FormatToken>` – a list of tokens

---

## Constant

### <a id="tokenTypes" href="#tokenTypes">#</a> tokenTypes = `Readonly<Record<string, string>>`

A dictionary of the types used to identify token variants.

**See also:**  [tokenize](#tokenize).

##### Properties

| Name      | Type     | Description                                                         |
| --------- | -------- | ------------------------------------------------------------------- |
| AMPM      | `string` | AM/PM operator (`AM/PM`, `A/P`)                                     |
| BREAK     | `string` | Semicolon operator indicating a break between format sections (`;`) |
| CALENDAR  | `string` | Calendar modifier (`B2`)                                            |
| CHAR      | `string` | Single non-operator character (`m`)                                 |
| COLOR     | `string` | Color modifier (`[Black]`, `[color 5]`)                             |
| COMMA     | `string` | Plain non-operator comma (`,`)                                      |
| CONDITION | `string` | Condition modifier for a section (`[>=10]`)                         |
| DATETIME  | `string` | Date-time operator (`mmmm`, `YY`)                                   |
| DBNUM     | `string` | Number display modifier (`[DBNum23]`)                               |
| DIGIT     | `string` | A digit between 1 and 9 (`3`)                                       |
| DURATION  | `string` | Time duration (`[ss]`)                                              |
| ERROR     | `string` | Unidentifiable or illegal character (`Ň`)                           |
| ESCAPED   | `string` | Escaped character (`\E`)                                            |
| EXP       | `string` | Exponent operator (`E+`)                                            |
| FILL      | `string` | Fill with char operator and operand (`*_`)                          |
| GENERAL   | `string` | General format operator (`General`)                                 |
| GROUP     | `string` | Number grouping operator (`,`)                                      |
| HASH      | `string` | Hash operator (digit if available) (`#`)                            |
| LOCALE    | `string` | Locale modifier (`[$-1E020404]`)                                    |
| MINUS     | `string` | Minus sign (`-`)                                                    |
| MODIFIER  | `string` | An unidentified modifier (`[Schwarz]`)                              |
| NATNUM    | `string` | Number display modifier (`[NatNum3]`)                               |
| PAREN     | `string` | Parenthesis character (`)`)                                         |
| PERCENT   | `string` | Percent operator (`%`)                                              |
| PLUS      | `string` | Plus sign (`+`)                                                     |
| POINT     | `string` | Decimal point operator (`.`)                                        |
| QMARK     | `string` | Question mark operator (digit or space if not available) (`?`)      |
| SCALE     | `string` | Scaling operator (`,`)                                              |
| SKIP      | `string` | Skip with char operator and operand (`*_`)                          |
| SLASH     | `string` | Slash operator (`/`)                                                |
| SPACE     | `string` | Space (` `)                                                         |
| STRING    | `string` | Quoted string (`"days"`)                                            |
| TEXT      | `string` | Text output operator (`@`)                                          |
| ZERO      | `string` | Zero operator (digit or zero if not available) (`0`)                |

---

## Types

### <a id="FormatDateInfo" href="#FormatDateInfo">#</a> FormatDateInfo

An object detailing which date specifiers are used in a format pattern.

##### Properties

| Name      | Type         | Description                                           |
| --------- | ------------ | ----------------------------------------------------- |
| clockType | `12` \| `24` | 12 if the pattern uses AM/PM clock else 24.           |
| day       | `boolean`    | true if the pattern uses day of the month else false. |
| hours     | `boolean`    | true if the pattern uses hours else false.            |
| minutes   | `boolean`    | true if the pattern uses minutes else false.          |
| month     | `boolean`    | true if the pattern uses months else false.           |
| seconds   | `boolean`    | true if the pattern uses seconds else false.          |
| year      | `boolean`    | true if the pattern uses years else false.            |

---

### <a id="FormatInfo" href="#FormatInfo">#</a> FormatInfo

An object of information properties based on a format pattern.

##### Properties

| Name        | Type                                                                                                                                                                       | Description                                                                                                                                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| code        | `string`                                                                                                                                                                   | Corresponds to Excel's `CELL("format")` functionality. It should match     Excel's esoteric behaviour fairly well.     [See Microsoft's documentation.](https://support.microsoft.com/en-us/office/cell-function-51bd39a5-f338-4dbe-a33f-955d67c2b2cf) |
| color       | `0` \| `1`                                                                                                                                                                 | 1 if the format uses color on the negative portion of the string, else     a 0. This replicates Excel's `CELL("color")` functionality.                                                                                                                 |
| grouped     | `0` \| `1`                                                                                                                                                                 | 1 if the positive portion of the format uses a thousands separator,     else a 0.                                                                                                                                                                      |
| isDate      | `boolean`                                                                                                                                                                  | Corresponds to the output from isDateFormat.                                                                                                                                                                                                           |
| isPercent   | `boolean`                                                                                                                                                                  | Corresponds to the output from isPercentFormat.                                                                                                                                                                                                        |
| isText      | `boolean`                                                                                                                                                                  | Corresponds to the output from isTextFormat.                                                                                                                                                                                                           |
| level       | `number`                                                                                                                                                                   | An arbirarty number that represents the format's specificity if you want     to compare one to another. Integer comparisons roughly match Excel's     resolutions when it determines which format wins out.                                            |
| maxDecimals | `number`                                                                                                                                                                   | The maximum number of decimals this format will emit.                                                                                                                                                                                                  |
| parentheses | `0` \| `1`                                                                                                                                                                 | 1 if the positive portion of the number format contains an open     parenthesis, else a 0. This is replicates Excel's `CELL("parentheses")`     functionality.                                                                                         |
| scale       | `number`                                                                                                                                                                   | The multiplier used when formatting the number (100 for percentages).                                                                                                                                                                                  |
| type        | `"currency"` \| `"date"` \| `"datetime"` \| `"error"` \| `"fraction"` \| `"general"` \| `"grouped"` \| `"number"` \| `"percent"` \| `"scientific"` \| `"text"` \| `"time"` | A string identifier for the type of the number formatter.                                                                                                                                                                                              |

---

### <a id="FormatToken" href="#FormatToken">#</a> FormatToken

##### Properties

| Name  | Type     | Description                                          |
| ----- | -------- | ---------------------------------------------------- |
| raw   | `string` | Raw token source.                                    |
| type  | `string` | Token type.                                          |
| value | `any`    | The value of the token, cleaned of extra characters. |

---

### <a id="LocaleData" href="#LocaleData">#</a> LocaleData

An object of properties used by a formatter when printing a number in a certain locale.

##### Properties

| Name      | Type            | Description                                                                    |
| --------- | --------------- | ------------------------------------------------------------------------------ |
| ampm      | `Array<string>` | How AM and PM should be presented                                              |
| bool      | `Array<string>` | How TRUE and FALSE should be presented                                         |
| ddd       | `Array<string>` | Shortened day names (`Wed`)                                                    |
| dddd      | `Array<string>` | Long day names (`Wednesday`)                                                   |
| decimal   | `string`        | Symbol used to separate integers from fractions (usually `.`)                  |
| exponent  | `string`        | Symbol used to indicate an exponent (usually `E`)                              |
| group     | `string`        | Symbol used as a grouping separator (`1,000,000` uses `,`)                     |
| infinity  | `string`        | Symbol used to indicate infinite values (`∞`)                                  |
| mmm       | `Array<string>` | Short month names for the Gregorian calendar (`Nov`)                           |
| mmm6      | `Array<string>` | Short month names for the Islamic calendar (`Raj.`)                            |
| mmmm      | `Array<string>` | Long month names for the Gregorian calendar (`November`)                       |
| mmmm6     | `Array<string>` | Long month names for the Islamic calendar (`Rajab`)                            |
| nan       | `string`        | Symbol used to indicate NaN values (`NaN`)                                     |
| negative  | `string`        | Symbol used to indicate positive numbers (usually `-`)                         |
| percent   | `string`        | Symbol used to indicate a percentage (usually `%`)                             |
| positive  | `string`        | Symbol used to indicate positive numbers (usually `+`)                         |
| preferMDY | `boolean`       | Is the prefered date format month first (12/31/2025) or day first (31/12/2025) |

---

### <a id="LocaleToken" href="#LocaleToken">#</a> LocaleToken

An object of properties for a locale tag.

##### Properties

| Name      | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| lang      | `string` | The basic tag such as `zh_CN` or `fi`    |
| language  | `string` | The language section (`zh` for `zh_CN`)  |
| territory | `string` | The territory section (`CN` for `zh_CN`) |

---

### <a id="ParseData" href="#ParseData">#</a> ParseData

##### Properties

| Name | Type                  | Description           |
| ---- | --------------------- | --------------------- |
| v    | `number` \| `boolean` | the value             |
| [z]  | `string`              | number format pattern |

---


