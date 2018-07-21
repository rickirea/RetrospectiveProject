const mongoose = require('mongoose');
const Modulo = require('../models/modulo');
// const Tema = require('../models/tema');
// const Postit = require('..models/postit');

mongoose.connect('mongodb://bliss:abc123@ds145981.mlab.com:45981/retrospective');

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




