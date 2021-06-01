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
exports.readableNum = (num, config = {}) => {
  const {minNum, precision} = {minNum: 9999, precision: 3, ...config};
  if (num < minNum) return num.toString();

  num = num.toPrecision(precision);
  let i = 0;
  while (Math.abs(num) > 1000 && i < WORDS.length) {
    num /= 1000;
    i++;
  }

  return `${num} ${WORDS[i]}`;
};