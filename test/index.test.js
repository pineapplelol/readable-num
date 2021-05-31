const { readableNum } = require("../src/index");

test("confirms less than minNum is unchanged", () => {
  expect(readableNum(88)).toBe("88");
});

test("10,000 -> 10 thousand", () => {
  expect(readableNum(10000)).toBe("10 thousand");
});

test("50,000,000 -> 50 million", () => {
  expect(readableNum(50000000)).toBe("50 million");
});

test("98,738,729 -> 99 million", () => {
  expect(readableNum(98738729)).toBe("99 million");
});