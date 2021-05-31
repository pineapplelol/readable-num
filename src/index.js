const WORDS = [
  "hundred",
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
 * @param {number} minNum - the smallest number to convert, default: 9999
 */
exports.readableNum = (num, minNum = 9999) => {
  if (num < minNum) return num.toString();
  let i = 0;
  while (Math.abs(num) > 1000 && i < WORDS.length) {
    num /= 1000;
    i++;
  }
  return `${num.toFixed(0)} ${WORDS[i]}`;
};