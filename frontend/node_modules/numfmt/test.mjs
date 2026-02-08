import { round } from './lib/round.js';

const s = 75 * (1 + 0.255);
console.log(s);
console.log(round(round(s, 3), 2));
console.log(round(s, 2));
