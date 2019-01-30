var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var user = [];
app.get('/', function(req, res) {
    res.sendFile('E:/APP/test/webSocket' + '/index.html');
});


io.on('connection', function(socket) {
    socket.on('login', function(name) {
        // user.push({ name: name, id: socket.id });
        user[name] = socket.id;
    })
    socket.on('chat message', function(msg) {
        console.log(socket.id);
        io.emit('chat message', msg);
    });
    socket.on('disconnection', function(msg) {
        user.forEach(function(e) {
            if (e == socket.id) {
                user.splice(user.indexOf(e), 1);
            }
        })
    });
});

http.listen(8080, function() {
    console.log('listening on *:3000');
});