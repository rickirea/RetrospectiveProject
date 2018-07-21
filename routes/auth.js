const express = require('express');
const router = express.Router();
const postit = require('../models/portit');


function isLoggedIn(req,res,next){
    if(req.isAuthenticated()) return next();
    return res.redirect('/login')
}

function isAdmin(req,res,next){
    if(res,user.reole=="BOSS")res.redirect('/dashboard')
    else next()
}

//ruts dashboard
router.get('/dashboard',isLoggedIn,(req,res)=>{
const stop= postit.fine({stage:"stop"}).sort({updated_at:-1})
const start= postit.fine({stage:"start"}).sort({updated_at:-1})
const stay= postit.fine({stage:"stay"}).sort({updated_at:-1})
const domore=postit.fine({stage:"domore"}).sort({updated_at:-1})
const doless=postit.fine({stage:"doless"}).sort({updated_at:-1})
Promise.all({stop,start,stay,domore,doless})
.then(result=>{
    res.render("passport/dashboard",result)
})
.catch(e=>{
    console.log("Eroor:",e)
})

})


//ruts newpost
router.get('/newpost',isAdmin,(req,res)=>{
    res.render('passport/dashboard')

})

router.post('/newpost',(req,res)=>{
    postit.register(req.body)
})

//
