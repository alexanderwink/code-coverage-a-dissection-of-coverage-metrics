const { isHello } = require("../hello1.js");

test("t1", () => {
  expect(isHello("hello")).toBe(true);
  //expect(isHello("goodbye")).toBe(false);
});
