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
 * @param {minNum: number, precision: number, allowDecimal: boolean} config - the configuration for the function
 */
exports.readableNum = (num, config = {}) => {
  const { minNum, precision, allowDecimal } = { minNum: 9999, precision: 3, allowDecimal: false, ...config };
  if (num < minNum) return num.toString();

  num = num.toPrecision(precision);
  let i = 0;
  while (Math.abs(num) > 1000 && i < WORDS.length) {
    num /= 1000;
    i++;
  }
  if (!allowDecimal) num = Math.round(num);

  return `${num} ${WORDS[i]}`;
};
