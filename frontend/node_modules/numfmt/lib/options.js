export const defaultOptions = {
  // Overflow error string
  overflow: '######', // dateErrorThrow needs to be off! [prev in locale]
  // Should it throw when there is an overflow error?
  dateErrorThrows: false,
  // Should it emit a number when date has an overflow error? (Sheets does this)
  dateErrorNumber: true, // dateErrorThrow needs to be off!
  // Should it emit a number when bigint has an is an overflow error?
  bigintErrorNumber: false,
  // Sheets mode (see #3)
  dateSpanLarge: true,
  // Simulate the Lotus 1-2-3 leap year bug
  leap1900: true,
  // Emit regular vs. non-breaking spaces
  nbsp: false,
  // Robust/throw mode
  throws: true,
  // What is emitted when robust mode fails to parse (###### currently)
  invalid: '######',
  // Locale
  locale: '',
  // Don't adjust dates to UTC when converting them to serial time
  ignoreTimezone: false,
  // Integer digit grouping
  grouping: [ 3, 3 ],
  // resolve indexed colors to hex
  indexColors: true,
  // Skip-next signifier character
  skipChar: '',
  // Repear-next signifier character
  repeatChar: ''
};
