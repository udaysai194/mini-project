var express = require('express');
var socket = require('socket.io');

// setting up the app
var app = express();

var server = app.listen(3000, () => {
    console.log('listening to port 3000');
});

//static files
app.use(express.static('public'));

//setup socket
var io = socket(server);

var led = [0,0,0,0];
var usersCount = 0;

//on connection of a socket
io.on('connection', (socket) => {
    usersCount++;
    io.emit('usersCount', usersCount);
    socket.on('disconnect', () => {
        usersCount--;
        io.emit('usersCount', usersCount);
    });
    console.log('connected ', socket.id);
    io.emit('start', led);
    socket.on('change', (data) => {
        led = data.slice();
        io.emit('start', led);
    });
    
})