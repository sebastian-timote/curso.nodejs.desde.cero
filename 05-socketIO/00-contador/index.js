/*
Socket.io
    1. eventos connection y disconnect
    2. puedes crear tus propios eventos
    3. emit(): cuando se comunica un mensaje  a todos los clientes conectados.
    4. broadcast.emit(): cuando se comunica un mensaje a todos los clientes, excepto al que lo origina.
    5. los 4 puntos anteriores funcionan en el servidor y en el cliente.

*/
'use strict';

const { Socket } = require('dgram');

const http = require('http').createServer(server),
      fs = require('fs'),
      io = require('socket.io')(http);//cuando se invoca sockets se invoca tambien la variable del servidor en el que se ejecuta la aplicaion
let conexions = 0;
function server(req, res) {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500,{'Content-Type' : 'text/html'});
            return res.end('<h1> error interno del servidor</h1>');
        } else{
            res.writeHead(200,{'Content-Type' : 'text/html'});
            return res.end(data, 'utf-8');
        }
    });
}
http.listen(3000, () => console.log('servidor corriendo desde localhost:3000'));
io.on('connection', (socket) => {
    socket.emit('hello',{ message: 'hola mundo con socket.IO'});
    socket.on('otro evento que me invente', data => console.log(data));
    conexions++;
    console.log(`conexiones activas: ${conexions}`);
    socket.emit('connect users', {numbers : conexions});//para que actualice el dato en su propia pestaña
    socket.broadcast.emit('connect users', {numbers : conexions});//para que actualice otras pestañas
    socket.on('disconnect', () => {
        conexions--;
        console.log(`conexiones activas: ${conexions}`);
        socket.broadcast.emit('connect users', {numbers : conexions});
    });


});