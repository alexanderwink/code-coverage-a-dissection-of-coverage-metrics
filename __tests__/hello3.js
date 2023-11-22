const { isHello } = require("../hello2.js");

test("t1", () => {
  isHello("hello");
  isHello("goodbye");
  //isHello(null);
});
