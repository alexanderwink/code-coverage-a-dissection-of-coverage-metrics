const { isHello } = require("../hello2.js");

test("t1", () => {
  expect(isHello("hello")).toBe(true);
  expect(isHello("goodbye")).toBe(false);
  expect(() => {
    isHello(null);
  }).toThrow();
});
