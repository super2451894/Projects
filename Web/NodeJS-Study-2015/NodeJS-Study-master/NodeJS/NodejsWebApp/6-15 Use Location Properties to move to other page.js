//Extract Module
var http = require('http');

//Create Webserver and Start
http.createServer(function (request, response) {
    response.writeHead(302, { 'Location': 'http://hanb.co.kr' });   //302 is to Redircet Message
    response.end();
}).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});