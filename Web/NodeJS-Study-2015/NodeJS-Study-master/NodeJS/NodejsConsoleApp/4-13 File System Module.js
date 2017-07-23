//Extract Module
var fs = require('fs');

//Use Module
fs.readFile('textfile.txt', 'utf8', function (error, data) {
    console.log(data);
});