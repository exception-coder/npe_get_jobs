import {
  TOKEN_GENERAL, TOKEN_HASH, TOKEN_ZERO, TOKEN_QMARK, TOKEN_SLASH, TOKEN_GROUP, TOKEN_SCALE,
  TOKEN_COMMA, TOKEN_BREAK, TOKEN_TEXT, TOKEN_PLUS, TOKEN_MINUS, TOKEN_POINT, TOKEN_SPACE,
  TOKEN_PERCENT, TOKEN_DIGIT, TOKEN_CALENDAR, TOKEN_ERROR, TOKEN_DATETIME, TOKEN_DURATION,
  TOKEN_CONDITION, TOKEN_DBNUM, TOKEN_NATNUM, TOKEN_LOCALE, TOKEN_COLOR, TOKEN_MODIFIER,
  TOKEN_AMPM, TOKEN_ESCAPED, TOKEN_STRING, TOKEN_SKIP, TOKEN_EXP, TOKEN_FILL, TOKEN_PAREN,
  TOKEN_CHAR
} from './constants.js';

const tokenHandlers = [
  [ TOKEN_GENERAL, /^General/i, 0 ],
  [ TOKEN_HASH, /^#/, 0 ],
  [ TOKEN_ZERO, /^0/, 0 ],
  [ TOKEN_QMARK, /^\?/, 0 ],
  [ TOKEN_SLASH, /^\//, 0 ],
  // Commas are dealt with as a special case in the tokenizer but will end up
  // as one of these:
  // [ TOKEN_GROUP, /^(,),*/, 1 ],
  // [ TOKEN_SCALE, /^(,),*/, 1 ],
  // [ TOKEN_COMMA, /^(,),*/, 1 ],
  [ TOKEN_BREAK, /^;/, 0 ],
  [ TOKEN_TEXT, /^@/, 0 ],
  [ TOKEN_PLUS, /^\+/, 0 ],
  [ TOKEN_MINUS, /^-/, 0 ],
  [ TOKEN_POINT, /^\./, 0 ],
  [ TOKEN_SPACE, /^ /, 0 ],
  [ TOKEN_PERCENT, /^%/, 0 ],
  [ TOKEN_DIGIT, /^[1-9]/, 0 ],
  [ TOKEN_CALENDAR, /^(?:B[12])/i, 0 ],
  [ TOKEN_ERROR, /^B$/, 0 ], // pattern must not end in a "B"
  [ TOKEN_DATETIME, /^(?:[hH]+|[mM]+|[sS]+|[yY]+|[bB]+|[dD]+|[gG]+|[aA]{3,}|e+)/, 0 ],
  [ TOKEN_DURATION, /^(?:\[(h+|m+|s+)\])/i, 1 ],
  [ TOKEN_CONDITION, /^\[(<[=>]?|>=?|=)\s*(-?[.\d]+)\]/, [ 1, 2 ] ],
  [ TOKEN_DBNUM, /^\[(DBNum[0-4]?\d)\]/i, 1 ],
  [ TOKEN_NATNUM, /^\[(NatNum[0-4]?\d)\]/i, 1 ],
  [ TOKEN_LOCALE, /^\[\$([^\]]+)\]/, 1 ],
  [ TOKEN_COLOR, /^\[(black|blue|cyan|green|magenta|red|white|yellow|color\s*\d+)\]/i, 1 ],
  // conditionally allow these open ended directions?
  [ TOKEN_MODIFIER, /^\[([^\]]+)\]/, 1 ],
  [ TOKEN_AMPM, /^(?:AM\/PM|am\/pm|A\/P)/, 0 ],
  [ TOKEN_ESCAPED, /^\\(.)/, 1 ],
  [ TOKEN_STRING, /^"([^"]*?)"/, 1 ],
  [ TOKEN_SKIP, /^_(\\.|.)/, 1 ],
  // Google Sheets and Excel diverge on "e": Excel only accepts E.
  [ TOKEN_EXP, /^[Ee]([+-])/, 1 ],
  [ TOKEN_FILL, /^\*(\\.|.)/, 1 ],
  [ TOKEN_PAREN, /^[()]/, 0 ],
  [ TOKEN_ERROR, /^[EÈÉÊËèéêëĒēĔĕĖėĘęĚěȄȅȆȇȨȩNnÑñŃńŅņŇňǸǹ["*/\\_]/, 0 ],
  [ TOKEN_CHAR, /^./, 0 ]
];

const CODE_QMRK = 63;
const CODE_HASH = 35;
const CODE_ZERO = 48;
const CODE_NINE = 57;
const isNumOp = char => {
  const c = (char || '\0').charCodeAt(0);
  return (c === CODE_QMRK || c === CODE_HASH || (c >= CODE_ZERO && c <= CODE_NINE));
};

/**
 * @typedef {object} FormatToken
 * @property {string} type Token type.
 * @property {any} value The value of the token, cleaned of extra characters.
 * @property {string} raw Raw token source.
 */

/**
 * Breaks a format pattern string into a list of tokens.
 *
 * The returned output will be an array of objects representing the tokens:
 *
 * ```js
 * [
 *   { type: 'zero', value: '0', raw: '0' },
 *   { type: 'point', value: '.', raw: '.' },
 *   { type: 'zero', value: '0', raw: '0' },
 *   { type: 'percent', value: '%', raw: '%' }
 * ]
 * ```
 *
 * Token types may be found as an Object as the
 * [`tokenTypes` export]{@link tokenTypes} of the package.
 *
 * @param {string} pattern The format pattern
 * @returns {FormatToken[]} a list of tokens
 */
export function tokenize (pattern) {
  let i = 0;
  const tokens = [];
  const unresolvedCommas = [];
  while (i < pattern.length) {
    const curr = pattern.slice(i);
    let step = 0;
    // A comma is context sensitive and needs to be handled as a special case.
    // This needs to happen in the tokenizer because to be able to re-localize
    // the pattern we'll need to know what each comma means.
    const mComma = /^(,+)(.)?/.exec(curr);
    if (mComma) {
      // comma depends on what it follows
      const raw = mComma[1];
      step = raw.length;
      const lookBehind = pattern[i - 1] || '';
      let maybeGROUP = false;
      let maybeSCALE = false;
      if (isNumOp(lookBehind)) { // 0-9, '#', or '?': may be GROUP or SCALE
        maybeGROUP = true;
        maybeSCALE = true;
      }
      else if (lookBehind === '.') { // '.': may be SCALE only
        maybeSCALE = true;
      }
      // if at the end of the pattern or section, then this can't be a GROUP op
      const lookAhead = mComma[2] || '';
      if (maybeGROUP && (!lookAhead || lookAhead === ';')) {
        maybeGROUP = false;
      }
      // if next char is a num token, then this cannot be a SCALE op
      if (maybeSCALE && isNumOp(lookAhead)) {
        maybeSCALE = false;
      }
      if (maybeGROUP && !maybeSCALE) {
        tokens.push({ type: TOKEN_GROUP, value: ',', raw });
      }
      else if (!maybeGROUP && maybeSCALE) {
        tokens.push({ type: TOKEN_SCALE, value: ',', raw });
      }
      else if (maybeGROUP && maybeSCALE) {
        // this token will be set to scale, but switched to group if we hit a
        // num token later on in the pattern...
        const t = { type: TOKEN_SCALE, value: ',', raw };
        tokens.push(t);
        unresolvedCommas.push(t);
      }
      else {
        tokens.push({ type: TOKEN_COMMA, value: ',', raw });
      }
    }
    // all other symbols are matched using 
    else {
      let token;
      for (const [ type, expr, group ] of tokenHandlers) {
        const m = expr.exec(curr);
        if (m) {
          const value = Array.isArray(group)
            ? group.map(d => m[d])
            : m[group || 0];
          token = { type, value, raw: m[0] };
          tokens.push(token);
          step = m[0].length;
          break;
        }
      }
      // if we just matched a break, then deal with any unresolved commas
      if (unresolvedCommas.length && token.raw === ';') {
        unresolvedCommas.length = 0;
      }
      // if we just matched a num operator, then deal with any unresolved commas
      if (unresolvedCommas.length && isNumOp(token.raw)) {
        unresolvedCommas.forEach(d => (d.type = TOKEN_GROUP));
        unresolvedCommas.length = 0;
      }
    }
    if (!step) {
      const raw = curr[0];
      step = 1;
      tokens.push({ type: TOKEN_CHAR, value: raw, raw });
    }
    i += step;
  }
  return tokens;
}
