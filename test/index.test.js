const { readableNum } = require("../src/index");

test("confirms less than minNum is unchanged", () => {
  expect(readableNum(88)).toBe("88");
});

test("confirms less than minNum is unchanged, custom minNum", () => {
  expect(readableNum(15000, {minNum: 20000})).toBe("15000");
});

test("10,000 -> 10 thousand", () => {
  expect(readableNum(10000)).toBe("10 thousand");
});

test("50,000,000 -> 50 million", () => {
  expect(readableNum(50000000)).toBe("50 million");
});

test("98,738,729 -> 98.7 million, precision 3", () => {
  expect(readableNum(98738729)).toBe("98.7 million");
});

test("98,738,729 -> 99 million, precision 2", () => {
  expect(readableNum(98738729, {precision : 2})).toBe("99 million");
});

test("128,338,729 -> 128 million, precision 3", () => {
  expect(readableNum(128338729)).toBe("128 million");
});

test("123,338,729 -> 120 million, precision 2", () => {
  expect(readableNum(123338729, {precision : 2})).toBe("120 million");
});

test("128,738,729 -> 129 million, precision 3", () => {
  expect(readableNum(128738729)).toBe("129 million");
});

test("128,738,729 -> 130 million, precision 2", () => {
  expect(readableNum(128738729, {precision : 2})).toBe("130 million");
});