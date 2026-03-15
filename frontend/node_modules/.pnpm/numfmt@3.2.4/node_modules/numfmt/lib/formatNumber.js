import { TOKEN_TEXT, indexColors } from './constants.js';
import { defaultLocale, getLocale } from './locale.js';
import { parseFormatSection } from './parseFormatSection.js';
import { runPart } from './runPart.js';

const default_text = parseFormatSection([
  { type: TOKEN_TEXT, value: '@', raw: '@' }
]);

function getPart (value, parts) {
  for (let pi = 0; pi < 3; pi++) {
    const part = parts[pi];
    if (part) {
      let cond;
      if (part.condition) {
        const operator = part.condition[0];
        const operand = part.condition[1];
        if (operator === '=') { cond = (value === operand); }
        else if (operator === '>') { cond = (value > operand); }
        else if (operator === '<') { cond = (value < operand); }
        else if (operator === '>=') { cond = (value >= operand); }
        else if (operator === '<=') { cond = (value <= operand); }
        else if (operator === '<>') { cond = (value !== operand); }
      }
      else {
        cond = true;
      }
      if (cond) {
        return part;
      }
    }
  }
  // eslint-disable-next-line
  return undefined;
}

export function formatColor (value, parseData, opts) {
  const parts = parseData.partitions;
  let part = parts[3];
  let color = null;
  if ((typeof value === 'number' || typeof value === 'bigint') && isFinite(value)) {
    part = getPart(value, parts);
  }
  if (part && part.color) {
    color = part.color;
  }
  if (color && typeof color === 'number' && opts.indexColors) {
    color = indexColors[color - 1] || '#000';
  }
  return color;
}

export function formatValue (value, parseData, opts) {
  const parts = parseData.partitions;
  const l10n = getLocale(parseData.locale || opts.locale);
  // not a number?
  const text_part = parts[3] ? parts[3] : default_text;
  if (typeof value === 'boolean') {
    const loc = l10n || defaultLocale;
    value = loc.bool[value ? 0 : 1];
  }
  if (value == null) {
    return '';
  }
  const n = typeof value === 'bigint';
  if (typeof value !== 'number' && !n) {
    return runPart(value, text_part, opts, l10n);
  }
  // guard against non-finite numbers:
  if (!n && !isFinite(value)) {
    const loc = l10n || defaultLocale;
    if (isNaN(value)) { return loc.nan; }
    return (value < 0 ? loc.negative : '') + loc.infinity;
  }
  // find and run the pattern part that applies to this number
  const part = getPart(value, parts);
  return part ? runPart(value, part, opts, l10n) : opts.overflow;
}
