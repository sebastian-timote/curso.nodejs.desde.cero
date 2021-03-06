'use strict';//esquema de la collection 
//es un mapeo de la coleccion indentation_war es un ODM
const mongoose = require('./model'),
      Schema = mongoose.Schema,
      TeamSchema = new Schema({
          _id : Schema.Types.ObjectId,
          name : String,
          twitter : String,
          country : String,
          side : String
      },{
            collection : 'team'
      }),
      Team = mongoose.model('Team', TeamSchema);
module.exports = Team;