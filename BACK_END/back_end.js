var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'user'
});
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    console.log(req.path);
    //res.send("success");
    res.sendFile('E:\\APP\\HTML\\signUp.html');
});

app.get('*', function(req, res) {
    console.log(req.url);
    res.sendFile('E:/APP/' + req.path);
});
app.post('/login', function(req, res) {
    console.log('login' + req.body);
    var str = 'select pwd ,uid from user where uname = ' + '\'' + req.body.name + '\';';
    connection.query(str, function(err, rows, fields) {
        if (err) throw err;
        console.log('row : ' + rows);
    })

    res.end('success');

});
app.post('/register', function(req, res) {
    console.log('register :' + req.body.user + " " + req.body.password);

    var str = 'insert into user(uid,uname,pwd) values(NULL,' +
        '\'' + req.body.user + '\',' +
        '\'' + req.body.password + '\');'
    connection.query(str, function(err, rows, fields) {
            if (err) throw err;
            console.log('row : ' + rows[0]);
        })
        // connection.end();
    res.end('success');
});
// app.post('*', function(req, res) {
//     console.log(req.url);
//     var temp = req.body;
//     console.log(temp);
//     res.sendFile('E:/APP' + req.path);
// });

app.listen(8080);
console.log('the server running at http://127.0.0.1:8080/');