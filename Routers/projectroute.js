const express=require('express');
const { addproject, getallprojects } = require('../controllers/projectcontrol');
const auth = require('../middleware/auth');
const prouter=express.Router();
prouter.post('/add',auth,addproject)
prouter.get('/get',getallprojects)
module.exports=prouter;