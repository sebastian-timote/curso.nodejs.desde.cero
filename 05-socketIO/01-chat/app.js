//servidor
'use strict';

const express = require('express'),
      app = express(),
      http = require('http').createServer(app),
      io = require('socket.io')(http),
      port = process.env.PORT || 3000,
      publicDir = express.static(`${__dirname}/public`);

      app.use(publicDir)//middleware
        .get('/', (req, res) => res.sendFile(`${publicDir}/index.html`));

http.listen( port, () => console.log('iniciando Express y socket.IO en localhost:%d', port));

io.on('connection', (socket) => {
        socket.broadcast.emit('new user', {message : 'ha entrado un usuario al chat'});
        socket.on('new message', message => io.emit('user says', message));
        socket.on('disconnect', () => {
                console.log('ha salido un usuario del chat');
                socket.broadcast.emit('bye bye user', {message : 'ha salido un usuario del chat'});
        });
});