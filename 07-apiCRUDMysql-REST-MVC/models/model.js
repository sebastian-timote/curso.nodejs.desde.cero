'use strict';
const mysql = require('mysql'),
      myConnection = require('express-myconnection'),
      dbOptions = {
            host: 'localhost',
            user: 'root',
            password: '',
            port: 3306,
            database: 'indentation_war'
        },
    conn = myConnection(mysql, dbOptions, 'request');//son parametros que necesita el plugin myConnection buscar en npmjs
module.exports = conn;