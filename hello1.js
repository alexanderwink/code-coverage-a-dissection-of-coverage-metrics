function isHello(txt) {
  let ret = false;
  if (txt.startsWith("hello")) {
    ret = true;
  } else {
    ret = false;
  }
  return ret;
}
module.exports = { isHello };
