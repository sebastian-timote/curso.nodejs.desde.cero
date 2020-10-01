'use strict';

const conn = require('./team-schema');

class TeamModel {

    getAll(cb){
        conn.find({}, (err, docs) => {
            if (err) throw err;
            cb(docs);
        });
    }
    getOne(_id, cb){//buscar un registro en particular
        conn.findOne({ _id : _id }, (err, docs) => {
            if (err) throw err;
            cb(docs);
        });
    }
    save(data, cb){//este metodo agrega o actualiza el registro
        conn.count({_id : data._id}, (err, count) => {//.count() -> numeros de documentos de una coleccion
            if (err) throw err;
            console.log(`Numero de Docs: ${count}`);
            if (count == 0) {
                conn.create(data, () => {
                    if (err) throw err;
                    cb();//accionar la callback del controlador
                });//create() -> metodo de mongo para insertar datos 
            }
            if (count == 1) {
                conn.findOneAndUpdate({
                    _id : data._id //este es el id que va a buscar
                }, {//el segundo parametro es lo que va a actualizar
                    name : data.name,
                    twitter : data.twitter,
                    country : data.country,
                    side : data.side
                }, (err) => {//y el tercer parametro es la call back
                    if (err) throw(err);
                    cb();
                });//es un select y un apdate en uno solo
            }
        });
    }
    delete(_id, cb){
        conn.remove({_id : _id}, (err) => {
            if (err) throw err;
            cb();
        });
    }
}
module.exports = TeamModel;