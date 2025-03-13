const express=require('express');
const { signup, login } = require('../controllers/admincontroller');
const srouter=express.Router();
srouter.post('/signup',signup);
srouter.post('/login',login);
module.exports=srouter;