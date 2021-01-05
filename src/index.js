const WORDS = [
  "thousand",
  "million",
  "billion",
  "trillion",
  "quadrillion",
  "quintillion",
  "sextillion",
  "septillion",
  "octillion",
];

/**
 * Returns a pretty string representation of given number.
 * @param {number} num - number to process into a pretty number string
 * @param {number} deg - number of floating points in return string, default: 0
 * @param {number} minNum - the smallest number to convert, default: 9999
 */
exports.prettyNum = (num, deg = 0, minNum = 9999) => {
  if (num < minNum) return num.toString();
  let i = 0;
  while (Math.abs(num) > 1000 && i < WORDS.length) {
    num /= 1000;
    i++;
  }
  return `${num.toFixed(deg)} ${WORDS[i]}`;
};
