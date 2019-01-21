// 导入http模块:
var http = require('http'); //http 模块
var url = require('url'); //地址模块
var fs = require('fs'); //文件读取模块
var path = require('path'); //路径模块


var server = http.createServer(function(req, res) {
    console.log(req.method + ":" + req.url);

    var pathname = url.parse(req.url).path;
    console.log(pathname);
    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var filepath = path.join('..', '/HTML/', 'signUp.html');
        console.log(filepath);

        fs.stat(filepath, function(err, stats) {
            if (!err && stats.isFile()) {
                console.log('200 ' + req.url);
                res.writeHead(200);
                fs.createReadStream(filepath).pipe(res);
            } else {
                console.log('404 ' + req.url);
                res.writeHead(404);
                res.end('404 Not Found');
            }
        });
    } else if (req.method === 'POST') {
        req.addListener('data', function(chunk) {
            console.log(JSON.parse(chunk));

        });
        req.addListener('end', function() {
            res.end('success');
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var filepath = path.join('..', pathname);
        console.log(filepath);

        // //错的
        // console.log("name :" + req.body.name + " password :" + req.body.password);

        console.log(req.body);

        fs.stat(filepath, function(err, stats) {
            if (!err && stats.isFile()) {
                console.log('200 ' + req.url);
                res.writeHead(200);
                fs.createReadStream(filepath).pipe(res);
            } else {
                console.log('404 ' + req.url);
                res.writeHead(404);
                res.end('404 Not Found');
            }
        });
    }

});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');