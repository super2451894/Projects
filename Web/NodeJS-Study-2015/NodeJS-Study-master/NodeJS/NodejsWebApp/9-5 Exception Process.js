//Extract Module
var mysql = require('mysql');

//Connect Database
var client = mysql.createConnection({
    user: 'root',
    password: 'qlalfqjsgh'
});

//Use Database Query
client.query('USE Company');
client.query('SELECT * FROM products', function (error, result, fields) {
    if (error) {
        console.log('Query Error');
    } else {
        console.log(result);
    }

});