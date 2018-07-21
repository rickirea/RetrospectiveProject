const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const temaSchema = new Schema({
    moduloid:{type:Schema.Types.ObjectId,
        ref: 'modulo'
      },
    tema: String,
    
  
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Tema = mongoose.tema('Tema', temaSchema);
module.exports = Tema;


// // {
//     type:String,
//     enum:['JavaScript','Html','Css','DOM','Bootstrap','Jquery','Nodejs','MongoDb','Express','Mongoose','Passport',
//   'API','Ajax','Json','Angular','Angular-Forms','Angular-Service','Angular-RestApi-Express','Angular-Recipes','Angular-Auth']
    
// },