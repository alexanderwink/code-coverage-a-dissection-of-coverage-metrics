function loop() {
  let ret = 0;
  
  for(i=0;i<10;i++) {
    ret++;
  }

  return ret;
}

module.exports = { loop };
