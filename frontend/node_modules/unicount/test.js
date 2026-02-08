const assert = require('assert')
const {strPosToUni, uniToStrPos} = require('.')


// Characters in the U+0000-U+D7FF and U+E000-U+FFFF are UTF16 encoded to a single character
;['x', 'ﬀ'].forEach(c => {
  const str = c + '123'
  assert.strictEqual(strPosToUni(str, 1), 1)
  assert.strictEqual(strPosToUni(str), 4)

  assert.strictEqual(uniToStrPos(str, 1), 1)
  assert.strictEqual(uniToStrPos(str, 4), 4)
})

// Characters from U+10000 are encoded using surrogate pairs.
// The U+D800 to U+DFFF range is reserved and will never be assigned.
assert.strictEqual(strPosToUni('💃123', 2), 1)
assert.strictEqual(strPosToUni('💃123'), 4)

assert.strictEqual(uniToStrPos('💃123', 1), 2)
assert.strictEqual(uniToStrPos('💃123', 4), 5)
