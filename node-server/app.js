const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('A client has connected');

    // Listen for the 'event' event and emit it to all connected clients
    socket.on('event', (data) => {
        console.log(`An event has been emitted with data: ${data}`);
        io.emit('event', data);
    });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});