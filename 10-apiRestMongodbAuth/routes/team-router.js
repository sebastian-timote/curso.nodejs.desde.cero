'use strict';
const TeamController = require('../controllers/team-controller'),
      express = require('express'),
      router = express.Router(),
      tc = new TeamController();

router
    .get('/teams', tc.getAll)
    .get('/agregar', tc.addForm)
    .post('/teams', tc.save)//es el insert
    .get('/editar/:id', tc.getOne)
    .put('/actualizar/:id', tc.save)//es el update
    .delete('/eliminar/:id', tc.delete);
module.exports = router;