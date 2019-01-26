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

function select(item, table, condiction) {
    return 'selcet ' + item + ' from ' + table + ' where ' + condiction + ' ;';
}

function insert(table, values) {
    return 'insert into' + table + 'values' + values + ';';
}

function drop(table, condiction) { //user can drop their message and comment
    return 'delete from ' + table + ' where ' + condiction + ' ;';
}

//验证cookie
function find(condiction) {
    var str = 'select 1 from user  where uid = ?  limit 1;';
    str = mysql.format(str, condiction);
    connection.query(str, function(err, rows) {
        if (!err) {
            return rows != undefined
        }
    });
    return false;
}
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

    var uid = req.cookies.uid;
    if (!find(uid))
        res.end({ 'succ': false, 'msg': 'please first login' });
    //存储信息
    var str = 'insert into message set ?';
    var date = new Date();
    var insert = { mid: null, uid: uid, cnum: 0, issue_time: date, content: req.body.newText };
    connection.query(str, insert,
        function(err, rows) {
            if (!err) {
                if (rows != undefined);
            }
        })

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

    var str = 'insert into user(uid,uname,pwd) values(NULL,' +
        '\'' + req.body.user + '\',' +
        '\'' + req.body.password + '\');' +
        'select uid from user where uname=' +
        '\'' + req.body.user + '\';';
    connection.query(str, function(err, rows, fields) {
        if (err)
            console.log(err);
        else {
            console.log('row : ' + rows[0].uid);
            res.cookie('num', rows[0].uid, { maxAge: 900000, httpOnly: true })
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