# The Plaintext OT Type, with proper unicode positions

This OT type can be used to edit plaintext documents, like sourcecode or
markdown. It allows invertible or non-invertible text operations.

For documentation on the API spec this type implements, see [ottypes/docs](/ottypes/docs).

There's also compatible versions of this library in [C](https://github.com/ottypes/libot), [rust](https://github.com/josephg/textot.rs) and [swift](https://github.com/josephg/libot-swift).

This type is *almost* identical to the original [text type](https://github.com/ottypes/text). The difference is that text-unicode counts positions based on the number of unicode codepoints instead of javascript string length (UCS2 2-byte offsets). For example, "😭" is a single unicode codepoint but `"😭".length === 2` in javascript. In text, this is 2 characters (which propogates what I consider a bug in javascript). In text-unicode, this is counted as just 1 character. Considering it as 1 character is slightly less performant in javascript, but makes interop with other languages much easier.


## Usage

```
# npm add ot-text-unicode
```

then use it like any other OT type:

```javascript
const {type} = require('ot-text-unicode')

type.apply('hi there', [3, {d:5}, '🤖👻💃']) // -> 'hi 🤖👻💃'
```

There are helper methods for simple insert and remove operations:

```javascript
const {type, insert, remove} = require('ot-text-unicode')

const op1 = insert(2, "hi there") // returns [2, "hi there"]

// Operations which delete characters can optionally specify which characters were deleted:
const op2inv = remove(2, "hi there") // returns [2, {d:"hi there"}]
const op2noinv = remove(2, 8) // returns [2, {d:8}]

const addThenRemove = type.compose(op1, op2inv) // Returns [], aka no-op!
```


### Using a rope with text-unicode

This library has also been extended to allow you to specify your own fancy rope type, and apply operations efficiently. Neato 🌯! To use it, you'll need to implement your own rope type, or use a rope library on npm:

```javascript
const myRopeFns = {
  create(str) { return new Rope(str) },
  toString(rope) { return rope.toString() },

  builder(rope) {
    // Used for applying operations
    let pos = 0 // character position in unicode code points

    return {
      skip(n) { pos += n },

      append(s) { // Insert s at the current position
        rope.insert(pos, s)
        pos += unicodeLength(s)
      },

      del(n) { // Delete n characters at the current position
        rope.del(pos, n)
      },

      build() { // Finish!
        return rope
      },
    }
  }
}
```

Then use it:

```javascript
const type = require('ot-text-unicode').makeType(myRopeFns)

let doc = type.create('hi there')
doc = type.apply(doc, [3, {d:5}, '🤖👻💃']) // -> 'hi 🤖👻💃'

// If your rope functions modify doc in-place, so will apply.
```

### Inverting operations

Its often useful to be able to invert an operation to support undo. To invert an operation either:

1. The operation needs to contain a copy of all deleted characters instead of simply specifying how many characters are deleted. Eg, `[{d:'hi'}]` instead of `[{d:2}]`.
2. Or when inverting an operation you can use `type.invertWithDoc(op, doc)`, providing a copy of what the document looked like *before* the operation was applied.

Note invert support has been added recently, and may not be supported by text-unicode implementations in other languages.

```javascript
const {type} = require('ot-text-unicode')

const op1 = [2, {d: 5}] // Delete 5 characters at position 2
type.invert(op1) // ERROR: Will throw because the operation doesn't contain deleted characters

// Option 1: add all deleted characters into the operation:
const op2 = [2, {d: 'hello'}] // Delete 5 characters ('hello') at position 2
type.invert(op2) // Ok - returns `[2, 'hello']`

// Option 2: Use invertWithDoc to generate an operation's inverse
type.invertWithDoc(op1, 'a hello') // Ok - returns `[2, 'hello']`.
```

Invertibility information will be preserved through calls to transform and compose, if all provided operations are invertible. Note this is not the case for some other types, like json1.


### Transforming cursor positions

If you have another user's cursor position, you can transform that cursor using `type.transformPosition` or `type.transformSelection`:

```javascript
const {type} = require('ot-text-unicode')
let doc = '...'
let cursors = [{user: 'jane', pos: 5}, {user: 'fred', pos: 100}]

function onRemoteOp(op) {
  for (let user of cursors) {
    // Update user positions based on the incoming operation
    user.pos = type.transformPosition(user.pos, op)
  }

  doc = type.apply(doc, op)
}
```

**Note** For consistency, just like other methods, `transformPosition` operates on unicode cursor positions, not raw JS string positions. If you're using this with JS string positions, you have two options:

1. (Recommended) Convert your positions to unicode codepoint positions before calling `transformPosition`. The simplest way is to call `cursor = require('unicount').strPosToUni(doc_contents, jsPosition)`.
2. Use the older version of `transformPosition` which operates on raw JS offsets. [Code to do that is in this github gist](https://gist.github.com/josephg/cc0a125a2d6a7637dabc79a865a7483c).


## Spec

The plaintext OT type thinks of the document as a giant unicode string, and
edits index unicode characters in the string. This is different from most text
editors, which break up a document into an array of lines. For small documents
on modern computers, the conversion isn't particularly expensive. However, if
you have giant documents you should be using a rope library like
[jumprope](https://github.com/josephg/jumprope) or
[librope](https://github.com/josephg/librope).

Each operation describes a traversal over the document. The traveral can edit
the document as it goes.

For example, given the document:

```
"ABCDEFG"
```

You could apply the operation

```
[1, ' hi ', 2, {d:3}]
```

This operation will skip (retain) the first character (1), insert ' hi ', skip 2 more
characters then delete the next 3 characters. The result would be:

```
"A hi BCG"
```

### Operation components

Each operation is a list of components. The components describe a traversal of the document, modifying the document along the way. Each component is one of:

- **Number N**: Skip (retain) the next *N* characters in the document
- **"str"**: Insert *"str"* at the current position in the document
- **{d:N}**: Delete *N* characters at the current position in the document
- **{d:"str"}**: Delete the string *"str"* at the current position in the document. This is functionally identical to *{d:N}* but allows an operation to be inverted, which is useful for undo support.

The operation does not have to skip the last characters in the document.


### Selections

The text type also has methods for manipulating selections.

Selection ranges are either a single number (the cursor position) or a pair of
[anchor, focus] numbers (aka [start, end]) of the selection range. Be aware
that end can be before start.


# Other implementations

I have compatible implementations of this OT type in:

- [C](https://github.com/share/libot/blob/master/text.h). This implementation is insanely fast (~20M transforms / second on my old laptop, not that that will ever be a bottleneck.)
- [Rust](https://github.com/josephg/textot.rs). This code is much less mature, but far more concise and beautiful than the C or JS implementations.
- [Swift](https://github.com/josephg/libot-swift)

---

# Commentary

This is the 4th iteration of ShareJS's plaintext type.


The [first
iteration](https://github.com/share/ShareJS/blob/0.6/src/types/text2.coffee) was
similar, except it forces all operations to be invertable. Invertability is
nice, but I want to eventually build an arbitrary P2P OT system, and in a p2p
setting invertibility becomes impractical to achieve. I don't want systems to
depend on it.

The second iteration made each component specify a location and an edit there.
Operations were lists of these edits. Because the components were not sorted,
if you transform two big operations by one another it requires M\*N
time to transform. The components could be sorted to fix this, but if you're
going to do that you may as well just make them sorted by design - which is
what the current text implementation does. I thought the individual edits style
was better because I expected it to be simpler, but when I implemented it I
found the implementation of each method was almost identical in size.

The [3rd iteration](https://github.com/ottypes/text) is 99% identical to this
codebase, except it used UTF16 word offsets instead of unicode codepoints.
This implementation considers emoji 🤸🏼‍♀️ as 1 character. ottypes/text
considers that as 2 characters instead, because it takes a pair of UTF16
values to store (`"🤓".length === 2` in javascript). This makes it awkward to
build cross-platform OT systems spanning platforms which don't accept use JS's
awkward unicode encoding.

---

# License

All code contributed to this repository is licensed under the standard MIT license:

Copyright 2011 ottypes library contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following condition:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



