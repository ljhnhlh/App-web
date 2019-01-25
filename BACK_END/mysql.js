var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'user'
});
connection.connect();

var str = 'select pwd ,uid from user where x = ' + '\'' + 'qwe' + '\';';
connection.query(str, function(err, rows, fields) {
    if (err)
        console.log(err.code);
    else
        console.log('row : ' + rows[0].pwd);
});

connection.end();

var app = express();
app.get('/', function(req, res) {

})
app.listen(8080);