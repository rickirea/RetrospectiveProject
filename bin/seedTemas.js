const mongoose = require('mongoose');
//const Modulo = require('../models/modulo');
 const Tema = require('../models/tema');
// const Postit = require('..models/postit');

mongoose.connect('mongodb://localhost/RetrospectiveProject');

const newTema = Tema({
    tema : 'JavaScript',
    moduloid: "5b53a1a58b92cd75cdf9b613"
})

newTema.save()
.then(()=>{
  console.log("Tema agregado...");
})
.catch((err)=>{
  console.log(err);
});

const newTema2 = Tema({
    tema : 'Html',
    moduloid: "5b53a1a58b92cd75cdf9b613"
})

newTema2.save()
.then(()=>{
  console.log("Tema agregado2...");
})
.catch((err)=>{
  console.log(err);
});






// ['JavaScript','Html','Css','DOM','Bootstrap','Jquery',]
// ['Nodejs','MongoDb','Express','Mongoose','Passport','API','Ajax','Json']
// ['Angular','Angular-Forms','Angular-Service','Angular-RestApi-Express','Angular-Recipes','Angular-Auth']
    