# unicode-regex

[![npm](https://img.shields.io/npm/v/unicode-regex.svg)](https://www.npmjs.com/package/unicode-regex)
[![build](https://img.shields.io/github/actions/workflow/status/ikatyang/unicode-regex/test.yml)](https://github.com/ikatyang/unicode-regex/actions?query=branch%3Amain)

regular expression for matching unicode category.

[Changelog](https://github.com/ikatyang/unicode-regex/blob/main/CHANGELOG.md)

## Install

```sh
npm install unicode-regex
```

## Usage

```js
import unicode from 'unicode-regex'

const regex = unicode({ General_Category: ['Punctuation'] }).toRegExp()
regex.test('a') //=> false
regex.test('"') //=> true
regex.test('“') //=> true
```

## API

```ts
declare function unicode(categories: {
  [category: string]: SubCategory[]
}): Charset
```

Returns a [Charset](https://github.com/ikatyang/regexp-util#charset) for further processing, e.g. union, intersect, etc.

(Data from [`node-unicode-data`](https://github.com/mathiasbynens/node-unicode-data))

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
