//Extract Module
var fs = require('fs');
var http = require('http');

// Create Server on 50000 port and Start (Image Server)
http.createServer(function (request, response) {
    //Read Image File
    fs.readFile('judy.jpeg', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
        response.end(data);
    });

}).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});

// Create Server on 50001 port and Start (Music Server)
http.createServer(function (request, response) {
    //Read MP3 File
    fs.readFile('Sample.mp3', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'audio/mp3' });
        response.end(data);
    });

}).listen(50001, function () {
    console.log('Server Running at http://127.0.0.1:50001');
});