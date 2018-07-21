const mongoose = require('mongoose');
const User = require("../models/user");
const modulo = require('../models/modulo');
const tema = require('../models/tema');
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;

mongoose.connect(`mongodb://bliss:abc123@ds145981.mlab.com:45981/retrospective`);

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

