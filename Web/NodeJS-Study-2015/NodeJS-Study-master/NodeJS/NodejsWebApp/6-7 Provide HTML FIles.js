//Extract Module
var fs = require('fs');
var http = require('http');

//Create Webserver and Start
http.createServer(function (request, response) {
    //Read HTML file
    fs.readFile('HTMLPage.html', function (error, data) {
        response.writeHead(200, { 'Content-type': 'text/html' });
        response.end(data);
    });

}).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});