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

exports.prettyTime = (num) => {
  let i = 0;
  while (Math.abs(num) > 1000 && i < WORDS.length) {
    num /= 1000;
    i++;
  }
  return `${num} ${WORDS[i]}`;
};
