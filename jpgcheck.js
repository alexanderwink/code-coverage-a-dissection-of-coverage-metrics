function fileIsJPG(filename) {
    let result;
    if(filename.endsWith('.jpg')) {
      result = true;
    }
    return result;
}

module.exports = { fileIsJPG };