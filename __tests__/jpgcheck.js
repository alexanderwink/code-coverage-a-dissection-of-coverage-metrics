const {fileIsJPG} = require('../jpgcheck.js');

test('file is jpg', () => {
    expect(fileIsJPG('my-file.jpg')).toBe(true);
});
