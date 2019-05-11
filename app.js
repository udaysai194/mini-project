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

io.on('conncetion', (socket) => {
    console.log('socket connection made');
    
})