//Extract Module
var http = require('http');
var fs = require('fs');

//Create Server and Start
http.createServer(function (request, response) {
    //Read jadePage.jade file
    fs.readFile('jadepage.jade', 'utf8', function (error, data) {

    });
}).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});