const express=require('express');
const { addtask, getalltasks, viewDetails, Changestatus } = require('../controllers/taskcontroller');
const trouter=express.Router();
trouter.post('/add/:pid',addtask);
trouter.get('/get',getalltasks);
trouter.get('/getdetails/:id',viewDetails);
trouter.put('/change/:id',Changestatus);
module.exports=trouter;