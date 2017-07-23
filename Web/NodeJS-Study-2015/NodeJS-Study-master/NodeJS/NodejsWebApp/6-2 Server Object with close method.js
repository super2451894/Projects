//Make Server
var server = require('http').createServer();

//Start Server
server.listen(50001, function () {
    console.log('Server Running at http://127.0.0.1:50001');
});

//After 10seconds start function
setInterval(function () {
    //Stop Server
    server.close();
}, 10000);
