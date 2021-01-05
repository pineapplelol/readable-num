const { prettyNum } = require("./index");

test("confirms less than minNum is unchanged", () => {
  expect(prettyNum(88)).toBe("88");
});
