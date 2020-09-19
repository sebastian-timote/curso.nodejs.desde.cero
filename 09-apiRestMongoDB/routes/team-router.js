'use strict';
const TeamController = require('../controllers/team-controller'),
      express = require('express'),
      router = express.Router(),
      tc = new TeamController();

router
    .get('/', tc.getAll)
    .get('/agregar', tc.addForm)
    .post('/', tc.save)//es el insert
    .get('/editar/:id', tc.getOne)
    .put('/actualizar/:id', tc.save)//es el update
    .delete('/eliminar/:id', tc.delete)
    .use(tc.error404);
module.exports = router;