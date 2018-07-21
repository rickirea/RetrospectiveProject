const express = require('express');
const router = express.Router();
const postit = require('../models/portit');
const passport = require('passport');
const passportFacebook = require('../helpers/facebook');
const hbs          = require('hbs');

//midelwers

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()) return next();
    return res.redirect('/login')
}

//ruts dashboard
router.get('/dashboard',isLoggedIn,(req,res)=>{
const stop= postit.fine({step:"stop"}).sort({updated_at:-1})
const start= postit.fine({step:"start"}).sort({updated_at:-1})
const stay= postit.fine({step:"stay"}).sort({updated_at:-1})
const domore=postit.fine({step:"domore"}).sort({updated_at:-1})
const doless=postit.fine({step:"doless"}).sort({updated_at:-1})
Promise.all({stop,start,stay,domore,doless})
.then(result=>{
    res.render("passport/dashboard",result)
})
.catch()

})

