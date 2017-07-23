// Extract Module
var http = require('http');
var fs = require('fs');
var url = require('url');

// Create Webserver and start
http.createServer(function (request, response) {
    //set variable
    var pathname = url.parse(request.url).pathname;

    //classify page
    if (pathname == '/') {
        //Read Index.html
        fs.readFile('Index.html', function (error, data) {
            //Response
            response.writeHead(200, { 'Context-Type': 'text/html' });
            response.end();
        });

    } else if (pathname == 'OtherPage') {
        //Read OtherPage.html 
        fs.readFile('OtherPage.html', function (error, data) {
            //Response
            response.writeHead(200, { 'Context-Type': 'text/html' });
            response.end();
        });
    }

}).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});