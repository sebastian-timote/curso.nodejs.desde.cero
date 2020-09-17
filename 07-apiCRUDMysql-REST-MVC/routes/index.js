'use strict';
const conn = require('../models/model'),
      express = require('express'),
      router = express.Router();
function error404(req, res, next) {
    let err = new Error();
    err.status = 404;
    err.statusText = 'NOT FOUND';
    res.render('error', {error: err});
}
router
    .use( conn)
    .get('/', (req, res, next) => {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM team', (error, data) =>{
                if (!error) {
                    res.render('index', {
                        title: 'indentation war',
                        data: data
                    })
                }
            })
        });
    })
    .get('/agregar', (req, res, next) => {//por get visualizo los datos 
        res.render('add',{title: 'Agregar Contacto'});
    })
    .post('/', (req, res, next) => {//por post inserto datos
        req.getConnection((err, conn) => {
            let contacto = {
                id:0,
                name:req.body.name,
                twitter: req.body.twitter,
                country: req.body.country,
                side: req.body.side
            };
            /*se puede insertar datos de cualquiera de estas formas
            INSERT INTO team(campo1, campo2) VALUES(valor1, valor2);
            INSERT INTO team SET campo1 = valor1, campo2 = valor2;
            */
            conn.query('INSERT INTO team SET ?', contacto, (err, data) => {// ? => es que los datos del objeto los reeemplace en el query
                if (!err) {
                    res.redirect('/');
                }else {
                    res.redirect('/agregar');
                }

            });
        });
    })
    .get('/editar/:id', (req, res, next) => {
        let id = req.params.id;
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM team WHERE id = ?', id,(err, data) => {
                if (!err) {
                    res.render('edit', {
                        title: 'Editar Contacto',
                        data:data
                    });
                }
            });
        });
    })

    .post('/actualizar/:id', (req, res, next) => {
        req.getConnection((err, conn) => {
            let contacto = {
                id: req.body.id,
                name: req.body.name,
                twitter: req.body.twitter,
                country: req.body.country,
                side: req.body.side
            };
            conn.query('UPDATE team SET ? WHERE id = ?',[contacto, contacto.id],(err, data) => {//contacto y contacto.id se va a ir reemplazando en el query y en ese orden
                if (!err) {
                    res.redirect('/')
                }else {
                    return next(new Error('registro no encontrado'));
                }
            });
        });
    })
    .post('/eliminar/:id', (req, res, next) => {
        req.getConnection((err, conn) => {
            let id = req.params.id;
            conn.query('DELETE FROM team WHERE id = ?', id,(err, data) => {
                if (!err) {
                    res.redirect('/');
                } else {
                    return next(new Error('Registro no encontrado'));
                }
            });
        });
    })
    .use(error404);
module.exports = router;