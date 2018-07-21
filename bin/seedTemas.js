const mongoose = require('mongoose');
//const Modulo = require('../models/modulo');
 const Tema = require('../models/tema');
// const Postit = require('..models/postit');

mongoose.connect('mongodb://bliss:abc123@ds145981.mlab.com:45981/retrospective');

let modulo1 = [
       {tema: 'JavaScript', moduloid:"5b53a1a58b92cd75cdf9b613"},
       {tema:'Html', moduloid:"5b53a1a58b92cd75cdf9b613"},
       {tema:'Css', moduloid:"5b53a1a58b92cd75cdf9b613"},
       {tema:'DOM', moduloid:"5b53a1a58b92cd75cdf9b613"},
       {tema:'Bootstrap', moduloid:"5b53a1a58b92cd75cdf9b613"},
       {tema:'Jquery', moduloid:"5b53a1a58b92cd75cdf9b613"}];
    Tema.insertMany(modulo1, function(error, docs) {});


let modulo2 = [
    {tema:'Nodejs', moduloid:"5b53a1a58b92cd75cdf9b614"},
    {tema:'MongoDb',moduloid:"5b53a1a58b92cd75cdf9b614"},
    {tema:'Express',moduloid:"5b53a1a58b92cd75cdf9b614"},
    {tema:'Mongoose', moduloid:"5b53a1a58b92cd75cdf9b614"},
    {tema:'Passport',moduloid:"5b53a1a58b92cd75cdf9b614"}];
    Tema.insertMany(modulo2,function(error, docs){});

let modulo3 = [
    {tema:'API', moduloid:"5b53a1a58b92cd75cdf9b615"},
    {tema:'Ajax',moduloid:"5b53a1a58b92cd75cdf9b615"},
    {tema:'Json',moduloid:"5b53a1a58b92cd75cdf9b615"},
    {tema:'Angular',moduloid:"5b53a1a58b92cd75cdf9b615"},
    {tema:'Angular-Forms',moduloid:"5b53a1a58b92cd75cdf9b615"},
    {tema:'Angular-Service',moduloid:"5b53a1a58b92cd75cdf9b615"},
    {tema:'Angular-RestApi-Express',moduloid:"5b53a1a58b92cd75cdf9b615"},
    {tema:'Angular-Recipes',moduloid:"5b53a1a58b92cd75cdf9b615"},
    {tema:'Angular-Auth',moduloid:"5b53a1a58b92cd75cdf9b615"}];
    Tema.insertMany(modulo3,function(error,docs){});   


    