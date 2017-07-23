//Module Extract
var http = require('http');

//Use Module
http.createServer(function (request, response) {
    if (request.method == 'GET') {
        console.log('GET 요청입니다');
    } else if (request.method == 'POST') {
        console.log('POST 요청입니다');
    }
}).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});