//Extract Module
var http = require('http');
var url = require('url');

//Use Module
http.createServer(function (request, response) {
    //Extract response variable
    var query = url.parse(request.url, true).query;
    
    //Output Get Response variable
    response.writeHead(200, { 'Context-Type': 'text/html' });
    response.end('<h1>' + JSON.stringify(query) + '</h1>');
}).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});