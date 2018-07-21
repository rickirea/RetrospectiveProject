const mongoose = require('mongoose');
const User = require("../models/user");
const modulo = require('../models/modulo');
const tema = require('../models/tema');
const bcrypt         = require("bcryptjs");
const bcryptSalt     = 10;

<<<<<<< HEAD
mongoose.connect(`mongodb://bliss:abc123@ds145981.mlab.com:45981/retrospective`);
=======
mongoose.connect('mongodb://bliss:abc123@ds145981.mlab.com:45981/retrospective');
>>>>>>> 783a4eb92e0bc7522c7d03a6167bf866e91cfcad

const salt     = bcrypt.genSaltSync(bcryptSalt);
const hashPass = bcrypt.hashSync('admin', salt);

const newUser = User({
  username: "admin",
  password: hashPass,
  role: 'BOSS'
})

 
newUser.save()
.then(()=>{
  console.log("User admin añadido...");
})
.catch((err)=>{
  console.log(err);
});

