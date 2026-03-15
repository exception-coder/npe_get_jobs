export function getExponent (num, int_max = 0) {
  const exp = Math.floor(Math.log10(num));
  return (int_max > 1)
    ? Math.floor(exp / int_max) * int_max
    : exp;
}

export function getSignificand (n, exp = 1) {
  if (exp < -300) {
    return parseFloat(n.toExponential().split('e')[0]);
  }
  return n * (10 ** -exp);
}
