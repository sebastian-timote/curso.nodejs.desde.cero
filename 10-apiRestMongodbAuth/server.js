'use strict';
const app = require('./app');
app.listen(app.get('port'), () => console.log(`iniciando API REST Express con MongoDB en el puerto ${app.get('port')}`));