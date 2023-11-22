function isHello(txt) {
  let ret = false;
  if(txt.startsWith("hello")) ret=true;
  return ret
}

module.exports = { isHello };
