/* eslint-disable array-element-newline */
export const u_YEAR = 2;
export const u_MONTH = 2 ** 2;
export const u_DAY = 2 ** 3;
export const u_HOUR = 2 ** 4;
export const u_MIN = 2 ** 5;
export const u_SEC = 2 ** 6;
export const u_DSEC = 2 ** 7; // decisecond
export const u_CSEC = 2 ** 8; // centisecond
export const u_MSEC = 2 ** 9; // millisecond

// Excel date boundaries
export const MIN_S_DATE = 0;
export const MAX_S_DATE = 2958466;
// Google date boundaries
export const MIN_L_DATE = -694324;
export const MAX_L_DATE = 35830291;

// if more calendars are added, they should conform to MS CALID identifiers
// https://docs.microsoft.com/en-us/windows/win32/intl/calendar-identifiers
export const EPOCH_1904 = -1;
export const EPOCH_1900 = 1;
export const EPOCH_1317 = 6;

export const TOKEN_GENERAL = 'general';
export const TOKEN_HASH = 'hash';
export const TOKEN_ZERO = 'zero';
export const TOKEN_QMARK = 'qmark';
export const TOKEN_SLASH = 'slash';
export const TOKEN_GROUP = 'group';
export const TOKEN_SCALE = 'scale';
export const TOKEN_COMMA = 'comma';
export const TOKEN_BREAK = 'break';
export const TOKEN_TEXT = 'text';
export const TOKEN_PLUS = 'plus';
export const TOKEN_MINUS = 'minus';
export const TOKEN_POINT = 'point';
export const TOKEN_SPACE = 'space';
export const TOKEN_PERCENT = 'percent';
export const TOKEN_DIGIT = 'digit';
export const TOKEN_CALENDAR = 'calendar';
export const TOKEN_ERROR = 'error';
export const TOKEN_DATETIME = 'datetime';
export const TOKEN_DURATION = 'duration';
export const TOKEN_CONDITION = 'condition';
export const TOKEN_DBNUM = 'dbnum';
export const TOKEN_NATNUM = 'natnum';
export const TOKEN_LOCALE = 'locale';
export const TOKEN_COLOR = 'color';
export const TOKEN_MODIFIER = 'modifier';
export const TOKEN_AMPM = 'ampm';
export const TOKEN_ESCAPED = 'escaped';
export const TOKEN_STRING = 'string';
export const TOKEN_SKIP = 'skip';
export const TOKEN_EXP = 'exp';
export const TOKEN_FILL = 'fill';
export const TOKEN_PAREN = 'paren';
export const TOKEN_CHAR = 'char';

export const indexColors = [
  '#000', '#FFF', '#F00', '#0F0', '#00F', '#FF0', '#F0F', '#0FF', '#000', '#FFF',
  '#F00', '#0F0', '#00F', '#FF0', '#F0F', '#0FF', '#800', '#080', '#008', '#880',
  '#808', '#088', '#CCC', '#888', '#99F', '#936', '#FFC', '#CFF', '#606', '#F88',
  '#06C', '#CCF', '#008', '#F0F', '#FF0', '#0FF', '#808', '#800', '#088', '#00F',
  '#0CF', '#CFF', '#CFC', '#FF9', '#9CF', '#F9C', '#C9F', '#FC9', '#36F', '#3CC',
  '#9C0', '#FC0'
];

export const currencySymbols = [
  '¤', '$', '£', '¥', '֏', '؋', '৳', '฿', '៛',
  '₡', '₦', '₩', '₪', '₫', '€', '₭', '₮', '₱',
  '₲', '₴', '₸', '₹', '₺', '₼', '₽', '₾', '₿'
];

export const reCurrencySymbols = new RegExp('[' + currencySymbols.join('') + ']');
