function conditionMe(i) {
    if(i < 0 || i > 100) {
        return null;
    } else {
        return i;
    }
}
module.exports = { conditionMe };
  