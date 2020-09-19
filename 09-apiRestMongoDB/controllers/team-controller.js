'use strict';
const TeamModel = require('../models/team-model'),
      tm = new TeamModel();
class TeamController {
    getAll(req, res, next){
        tm.getAll((docs) => {
            res.render('index', {
                title : 'indentation war',
                data: docs
            });
            
        })
    }
    getOne(req, res, next){//buscar un registro en particular
        let _id = req.params.id;
        console.log(_id);
        tm.getOne(_id, (docs) => {
            console.log(docs);
            res.render('edit', {
                title: 'Editar Contacto',
                data:docs
            });
        });
    }
    save(req, res, next){//este metodo agrega o actualiza el registro
        let contacto = {
            _id: req.body.id || null,
            name: req.body.name,
            twitter: req.body.twitter,
            country: req.body.country,
            side: req.body.side
        };
        console.log(contacto);
        tm.save(contacto, () => res.redirect('/')); // ? => es que los datos del objeto los reeemplace en el query
    }
    delete(req, res, next){
        let _id = req.params.id;
        console.log(_id);
        tm.delete(_id, () => res.redirect('/'));
    }
    addForm(req, res, next) {
        res.render('add',{title:'Agregar Contacto'});
    }
    error404(req, res, next) {
        let err = new Error();
        err.status = 404;
        err.statusText = 'NOT FOUND';
        res.render('error', {error: err});
    }
}
module.exports = TeamController;
