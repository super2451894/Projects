//Extract Module
var fs = require('fs');
var http = require('http');
var express = require('express');

//Create Server
var app = express();

//Set Middleware
app.use(express.cookieParser());
app.use(express.limit('50mb'));
app.use(express.bodyParser({ uploadDir: __dirname + '/multipart' }));
app.use(app.router);

//Set Router
app.get('/', function (request, response) {
    fs.readFile('8-25 FileUpload.html', function (error, data) {
        response.send(data.toString());
    });
});
app.post('/', function (request, response) {
    console.log(request.body);
    console.log(request.files);
});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});