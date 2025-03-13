const express=require('express');
const { getuserInfo, login } = require('../controllers/authcontroller');
const auth = require('../middleware/auth');
const aurouter=express.Router();
aurouter.post('/user',auth,getuserInfo);
aurouter.post('/login',login);
module.exports=aurouter;