var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'user'
});
connection.connect();

var date = new Date();
console.log(date);

var str = 'insert into user set ?';
connection.query(str, { uid: null, uname: 'qweww', pwd: 123 }, function(err, rows, fields) {
    if (err)
        console.log(err.code);
    else
        console.log('row : ' + rows.uname);
});

connection.end();

var app = express();
app.get('/', function(req, res) {

})
app.listen(8080);