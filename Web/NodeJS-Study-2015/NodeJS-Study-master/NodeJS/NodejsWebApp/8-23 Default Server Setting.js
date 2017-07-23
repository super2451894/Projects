//Extract Module
var fs = require('fs');
var http = require('http');
var express = require('express');

//Create Server
var app = express();

//Set Middleware
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(app.router);

//Set Router
app.get('/', function (request, response) {
    if (request.cookies.auth) {
        response.send('<h1>Login Success</h1>');
    } else {
        response.redirect('/login');
    }
});

app.get('/login', function (request, response) {
    fs.readFile('8-22 Login.html', function (error, data) {
    response.send(data.toString());
    });
});

app.post('/login', function (request, response) {
    //Create Cookie
    var login = request.param('login');
    var password = request.param('password');

    //Output
    console.log(login, password);
    console.log(request.body);

    //Check Login
    if (login == 'admin' && password == '1234') {
        //Login Success
        response.cookie('auth', true);
        response.redirect('/');
    } else {
        //Login Fail
        response.redirect('/login');
    }
});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});