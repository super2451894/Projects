//Extract Module
var http = require('http');

//Use Module
http.createServer(function (request, response) {
    request.on('data', function (data) {
        console.log('POST Data :' , data);
    });
}).listen(50000);