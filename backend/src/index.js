const { createServer } = require('http');
const { Server } = require('socket.io');
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = +(process.env.PORT) || 8000;

app.use(bodyParser.json()); // convert req body to json wherever applicable
app.use(router);

io.on("connection", (socket) => {
    // TODO
});

server.listen(PORT, _ => {
    console.log(`Server started on port ${PORT}`);
})
