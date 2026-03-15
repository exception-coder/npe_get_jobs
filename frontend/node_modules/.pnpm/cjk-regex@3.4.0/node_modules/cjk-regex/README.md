# cjk-regex

[![npm](https://img.shields.io/npm/v/cjk-regex.svg)](https://www.npmjs.com/package/cjk-regex)
[![build](https://img.shields.io/github/actions/workflow/status/ikatyang/cjk-regex/test.yml)](https://github.com/ikatyang/cjk-regex/actions?query=branch%3Amain)

regular expression for matching CJK text

[Changelog](https://github.com/ikatyang/cjk-regex/blob/main/CHANGELOG.md)

## Install

```sh
npm install cjk-regex
```

## Usage

```js
import * as cjk from 'cjk-regex'

const cjkCharset = cjk.all()
cjkCharset.toRegExp().test('a') //=> false
cjkCharset.toRegExp().test('。') //=> true
cjkCharset.toRegExp().test('中') //=> true

const cjkLetterCharset = cjk.letters()
cjkLetterCharset.toRegExp().test('a') //=> false
cjkLetterCharset.toRegExp().test('。') //=> false
cjkLetterCharset.toRegExp().test('中') //=> true

const cjkPunctuationCharset = cjk.punctuations()
cjkPunctuationCharset.toRegExp().test('a') //=> false
cjkPunctuationCharset.toRegExp().test('。') //=> true
cjkPunctuationCharset.toRegExp().test('中') //=> false
```

Returns a [Charset](https://github.com/ikatyang/regexp-util#charset).

## Development

```sh
# lint
pnpm run lint

# build
pnpm run build

# test
pnpm run test
```

## License

MIT © [Ika](https://github.com/ikatyang)
