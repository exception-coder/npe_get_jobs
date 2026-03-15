/* eslint-disable padded-blocks */
import { resolveLocale } from './locale.js';
import {
  u_YEAR, u_MONTH, u_DAY, u_HOUR, u_MIN, u_SEC, u_DSEC, u_CSEC, u_MSEC,
  EPOCH_1900, EPOCH_1317,
  TOKEN_AMPM, TOKEN_BREAK, TOKEN_CALENDAR, TOKEN_CHAR, TOKEN_COLOR, TOKEN_COMMA, TOKEN_CONDITION,
  TOKEN_DATETIME, TOKEN_DBNUM, TOKEN_DIGIT, TOKEN_DURATION, TOKEN_ERROR, TOKEN_ESCAPED, TOKEN_EXP,
  TOKEN_FILL, TOKEN_GENERAL, TOKEN_GROUP, TOKEN_HASH, TOKEN_LOCALE, TOKEN_MINUS, TOKEN_NATNUM,
  TOKEN_PAREN, TOKEN_PERCENT, TOKEN_PLUS, TOKEN_POINT, TOKEN_QMARK, TOKEN_SCALE, TOKEN_SKIP,
  TOKEN_SLASH, TOKEN_SPACE, TOKEN_STRING, TOKEN_TEXT, TOKEN_ZERO
} from './constants.js';

function minMaxPad (str, part, prefix) {
  part[prefix + '_max'] = str.length;
  part[prefix + '_min'] = str.replace(/#/g, '').length;
  return part;
}

function add (s, tokens) {
  // allow adding string tokens without wrapping
  if (typeof s === 'string') {
    tokens.push({ type: 'string', value: s });
  }
  else {
    tokens.push(s);
  }
}

function isNumOp (token, activePattern) {
  const type = token && token.type;
  return (
    (type === TOKEN_HASH || type === TOKEN_ZERO || type === TOKEN_QMARK) ||
    (type === TOKEN_DIGIT && activePattern === 'den')
  );
}

export function parseFormatSection (inputTokens) {
  const outputTokens = [];

  const part = {
    scale: 1,
    percent: false,
    text: false,
    date: 0,
    date_eval: false,
    date_system: EPOCH_1900,
    sec_decimals: 0,
    general: false,
    clock: 24,
    int_pattern: [],
    frac_pattern: [],
    man_pattern: [],
    den_pattern: [],
    num_pattern: [],
    tokens: outputTokens
  };

  let currentPattern = 'int';
  let lastNumberChunk = null;
  const dateChunks = [];
  let last;
  let haveLocale = false;

  let index = -1;
  let partOver = false;
  let patternSource = '';
  let haveSlash = false;

  while (++index < inputTokens.length && !partOver) {
    const token = inputTokens[index];
    const type = token.type || TOKEN_ERROR;
    patternSource += token.raw;

    if (type === TOKEN_GENERAL) {
      part.general = true;
      add(token, outputTokens);
    }

    // new partition
    else if (isNumOp(token, currentPattern)) {
      const pt = part[currentPattern + '_pattern'];
      if (isNumOp(last, currentPattern) || last?.type === TOKEN_GROUP) {
        // append to current
        pt.push((pt.pop() || '') + token.value);
        lastNumberChunk.num += token.value;
      }
      else {
        // new number section
        pt.push(token.value);
        lastNumberChunk = { type: currentPattern, num: token.value };
        add(lastNumberChunk, outputTokens);
      }
    }

    else if (type === TOKEN_PAREN) {
      if (token.value === '(') {
        part.parens = true;
      }
      add(token.value, outputTokens);
    }
    else if (type === TOKEN_DIGIT) {
      // just print it
      add(token.value, outputTokens);
    }

    // vulgar fractions
    else if (type === TOKEN_SLASH) {
      haveSlash = true;
      if (part[currentPattern + '_pattern'].length) {
        if (!lastNumberChunk) { // need to have a numerator present
          throw new SyntaxError('Format pattern is missing a numerator');
        }
        part.fractions = true;
        // ... we just passed the numerator - correct that item
        part.num_pattern.push(part[currentPattern + '_pattern'].pop());
        lastNumberChunk.type = 'num';
        // next up... the denominator
        currentPattern = 'den';
        add({ type: 'div' }, outputTokens);
      }
      else {
        add(token.value, outputTokens);
      }
    }

    else if (type === TOKEN_COMMA) {
      add(',', outputTokens);
    }
    else if (type === TOKEN_SCALE) {
      part.scale = 0.001 ** token.raw.length;
    }
    else if (type === TOKEN_GROUP) {
      if (currentPattern === 'int') {
        part.grouping = true;
      }
      if (currentPattern === 'den') {
        throw new SyntaxError('Cannot group denominator digits');
      }
      // else we just ignore it!
    }

    else if (type === TOKEN_SPACE) {
      add(token, outputTokens);
    }

    else if (type === TOKEN_BREAK) {
      partOver = true;
      break; // leave the ";" hanging
    }

    else if (type === TOKEN_TEXT) { // @
      part.text = true;
      add(token, outputTokens);
    }
    else if (type === TOKEN_PLUS || type === TOKEN_MINUS) {
      add(token, outputTokens);
    }

    // [h] [m] [s]
    // else if ((m = /^(?:\[(h+|m+|s+)\])/i.exec(s))) {
    else if (type === TOKEN_DURATION) {
      const tokenValue = token.value.toLowerCase(); // deal with in tokenizer
      const startsWith = tokenValue[0];
      const bit = { type: '', size: 0, date: 1, pad: tokenValue.length };
      if (startsWith === 'h') {
        bit.size = u_HOUR;
        bit.type = 'hour-elap';
      }
      else if (startsWith === 'm') {
        bit.size = u_MIN;
        bit.type = 'min-elap';
      }
      else {
        bit.size = u_SEC;
        bit.type = 'sec-elap';
      }
      // signal date calc and track smallest needed unit
      part.date = part.date | bit.size;
      dateChunks.push(bit);
      add(bit, outputTokens);
    }
    // Note: In locales where decimal symbol is set to "," Excel will expect
    //       "," rather than a ".". This must be solved by re-localizing the
    //       pattern before using it.
    // .0 .00 .000
    else if (part.date && type === TOKEN_POINT && inputTokens[index + 1]?.type === TOKEN_ZERO) {
      let dec = 1;
      index++;
      let raw = '0';
      if (inputTokens[index + 1]?.type === TOKEN_ZERO) {
        raw += '0';
        dec = 2;
        index++;
      }
      if (inputTokens[index + 1]?.type === TOKEN_ZERO) {
        raw += '0';
        dec = 3;
        index++;
      }
      patternSource += raw;
      const size = [ u_SEC, u_DSEC, u_CSEC, u_MSEC ][dec];
      part.date = part.date | size;
      part.date_eval = true;
      part.sec_decimals = Math.max(part.sec_decimals, dec);
      add({
        type: 'subsec',
        size: size,
        decimals: dec,
        date: 1
      }, outputTokens);
    }

    else if (type === TOKEN_CALENDAR) {
      // signal date system (ignored if defined with [$-xxx])
      if (!haveLocale) {
        // Use Hijri calendar system
        if (token.value === 'B2' || token.value === 'b2') {
          // TODO: B2 does more than this
          // it switches locale to [$-060401] (ar) which affects display (RTL)
          part.date_system = EPOCH_1317;
        }
        // Use Gregorian calendar system
        else { // B1 | b1
          // signal date system (ignored if defined with [$-xxx])
          part.date_system = EPOCH_1900;
        }
      }
    }

    // hh:mm:ss YYYY-MM-DD
    else if (type === TOKEN_DATETIME) {
      // Excel is "mostly" case insensitive here except it checks the last used
      // date token. Which, if it was s or h, minutes is used. The same is true
      // if we hit m or s, and last is m.
      // m and mm are spurious, mmm is always month
      const bit = { type: '', size: 0, date: 1 };
      const value = token.value.toLowerCase(); // deal with in tokenizer?
      const startsWith = value[0];
      if (value === 'y' || value === 'yy') {
        bit.size = u_YEAR;
        bit.type = 'year-short';
      }
      else if (startsWith === 'y' || startsWith === 'e') {
        bit.size = u_YEAR;
        bit.type = 'year';
      }
      else if (value === 'b' || value === 'bb') {
        bit.size = u_YEAR;
        bit.type = 'b-year-short';
      }
      else if (startsWith === 'b') {
        bit.size = u_YEAR;
        bit.type = 'b-year';
      }
      else if (value === 'd' || value === 'dd') {
        bit.size = u_DAY;
        bit.type = 'day';
        bit.pad = /dd/.test(value);
      }
      else if (value === 'ddd' || value === 'aaa') {
        bit.size = u_DAY;
        bit.type = 'weekday-short';
      }
      else if (startsWith === 'd' || startsWith === 'a') {
        bit.size = u_DAY;
        bit.type = 'weekday';
      }
      else if (startsWith === 'h') {
        bit.size = u_HOUR;
        bit.type = 'hour';
        bit.pad = /hh/i.test(value);
      }
      else if (startsWith === 'm') {
        if (value.length === 3) {
          bit.size = u_MONTH;
          bit.type = 'monthname-short';
        }
        else if (value.length === 5) {
          bit.size = u_MONTH;
          bit.type = 'monthname-single';
        }
        else if (value.length >= 4) {
          bit.size = u_MONTH;
          bit.type = 'monthname';
        }
        // m or mm can be either minute or month based on context
        const last_date_chunk = dateChunks[dateChunks.length - 1];
        if (!bit.type && last_date_chunk &&
            !last_date_chunk.used &&
            (last_date_chunk.size & (u_HOUR | u_SEC))) {
          // if this value follows hour or second, it is a minute
          last_date_chunk.used = true;
          bit.size = u_MIN;
          bit.type = 'min';
          bit.pad = /mm/.test(value);
        }
        // if we still don't know, we treat as a month
        // and defer, a later 'sec' value may switch it
        if (!bit.type) {
          bit.size = u_MONTH;
          bit.type = 'month';
          bit.pad = /mm/.test(value);
          bit.indeterminate = true;
        }
      }
      else if (startsWith === 's') {
        bit.size = u_SEC;
        bit.type = 'sec';
        bit.pad = /ss/.test(value);
        // if last date chunk was m, flag this used
        const last_date_chunk = dateChunks[dateChunks.length - 1];
        if (last_date_chunk && last_date_chunk.size & u_MIN) {
          bit.used = true;
        }
        // if last date chunk is undecided, we know that it is a minute
        else if (last_date_chunk && last_date_chunk.indeterminate) {
          delete last_date_chunk.indeterminate;
          last_date_chunk.size = u_MIN;
          last_date_chunk.type = 'min';
          bit.used = true;
        }
      }
      else if (startsWith === 'g') {
        // TODO: Don't know what this does? (yet!)
      }
      // signal date calc and track smallest needed unit
      part.date = part.date | bit.size;
      part.date_eval = true;
      dateChunks.push(bit);
      add(bit, outputTokens);
    }

    // AM/PM
    // See: https://github.com/SheetJS/sheetjs/issues/676
    else if (type === TOKEN_AMPM) {
      part.clock = 12;
      part.date = part.date | u_HOUR;
      part.date_eval = true;
      // deal with in tokenizer?
      token.short = token.value === 'A/P';
      add(token, outputTokens);
    }

    // escaped character, string
    else if (type === TOKEN_STRING || type === TOKEN_ESCAPED || type === TOKEN_CHAR) {
      add(token.value, outputTokens);
    }

    // condition
    else if (type === TOKEN_CONDITION) {
      part.condition = [
        token.value[0], // operator
        parseFloat(token.value[1]) // operand
      ];
    }

    // locale code -- we allow std. "en-US" style codes
    // https://stackoverflow.com/questions/54134729/what-does-the-130000-in-excel-locale-code-130000-mean/54540455#54540455
    else if (type === TOKEN_LOCALE) {
      const bits = token.value.split('-');
      const code = bits.length < 2 ? '' : bits.slice(1).join('-');

      const currency = bits[0];
      if (currency) {
        add(currency, outputTokens);
      }

      const l4e = resolveLocale(code);
      if (l4e) { part.locale = l4e; }
      const wincode = parseInt(code, 16);
      if (isFinite(wincode) && (wincode & 0xff0000)) {
        const cal = (wincode >> 16) & 0xff;
        // only Hijri is supported atm.
        if (cal === 6) { part.date_system = EPOCH_1317; }
      }

      haveLocale = true; // ignore any B2 & B1 tokens
    }

    // color
    else if (type === TOKEN_COLOR) {
      let cm;
      let v = token.value.toLowerCase();
      if ((cm = /^color\s*(\d+)$/i.exec(v))) {
        v = parseInt(cm[1], 10);
      }
      part.color = v;
    }

    // percentage
    else if (type === TOKEN_PERCENT) {
      part.scale = 100;
      part.percent = true;
      add('%', outputTokens);
    }

    // decimal fraction
    else if (type === TOKEN_POINT) {
      add(token, outputTokens);
      if (!part.date) {
        part.dec_fractions = true;
        currentPattern = 'frac';
      }
    }

    // exponent
    else if (type === TOKEN_EXP) {
      // Exponent pattern requires symbol to directly follow "E" but the
      // signature symbol, however, prefixes the first digit of the mantissa
      part.exponential = true;
      part.exp_plus = token.value.includes('+');
      currentPattern = 'man';
      add({ type: 'exp', plus: part.exp_plus }, outputTokens);
    }

    // skip width
    else if (type === TOKEN_SKIP) {
      add(token, outputTokens);
    }

    // fill space with next char
    else if (type === TOKEN_FILL) {
      add(token, outputTokens);
    }

    else if (type === TOKEN_DBNUM || type === TOKEN_NATNUM) {
      // UNSUPPORTED:
      // - DBNum1 = NatNum4
      // - DBNum2 = NatNum5
      // - DBNum3 = either NatNum6 or NatNum3?
      // - DBNum3 = NatNum10
      // NatNum: https://www.openoffice.org/api/docs/common/ref/com/sun/star/i18n/NativeNumberMode.html
    }

    else if (type === TOKEN_ERROR) {
      throw new SyntaxError(`Illegal character: ${patternSource}`);
    }

    else {
      throw new SyntaxError(`Unknown token ${type} in ${patternSource}`);
    }

    // advance parser
    last = token;
  }
  part.tokensUsed = index;
  part.pattern = patternSource;

  // Quickly determine if this pattern is condition only
  // if so, then add String(value) but using the condition
  if (/^((?:\[[^\]]+\])+)(;|$)/.test(part.pattern) && !/^\[(?:h+|m+|s+)\]/.test(part.pattern)) {
    add({ type: 'text' }, outputTokens);
  }

  // Make sure we don't have an illegal pattern. We could support some of this
  // but we side with Excel and don't because they make no sense.
  if (
    (part.fractions && part.dec_fractions) ||
    (part.grouping && !part.int_pattern.length) ||
    (part.fractions && part.exponential) ||
    (part.fractions && (part.den_pattern.length * part.num_pattern.length) === 0) ||
    (haveSlash && !part.fractions && !part.date) ||
    (part.exponential && ((part.int_pattern.length || part.frac_pattern.length) * part.man_pattern.length) === 0)
  ) {
    throw new SyntaxError(`Invalid pattern: ${patternSource}`);
  }

  const intPattern = part.int_pattern.join('');
  const manPattern = part.man_pattern.join('');
  const fracPattern = part.frac_pattern.join('');
  minMaxPad(intPattern, part, 'int');
  let min = 0;
  for (let i = 0; i < intPattern.length; i++) {
    const ch = intPattern[intPattern.length - 1 - i];
    if (/^[0-9?]/.test(ch)) {
      min = i + 1;
    }
  }
  part.int_min = min;

  minMaxPad(fracPattern, part, 'frac');
  minMaxPad(manPattern, part, 'man');

  let num_pat = part.num_pattern.join('');
  // let den_pat = part.den_pattern.join('');
  let den_pat = part.den_pattern[0] || '';
  const enforce_padded = den_pat.includes('?') || num_pat.includes('?');
  // numerical denominator padding type is inherited from numerator padding type
  if (enforce_padded) {
    den_pat = den_pat.replace(/\d/g, '?');
    den_pat = den_pat.replace(/#$/g, '?');
    minMaxPad(num_pat, part, 'num');
    minMaxPad(den_pat, part, 'den');
    num_pat = num_pat.replace(/#$/g, '?');
  }
  else {
    minMaxPad(num_pat, part, 'num');
    minMaxPad(den_pat, part, 'den');
  }

  part.int_p = intPattern;
  part.man_p = manPattern;
  part.num_p = num_pat;
  part.den_p = den_pat;

  if (part.den_pattern.length) {
    // detect and set rounding factor for denominator
    part.denominator = parseInt(part.den_pattern.join('').replace(/\D/g, ''), 10);
  }

  part.integer = !!intPattern.length;

  if (!part.integer && !part.exponential && fracPattern.length) {
    // if no integer has been found, we inject one
    const pointIdx = part.tokens.findIndex(d => d.type === 'point');
    part.tokens.splice(pointIdx, 0, { type: 'int', value: '#' });
    part.integer = true;
    part.int_pattern = [ '#' ];
    part.int_p = '#';
  }

  // extra whitespace rules for vulgar fractions
  if (part.fractions) {
    // fragment bits affect surrounding whitespace
    // if either bit is "#", the whitespace around it, and
    // the div symbol, is removed if the bit is not shown
    for (let i = 0; i < outputTokens.length - 1; i++) {
      const tok = outputTokens[i];
      if (tok.type !== 'string' && tok.type !== 'space') {
        continue;
      }
      const nextType = outputTokens[i + 1].type;
      if (nextType === 'num') {
        tok.rule = 'num+int';
      }
      else if (nextType === 'div') {
        tok.rule = 'num';
      }
      else if (nextType === 'den') {
        tok.rule = 'den';
      }
      else {
        // tok.rule = '???';
      }
    }
  }

  // if the number is fragmented, grouping should not be applied
  if (part.grouping) {
    if (part.int_pattern.length > 1) {
      part.grouping = false;
    }
  }

  return part;
}
