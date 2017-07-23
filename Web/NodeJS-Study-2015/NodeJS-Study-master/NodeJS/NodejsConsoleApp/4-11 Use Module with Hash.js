//Extract Module
var crypto = require('crypto');

//Make Hash 
var shasum = crypto.createHash('sha1');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

//output
console.log('crypto_hash : ', output);