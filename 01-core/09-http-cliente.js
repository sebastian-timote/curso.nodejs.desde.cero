'use strict';
const http = require('http'),
      options = {
          host : 'jonmircha.com',
          port : 80,
          path : '/'
      };

http.get( options, res => 
    console.log(`el sitio ${options.host} ha respondido. codigo de estado: ${res.statusCode}`))
    .on('error', err => 
    console.log(`el sitio ${options.host} no respondio. codigo de estado: ${err.code}. error: ${err.message}`))


