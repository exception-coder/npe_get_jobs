# n-gram

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Get [n-grams][wiki].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`nGram(n)`](#ngramn)
    *   [`bigram(value)`](#bigramvalue)
    *   [`trigram(value)`](#trigramvalue)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package gets you [bigrams][wiki] (or any n-gram, really).

## When should I use this?

You’re probably dealing with natural language, and know you need this, if
you’re here!

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, 16.0+), install with [npm][]:

```sh
npm install n-gram
```

In Deno with [`esm.sh`][esmsh]:

```js
import {nGram} from 'https://esm.sh/n-gram@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {nGram} from 'https://esm.sh/n-gram@2?bundle'
</script>
```

## Use

```js
import {bigram, trigram, nGram} from 'n-gram'

bigram('n-gram') // ['n-', '-g', 'gr', 'ra', 'am']
nGram(2)('n-gram') // ['n-', '-g', 'gr', 'ra', 'am']

trigram('n-gram') // ['n-g', '-gr', 'gra', 'ram']

nGram(6)('n-gram') // ['n-gram']
nGram(7)('n-gram') // []

// Anything with a `.length` and `.slice` works: arrays too.
bigram(['alpha', 'bravo', 'charlie']) // [['alpha', 'bravo'], ['bravo', 'charlie']]
```

## API

This package exports the identifiers `nGram`, `bigram`, and `trigram`.
There is no default export.

### `nGram(n)`

Create a function that converts a given value to n-grams.

Want padding (to include partial matches)?
Use something like the following: `nGram(2)(' ' + value + ' ')`

### `bigram(value)`

Shortcut for `nGram(2)`.

### `trigram(value)`

Shortcut for `nGram(3)`.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+, 16.0+, and 18.0+.
It also works in Deno and modern browsers.

## Related

*   [`wooorm/franc`](https://github.com/wooorm/franc)
    — natural language detection

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/n-gram/workflows/main/badge.svg

[build]: https://github.com/words/n-gram/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/n-gram.svg

[coverage]: https://codecov.io/github/words/n-gram

[downloads-badge]: https://img.shields.io/npm/dm/n-gram.svg

[downloads]: https://www.npmjs.com/package/n-gram

[size-badge]: https://img.shields.io/bundlephobia/minzip/n-gram.svg

[size]: https://bundlephobia.com/result?p=n-gram

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[wiki]: https://en.wikipedia.org/wiki/N-gram

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/
