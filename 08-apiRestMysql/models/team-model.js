'use strict';

const conn = require('./model');

class TeamModel {

    getAll(cb){
        conn.query('SELECT * FROM team', cb);
    }
    getOne(id, cb){//buscar un registro en particular
        conn.query('SELECT * FROM team WHERE id = ?', id, cb);
    }
    save(data, cb){//este metodo agrega o actualiza el registro
        /*se puede insertar datos de cualquiera de estas formas
        INSERT INTO team(campo1, campo2) VALUES(valor1, valor2);
        INSERT INTO team SET campo1 = valor1, campo2 = valor2;
        */
        conn.query('SELECT * FROM team WHERE id = ?', data.id, (err, rows) => {
            console.log(`Numeros de registros: ${rows.length}`);
            if (!err) {
                return (rows.length == 1)
                    ? conn.query('UPDATE team SET ? WHERE id = ?',[data, data.id], cb)
                    : conn.query('INSERT INTO team SET ?', data, cb);
            }
        });
    }
    delete(id, cb){
        conn.query('DELETE FROM team WHERE id = ?', id, cb);
    }
}
module.exports = TeamModel;