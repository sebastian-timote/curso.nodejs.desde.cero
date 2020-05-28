'use strict'
const https = require('https'),
    options = {
        host : 'https://encrypted.google.com/',
        port : 80,
        path : '/'
    };

https.get('https://ed.team.com/', res => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

}).on('error', (e) => {
    console.error(e);
});
