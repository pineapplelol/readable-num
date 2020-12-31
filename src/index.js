const POWERS = [
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

exports.prettyNum = (num) => {
  const [r, p] = _prettyNum(num, 0);
  if (p == 0) return r.toString();
  if (p > POWERS.length) {
    return (
      r * Math.pow(10, POWERS.length * 3) + " " + POWERS[POWERS.length - 1]
    );
  }
  return r + " " + POWERS[p - 1];
};

function _prettyNum(num, pow) {
  if (Math.abs(num) < 1000) {
    return [num, pow];
  }
  return _prettyNum(num / 1000, pow + 1);
}
