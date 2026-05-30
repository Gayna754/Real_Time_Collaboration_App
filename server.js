const express = require('express');
const app = express();

const http = require('http');
const path = require('path');
const {Server} = require('socket.io');

const ACTIONS = require('./src/actions/Actions');

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('build'));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
