# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [4.2.0](https://github.com/ikatyang-collab/unicode-regex/compare/v4.1.2...v4.2.0) (2025-08-30)

### Features

- support Unicode 17 ([#310](https://github.com/ikatyang-collab/unicode-regex/issues/310)) ([5e7366f](https://github.com/ikatyang-collab/unicode-regex/commit/5e7366f958bfe7e2dff5640b891eeb3f52a8d794))

## [4.1.2](https://github.com/ikatyang-collab/unicode-regex/compare/v4.1.1...v4.1.2) (2025-03-08)

## [4.1.1](https://github.com/ikatyang/unicode-regex/compare/v4.1.0...v4.1.1) (2025-03-08)

# [4.1.0](https://github.com/ikatyang/unicode-regex/compare/v4.0.0...v4.1.0) (2025-03-07)

### Features

- support Unicode 15.1 ([#302](https://github.com/ikatyang/unicode-regex/issues/302)) ([068792d](https://github.com/ikatyang/unicode-regex/commit/068792dbf7661893c740a4fa58e0e4552e14c0d9))
- support Unicode 16 ([#303](https://github.com/ikatyang/unicode-regex/issues/303)) ([29ccf73](https://github.com/ikatyang/unicode-regex/commit/29ccf7324b9352de08d1768b36b4509bf6d0f89d))

# [4.0.0](https://github.com/ikatyang/unicode-regex/compare/v3.0.0...v4.0.0) (2023-07-09)

### Build System

- update infra ([#298](https://github.com/ikatyang/unicode-regex/issues/298)) ([4270f16](https://github.com/ikatyang/unicode-regex/commit/4270f16ae9d679a93a1dffc08700568452c162dd))

### Features

- support Unicode 15.0.0 ([#299](https://github.com/ikatyang/unicode-regex/issues/299)) ([775d18e](https://github.com/ikatyang/unicode-regex/commit/775d18e4ecf693689b421cf3d41cdfd496af4eb2))

### BREAKING CHANGES

- upgrade Unicode data from v12.1.0 to v15.0.0
- this package is now pure ESM

<a name="3.0.0"></a>

# [3.0.0](https://github.com/ikatyang/unicode-regex/compare/v2.0.0...v3.0.0) (2019-09-29)

### Features

- support Unicode 12.1.0 ([#256](https://github.com/ikatyang/unicode-regex/issues/256)) ([d27a16f](https://github.com/ikatyang/unicode-regex/commit/d27a16f))

### BREAKING CHANGES

- upgrade Unicode data from v10.0.0 to v12.1.0

<a name="2.0.0"></a>

# [2.0.0](https://github.com/ikatyang/unicode-regex/compare/v1.0.1...v2.0.0) (2018-02-09)

### Features

- rewrite with `node-unicode-data` and `regexp-util` ([#57](https://github.com/ikatyang/unicode-regex/issues/57)) ([c26d703](https://github.com/ikatyang/unicode-regex/commit/c26d703))

### BREAKING CHANGES

More categories, processable output, and adding codepoints that's greater than `0xffff`.

```js
// before
unicode_regex(['Pc', 'Pd', 'Pe', 'Pf', 'Pi', 'Po', 'Ps'])

// after
unicode({ General_Category: ['Punctuation'] }).toRegExp()
```

<a name="1.0.1"></a>

## [1.0.1](https://github.com/ikatyang/unicode-regex/compare/v1.0.0...v1.0.1) (2017-11-12)

### Bug Fixes

- no invalid pattern ([#1](https://github.com/ikatyang/unicode-regex/issues/1)) ([fcc7caa](https://github.com/ikatyang/unicode-regex/commit/fcc7caa))

<a name="1.0.0"></a>

# 1.0.0 (2017-11-12)

### Features

- initial implementation ([3b18748](https://github.com/ikatyang/unicode-regex/commit/3b18748))
