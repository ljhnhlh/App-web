var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var express = require('express')
var cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    console.log(req.path);
    //res.send("success");
    res.sendFile('E:\\APP\\test\\cookie\\cookie.html');
});

app.use('/B', function(req, res) {

    //name 存在时，删除name
    if (req.cookies.name !== undefined) {
        console.log(req.cookies);

        res.clearCookie('name');
        res.end('good');
    }

})
app.get('*', function(req, res) {
    console.log(req.cookies.name + "Get");
    if (req.cookies.name !== 'can')
        res.end('Please first login');
    else {
        console.log(req.url);
        res.sendFile('E:/APP/' + req.path);
    }

})
app.post('*', function(req, res) {
    console.log(req.url);
    var temp = req.body;
    res.cookie('name', 'can', { maxAge: 900000, httpOnly: true });
    console.log(res.cookies);

    console.log(temp);
    res.sendFile('E:/APP' + req.path);
})

app.listen(8080);
console.log('the server running at http://127.0.0.1:8080/');