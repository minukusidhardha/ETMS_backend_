const express = require('express');
 const auth = require('../middleware/auth');
const { addComment, Getallcomments } = require('../controllers/commentcontroler');
 
 const crouter = express.Router();
 
 crouter.post("/add",auth, addComment)
 crouter.get("/get",Getallcomments)
  
 module.exports = crouter;