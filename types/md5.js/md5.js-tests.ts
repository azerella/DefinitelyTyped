import MD5 = require('md5.js');

const md5stream = new MD5();

md5stream.digest('hex');
md5stream.update('42');

new MD5().update('42').digest('hex');
