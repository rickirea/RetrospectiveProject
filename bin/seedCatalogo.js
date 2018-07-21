const mongoose = require('mongoose');
const Modulo = require('../models/modulo');
// const Tema = require('../models/tema');
// const Postit = require('..models/postit');

mongoose.connect('mongodb://localhost/RetrospectiveProject');

const newModulo = Modulo({
    modulo : 'Modulo uno'
})

newModulo.save()
.then(()=>{
  console.log("Modulo agregado...");
})
.catch((err)=>{
  console.log(err);
});

const newModulo2 = Modulo({
    modulo : 'Modulo dos'
})

newModulo2.save()
.then(()=>{
  console.log("Modulo agregado...");
})
.catch((err)=>{
  console.log(err);
});

const newModulo3 = Modulo({
    modulo : 'Modulo tres'
})

newModulo3.save()
.then(()=>{
  console.log("Modulo agregado...");
})
.catch((err)=>{
  console.log(err);
});





// const newTema =  Tema ();
// newTema.insertMany([
//   {tema: 'JavaScript'},{tema:'Html'},{tema:'Css'},{tema:'DOM'},{tema:'Bootstrap'},{tema:'Jquery'},{tema:'Nodejs'},{tema:'MongoDb'},{tema:'Express'},{tema:'Mongoose'},{tema:'Passport'},
//   {tema:'API'},{tema:'Ajax'},{tema:'Json'},{tema:'Angular'},{tema:'Angular-Forms'},{tema:'Angular-Service'},{tema:'Angular-RestApi-Express'},{tema:'Angular-Recipes'},{tema:'Angular-Auth'}]);


// newTema.save()
// .then(()=>{
//   console.log("nuevo tema agregado...");
// })
// .catch((err)=>{
//   console.log(err);
// });




