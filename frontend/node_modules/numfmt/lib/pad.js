/**
 * @ignore
 * @param {string} c Instruction character (['#', '?', '0'])
 * @param {boolean} [nbsp=false] Use nonbreaking space or not?
 * @returns {string} Padding character
 */
export function pad (c, nbsp = false) {
  if (c === '0') {
    return '0';
  }
  else if (c === '?') {
    return nbsp ? '\u00a0' : ' ';
  }
  // if (c === '#')
  return '';
}
