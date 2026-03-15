
export const strPosToUni = (s: string, strOffset: number = s.length) => {
  let pairs = 0
  let i = 0
  for (; i < strOffset; i++) {
    const code = s.charCodeAt(i)
    if (code >= 0xd800 && code <= 0xdfff) {
      pairs++
      i++ // Skip the second part of the pair.
    }
  }
  if (i !== strOffset) throw Error('Invalid offset - splits unicode bytes')
  return i - pairs
}

export const uniToStrPos = (s: string, uniOffset: number) => {
  let pos = 0
  for (; uniOffset > 0; uniOffset--) {
    const code = s.charCodeAt(pos)
    pos += code >= 0xd800 && code <= 0xdfff ? 2 : 1
  }
  return pos
}
