const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const moduloSchema = new Schema({
  modulo: String, //uno 
  cursoid:{type:Schema.Types.ObjectId,
  ref: 'curso'
},
  tema:{
      type:String,
      enum:['JavaScript','Html','Css','DOM','Bootstrap','Jquery','Nodejs','MongoDb','Express','Mongoose','Passport',
    'API','Ajax','Json','Angular','Angular-Forms','Angular-Service','Angular-RestApi-Express','Angular-Recipes','Angular-Auth']
      
  },
  
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Modulo = mongoose.model("Modulo", moduloSchema);
module.exports = Modulo;