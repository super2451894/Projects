// Extract Module
var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path = require('path');
var multiparty = require('connect-multiparty');
var express = require('express');

//Connect Database
var client = mysql.createConnection({
    user: 'root',
    password: 'qlalfqjsgh',
    database: 'information'
});

//Create Server
var app = express();
app.use(bodyParser());
app.use(app.router);
app.use(express.static('public'));


//Execute Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});

// Route
app.get('/', function (request, response) {
    //Read File
    fs.readFile('list.html', 'utf8', function (error, data) {
        //Execute Database Query
        client.query('SELECT * FROM i_data', function (error, results) {
            //Response
            response.send(ejs.render(data, {
                data: results
            }));
        });
    });
});

app.get('/delete/:id', function (request, response) {
    //Execute Database Query
    client.query('DELETE FROM i_data WHERE id=?', [request.param('id')], function () {
        //Response
        response.redirect('/');
        console.log('Warning!!! Data Deleted!');
    });
});

app.get('/insert', function (request, response) {
    //Read File
    fs.readFile('insert.html', 'utf8', function (error, data) {
        //Response
        response.send(data);
    });
});

app.post('/insert', function (request, response) {
    //Set Variable
    var body = request.body;
    
    //Execute Database Query
    client.query('INSERT INTO i_data (id,name,immigration_company,work_company,location,now_progress,contract_date,priority_date,lc_approve_date,i140_receive_date,i140_case,i140_approve_date,visa_fee_notice_date,visa_fee_pay_date,ds260_receive_date,ds260_approve_date,interview_notice_date,interview_date,visa_receive_date,lc_audit_date,i140_rfe_date,interview_blue_date,departure_date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [body.id, body.name, body.immigration_company, body.work_company, body.location, body.now_progress, body.contract_date, body.priority_date, body.lc_approve_date, body.i140_receive_date, body.i140_case, body.i140_approve_date, body.visa_fee_notice_date, body.visa_fee_pay_date, body.ds260_receive_date, body.ds260_approve_date, body.interview_notice_date, body.interview_date, body.visa_receive_date, body.lc_audit_date, body.i140_rfe_date, body.interview_blue_date, body.departure_date], function () {
        //Response
        response.redirect('/');
    });
});

app.get('/edit/:id', function (request, response) {
    //Read File
    fs.readFile('edit.html', 'utf8', function (error, data) {
        //Execute Database Query
        client.query('SELECT * FROM i_data WHERE id=?', [request.param('id')], function (error, result) {
            //Response
            response.send(ejs.render(data, {
                data: result[0]
            }));
        });
    });
});

app.post('/edit/:id', function (request, response) {
    //Set Variable
    var body = request.body;

    //Execute Database Query
    client.query('UPDATE i_data SET name=?,immigration_company=?,work_company=?,location=?,now_progress=?,contract_date=?,priority_date=?,lc_approve_date=?,i140_receive_date=?,i140_case=?,i140_approve_date=?,visa_fee_notice_date=?,visa_fee_pay_date=?,ds260_receive_date=?,ds260_approve_date=?,interview_notice_date=?,interview_date=?,visa_receive_date=?,departure_date=?,lc_audit_date=?,i140_rfe_date=?,interview_blue_date=? WHERE id=?', [body.name, body.immigration_company, body.work_company, body.location, body.now_progress, body.contract_date, body.priority_date, body.lc_approve_date, body.i140_receive_date, body.i140_case, body.i140_approve_date, body.visa_fee_notice_date, body.visa_fee_pay_date, body.ds260_receive_date, body.ds260_approve_date, body.interview_notice_date, body.interview_date, body.visa_receive_date, body.departure_date, body.lc_audit_date, body.i140_rfe_date, body.interview_blue_date, request.param('id')], function () {
        //Response
        response.redirect('/');
    });
});