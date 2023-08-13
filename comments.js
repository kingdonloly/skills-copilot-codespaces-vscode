// Create web server
var express = require('express');
var app = express();
// Create server
var server = require('http').createServer(app);
// Create socket
var io = require('socket.io')(server);

// Create connection
io.on('connection', function(socket) {
    // Receive comment
    socket.on('comment', function(data) {
        // Send comment to all
        io.emit('comment', data);
    });
});

// Listen port
server.listen(3000, function() {
    console.log('Server started on port 3000');
});