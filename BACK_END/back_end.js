var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var mysql = require('mysql');

var cookieParser = require('cookie-parser')

app.use(cookieParser())
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
app.post('/new', function(req, res) {

    var uid = req.cookies.num;
    console.log("uid :" + uid);

    var str = 'select 1 from user  where uid = ' + uid + '  limit 1;';
    console.log(str);
    connection.query(str, function(err, rows) {
        if (!err) {
            if (!rows)
                res.end(JSON.stringify({ 'succ': false, 'msg': 'please first login' }));
            console.log(1);

            //存储信息
            str = 'insert into message set ?';
            var date = new Date();
            console.log(req.body.newText);

            var insert = { mid: null, uid: uid, issue_time: date, content: req.body.text };
            str = mysql.format(str, insert);
            connection.query(str,
                function(err, rows) {
                    if (!err) {
                        console.log(2);
                        res.end(JSON.stringify({ 'succ': true, 'mid': rows.insertId, 'uid': uid, 'cnum': 0, 'content': req.body.text }));
                    }
                })

        } else {
            console.log(3);

            res.end(JSON.stringify({ 'succ': false, 'msg': 'err' }));
        }

    });


})
app.post('/login', function(req, res) {
    console.log('login' + req.body.user + req.body.password);
    var str = 'select pwd ,uid from user where uname = ' + '\'' + req.body.user + '\';';
    connection.query(str, function(err, rows, fields) {
        if (!err) {
            if (rows[0].pwd == req.body.password) {
                res.cookie('num', rows[0].uid, { maxAge: 900000, httpOnly: true }); //set cookie
                rows.forEach(e => {
                    console.log(e.uid + " " + e.pwd);
                });
                res.sendFile('E:/APP/HTML/index.html');
            }
        }
    });
    res.end('your name or pwd is wrong');
});
app.post('/register', function(req, res) {
    console.log('register :' + req.body.user + " " + req.body.password);

    var str = 'insert into user set ?'
    var insert = { uid: null, uname: req.body.user, pwd: req.body.password };
    str = mysql.format(str, insert);
    connection.query(str, function(err, rows, fields) {
        if (err)
            console.log(err);
        else {
            console.log('row : ' + rows.insertId);
            res.cookie('num', rows.insertId, { maxAge: 900000, httpOnly: true })
            res.sendFile('E:/APP/HTML/index.html');
        }

    });
    // connection.end();

});
// app.post('*', function(req, res) {
//     console.log(req.url);
//     var temp = req.body;
//     console.log(temp);
//     res.sendFile('E:/APP' + req.path);
// });

app.listen(8080);
console.log('the server running at http://127.0.0.1:8080/');