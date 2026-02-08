# regexp-util

[![npm](https://img.shields.io/npm/v/regexp-util.svg)](https://www.npmjs.com/package/regexp-util)
[![build](https://img.shields.io/github/actions/workflow/status/ikatyang/regexp-util/test.yml)](https://github.com/ikatyang/regexp-util/actions?query=branch%3Amain)

utilities for generating regular expression

[Changelog](https://github.com/ikatyang/regexp-util/blob/main/CHANGELOG.md)

## Install

```sh
npm install regexp-util
```

## Usage

```ts
import { charset } from 'regexp-util'

const regex = util
  .charset(['a', 'g']) // a ~ g
  .subtract(['c', 'e'])
  .toRegExp()

const aResult = 'a'.test(regex) //=> true
const dResult = 'd'.test(regex) //=> false
```

## API

### Base

```ts
declare abstract class Base {
  isEmpty(): boolean
  toString(flags?: string): string
  toRegExp(flags?: string): RegExp
}
```

### Charset

```ts
declare type CharsetInput =
  | Charset
  | string // char
  | number // codepoint
  | [string, string] // char: start to end (inclusive)
  | [number, number] // codepoint: start to end (inclusive)

declare function charset(...inputs: CharsetInput[]): Charset

declare class Charset extends Base {
  constructor(...inputs: CharsetInput[])
  union(...inputs: CharsetInput[]): Charset
  subtract(...inputs: CharsetInput[]): Charset
  intersect(...inputs: CharsetInput[]): Charset
}
```

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
