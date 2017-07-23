//Extract Module
var mysql = require('mysql');

//Connect Database
var client = mysql.createConnection({
    user: 'root',
    password: 'qlalfqjsgh',
    database: 'Company'     //I use Database Properties so that we don't have to use client.query('USE Company');
});