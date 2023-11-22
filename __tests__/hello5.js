const { isHello } = require("../hello3.js");

test("t1", () => {
  expect(isHello("goodbye")).toBe(false);
});
