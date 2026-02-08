# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.3](https://github.com/ikatyang-collab/regexp-util/compare/v2.0.2...v2.0.3) (2025-03-08)

## [2.0.2](https://github.com/ikatyang-collab/regexp-util/compare/v2.0.1...v2.0.2) (2025-03-08)

## [2.0.1](https://github.com/ikatyang/regexp-util/compare/v2.0.0...v2.0.1) (2025-03-07)

# [2.0.0](https://github.com/ikatyang/regexp-util/compare/v1.2.2...v2.0.0) (2023-07-09)

### Build System

- update infra ([#93](https://github.com/ikatyang/regexp-util/issues/93)) ([2326539](https://github.com/ikatyang/regexp-util/commit/2326539e617ce23e1e564ccf5b96221fd495203b))

### Code Refactoring

- replace snake_case with camelCase ([d337df6](https://github.com/ikatyang/regexp-util/commit/d337df634484d419c93b50e93c9f628cd7222a99))

### Features

- do not use surrogate pair if u-flag is specified ([978e5e5](https://github.com/ikatyang/regexp-util/commit/978e5e570a1502bb42c4de429ab73a2c9f6db591))

### BREAKING CHANGES

- `_is_empty`/`_to_string` has been renamed with `_isEmpty`/`_toString`
- this package is now pure ESM

<a name="1.2.2"></a>

## [1.2.2](https://github.com/ikatyang/regexp-util/compare/v1.2.1...v1.2.2) (2018-03-21)

### Bug Fixes

- **charset:** union with central overlap ([#26](https://github.com/ikatyang/regexp-util/issues/26)) ([d44823e](https://github.com/ikatyang/regexp-util/commit/d44823e))

<a name="1.2.1"></a>

## [1.2.1](https://github.com/ikatyang/regexp-util/compare/v1.2.0...v1.2.1) (2018-03-20)

### Bug Fixes

- **charset:** subtraction with multi central overlap ([#25](https://github.com/ikatyang/regexp-util/issues/25)) ([f6595ef](https://github.com/ikatyang/regexp-util/commit/f6595ef))

<a name="1.2.0"></a>

# [1.2.0](https://github.com/ikatyang/regexp-util/compare/v1.1.0...v1.2.0) (2018-02-09)

### Features

- **charset:** support surrogate pair ([#8](https://github.com/ikatyang/regexp-util/issues/8)) ([024764a](https://github.com/ikatyang/regexp-util/commit/024764a))

<a name="1.1.0"></a>

# [1.1.0](https://github.com/ikatyang/regexp-util/compare/v1.0.0...v1.1.0) (2018-02-05)

### Features

- **charset:** throw on invalid unicode code point ([#6](https://github.com/ikatyang/regexp-util/issues/6)) ([b412982](https://github.com/ikatyang/regexp-util/commit/b412982))

<a name="1.0.0"></a>

# 1.0.0 (2018-02-05)

### Features

- initial implementation
