const express=require('express');
const { addassigntoemployee } = require('../controllers/assigncontroller');
const arouter=express.Router();
arouter.post('/add',addassigntoemployee);
module.exports=arouter;