const http = require('http');
const express = require('express');
const config = require('./config/config');
const app = express();

app.use((req, res) => {
  res.redirect(config.to);
});

const server = http.createServer(app);

server.listen(80);
server.on('error', e => console.log('Error on try to start server:', e));
server.on('listening', () => console.log('Server Redirecting'));