# numfmt – a spreadsheet number formatter

The numfmt library formats numbers according to a specifier string as defined in [ECMA-376][ecma]. The library tries its best to emulate the inns and outs of what the Excel spreadsheet software does.

The library is written in pure JavaScript and has no dependencies. It is comparable to the [SSF][ssf] with some minor interface exceptions.


#### Features

Why use this rather than the battle tested SSF? You may have no need to but numfmt is fully open source, has equivalent (if not better) formatting capabilities, built in international support, customizability, input parsing, and may run about twice as fast in most cases.

Adding locales <a href="#numfmt-addlocale-data-tag">is simple</a> but those included are:

* Arabic (`ar`)
* Armenian (`hy`)
* Azeri (`az`)
* Belarusian (`be`)
* Bengali (`bn`)
* Bulgarian (`bg`)
* Burmese (`my`)
* Catalan (`ca`)
* Chinese (`zh_CN`, `zh_HK`, `zh_TW`)
* Croatian (`hr`)
* Czech (`cs`)
* Danish (`da`)
* Dutch (`nl`)
* English (`en`, `en_AU`, `en_CA`, `en_GB`, `en_IE`)
* Filipino (`fil`)
* Finnish (`fi`)
* French (`fr`, `fr_CA`, `fr_CH`)
* Georgian (`ka`)
* German (`de`, `de_CH`)
* Greek (`el`)
* Gujarati (`gu`)
* Hebrew (`he`)
* Hindi (`hi`)
* Hungarian (`hu`)
* Icelandic (`is`)
* Indonesian (`id`)
* Italian (`it`, `it_CH`)
* Japanese (`ja`)
* Kannada (`kn`)
* Kazakh (`kk`)
* Korean (`ko`)
* Latvian (`lv`)
* Lithuanian (`lt`)
* Malayalam (`ml`)
* Marathi (`mr`)
* Mongolian (`mn`)
* Norwegian (`nb`, `no`)
* Polish (`pl`)
* Portuguese (`pt`, `pt_BR`)
* Punjabi (`pa`)
* Romanian (`ro`)
* Russian (`ru`)
* Serbian (`sr`)
* Slovak (`sk`)
* Slovenian (`sl`)
* Spanish (`es`, `es_AR`, `es_BO`, `es_CL`, `es_CO`, `es_EC`, `es_MX`, `es_PY`, `es_UY`, `es_VE`)
* Swedish (`sv`)
* Tamil (`ta`)
* Telugu (`te`)
* Thai (`th`)
* Turkish (`tr`)
* Ukrainian (`uk`)
* Vietnamese (`vi`)
* Welsh (`cy`)

The library is made to work with current generation spreadsheets and so it does not support the [1904 date system](https://docs.microsoft.com/en-us/office/troubleshoot/excel/1900-and-1904-date-system). It does not have built in tables for formats addressable by offsets, you are expected to maintain those yourself.


## Installing

If you don't want to download and build numfmt yourself, the library is conveniently provided as an NPM package:

```
$ npm install numfmt
```


## Using

```js
import { format } from "numfmt";

const output = format("#,##0.00", 1234.56);
console.log(output);
```

The full API documentation is available under [API.md](API.md).


## Format syntax

Microsoft have excellent [documentation on how the format works](https://support.microsoft.com/en-us/office/review-guidelines-for-customizing-a-number-format-c0a1d1fa-d3f4-4018-96b7-9c9354dd99f5). Here are some quick basics:

A format pattern is divided into 4 sections: `<POSITIVE>;<NEGATIVE>;<ZERO>;<TEXT>`

Only the first section is mandatory, the others are filled in as needed. The sections consist of symbols to indicate what to emit. The symbols are case insensitive:

| Symbol | Result | Description
|-- |-- |--
| `0`   | Digit or Zero   | `7` formatted with `00` will emit `"07"`
| `#`   | Digit if needed   | `7` formatted with `##` will emit `"7"`
| `?`   | Digit or Space  | `7` formatted with `??` will emit `" 7"`
| `.`   | Decimal point   |
| `,`   | Thousands separator   |  `1234` formatted with `#,##0` will emit `"1,234"`. The emitted grouping character depends on the locale used.
| `%`   | Percentage  | Number is multiplied by 100 before it is shown.  `.7` formatted with `0%` will emit `"70%"`
| `E-`, `E+` | Exponential format | `12200000` formatted with `0.00E+00` will emit `"1.22E+07"`
| `$`, `-`, `+`, `/`, `(`, `)`,  ` ` | Pass-through | The symbol is printed as-is.
| `\` | Escape | Pass the the next character through as-is.
| `*` | Fill | Repeat the next character in the format enough times to fill the column to its current width. By default numfmt emits nothing when this is used.
| `_` | Skip width | Skip the width of the next character. By default numfmt emits only a single space when this is used.
| `"text"` | Pass-through | Pass through whatever text is inside the quotation marks as-is. `7` formatted with `0 "bells"` will emit `"7 bells"`
| `@` | Text value | When value is a text, emit it as is: `foo` formatted with `"bar"@"bar"` will emit `"barfoobar"`
| `yy` | Years | Two digit year
| `yyyy` | Years | Four digit year
| `m` | Month | 1–12
| `mm` | Month | 01–12
| `mmm` | Short month | Month name abbreviation (Jan–Dec). Names are locale dependent.
| `mmmm` | Month name | Full month name (January–December). Names are locale dependent.
| `mmmmm` | Month name | Single letter month abbreviation (J–D). Names are locale dependent.
| `d` | Days | 1–31
| `dd` | Days | 01–31
| `ddd` | Weekdays | Sun–Sat
| `dddd` | Weekdays | Sunday–Saturday
| `h` | Hours | 0–23 or 1–12
| `hh` | Hours | 00–23 or 01–12
| `m` | Minutes | 0–59
| `mm` | Minutes | 00–59
| `s` | Seconds | 0–59
| `ss` | Seconds | 00–59
| `AM/PM` | 12h clock | Sets clock to 12h and emits AM or PM.
| `A/P` | 12h clock | Sets clock to 12h and emits A or P.
| `[h]` | Hours | Elapsed time in hours
| `[m]` | Minutes | Elapsed time in minutes
| `[s]` | Seconds | Elapsed time in seconds

The `<POSITIVE>` and `<NEGATIVE>` sections may optionally have conditionals. A condition is set by a comparison operator followed by a number, followed by the regular format symbols, surrounded by square brackets: `[>=-2.5]#,##0.0`. The supported set of operators is: `=` `>` `<` `>=` `<=` `<>`
  
* There must not be more than 4 sections.
* There must not be more than 2 conditional sections.
* There must not be numerical or date emitting symbol in the (4th) text part.

