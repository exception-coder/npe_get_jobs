# trigram-utils

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

A few language trigram utilities.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`clean(value)`](#cleanvalue)
    *   [`trigrams(value)`](#trigramsvalue)
    *   [`asDictionary(value)`](#asdictionaryvalue)
    *   [`asTuples(value)`](#astuplesvalue)
    *   [`tuplesAsDictionary(tuples)`](#tuplesasdictionarytuples)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package contains a few utilities that can help when working with trigram
(an n-gram where each slice is 3 characters) based natural language detection.

## When should I use this?

Probably not often, except when you want to create something like [franc][],
but build it in something other than UDHR.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install trigram-utils
```

In Deno with [Skypack][]:

```js
import * as trigramUtils from 'https://cdn.skypack.dev/trigram-utils@2?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import * as trigramUtils from 'https://cdn.skypack.dev/trigram-utils@2?min'
</script>
```

## Use

```js
import {clean, trigrams, asDictionary, asTuples, tuplesAsDictionary} from 'trigram-utils'

clean(' t@rololol ') // => 't rololol'

trigrams(' t@rololol ')
// => [' t ', 't r', ' ro', 'rol', 'olo', 'lol', 'olo', 'lol', 'ol ']

asDictionary(' t@rololol ')
// => {'ol ': 1, lol: 2, olo: 2, rol: 1, ' ro': 1, 't r': 1, ' t ': 1}

const tuples = asTuples(' t@rololol ')
// => [
//   ['ol ', 1],
//   ['rol', 1],
//   [' ro', 1],
//   ['t r', 1],
//   [' t ', 1],
//   ['lol', 2],
//   ['olo', 2]
// ]

tuplesAsDictionary(tuples)
// => {olo: 2, lol: 2, ' t ': 1, 't r': 1, ' ro': 1, rol: 1, 'ol ': 1}
```

## API

This package exports the following identifiers: `clean`, `trigrams`,
`asDictionary`, `asTuples`, `tuplesAsDictionary`.
There is no default export.

### `clean(value)`

Clean a value (`string`).
Strips some (for language detection) useless punctuation, symbols, and numbers.
Collapses white space, trims, and lowercases.

### `trigrams(value)`

From a value (`string`), make clean, padded trigrams (see [`n-gram`][n-gram])
(`Array<string>`).

### `asDictionary(value)`

From a value (`string`), get clean trigrams as a dictionary
(`Record<string, number>`): keys are trigrams, values are occurrence counts.

### `asTuples(value)`

From a value (`string`), get clean trigrams with occurrence counts as a tuple
(`Array<[string, number]>`): first index (`0`) the trigram, second (`1`) the
occurrence count.

### `tuplesAsDictionary(tuples)`

Turn trigram tuples (`Array<[string, number]>`) into a dictionary
(`Record<string, number>`).

## Types

This package is fully typed with [TypeScript][].
It exports an additional `Gemoji` type that models its respective interface.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`words/trigrams`](https://github.com/wooorm/trigrams)
    — trigrams for 400+ languages based on UDHR
*   [`words/n-gram`](https://github.com/words/n-gram)
    — get n-grams from text
*   [`wooorm/franc`][franc]
    — natural language detection

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/trigram-utils/workflows/main/badge.svg

[build]: https://github.com/wooorm/trigram-utils/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/trigram-utils.svg

[coverage]: https://codecov.io/github/wooorm/trigram-utils

[downloads-badge]: https://img.shields.io/npm/dm/trigram-utils.svg

[downloads]: https://www.npmjs.com/package/trigram-utils

[size-badge]: https://img.shields.io/bundlephobia/minzip/trigram-utils.svg

[size]: https://bundlephobia.com/result?p=trigram-utils

[npm]: https://docs.npmjs.com/cli/install

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[n-gram]: https://github.com/words/n-gram

[franc]: https://github.com/wooorm/franc
