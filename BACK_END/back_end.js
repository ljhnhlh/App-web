var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();


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
})
app.post('*', function(req, res) {
    console.log(req.url);
    var temp = req.body;
    console.log(temp);
    res.sendFile('E:/APP' + req.path);
})

app.listen(8080);
console.log('the server running at http://127.0.0.1:8080/');