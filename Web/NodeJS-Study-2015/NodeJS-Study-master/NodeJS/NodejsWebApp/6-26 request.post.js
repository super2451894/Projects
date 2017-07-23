//Extract Module
var http = require('http');
var fs = require('fs');

//Use Module
http.createServer(function (request, response) {
    if (request.method == 'GET') {
        //GET
        fs.readFile('HTMLPage2.html', function (error, data) {
            response.writeHead(200, { 'Context-type' : 'text/html' });
            response.end(data);
        });
    } else if (request.method == 'POST') {
        //POST
        request.on('data', function (data) {
            response.writeHead(200, { 'Context-Type': 'text/html' });
            response.end('<h1>' + data + '</h1>');
        });
    }
}).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});