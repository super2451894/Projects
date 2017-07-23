//Extract Module
var http = require('http');

// Create Server and Start
http.createServer(function (request, response) {
    //Write Cookie
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['breakfast=toast', 'dinner=chicken']
    });

}).listen(50000,function () {
    console.log('Server Running at http://127.0.0.1:50000');
});