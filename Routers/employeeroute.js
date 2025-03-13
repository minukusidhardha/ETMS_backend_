const express=require('express');
const auth = require('../middleware/auth')
const { addemployee, getallemployees, login, Uploadcv, Profilepic, getemployee, Delete } = require('../controllers/employeecontroler');
const router=express.Router();
const multer=require('multer');
const upload=multer({dest:'C:/Users/user/OneDrive/Desktop/hexaware/etmsui/public/docs/CV/'})
const upload1=multer({dest:'C:/Users/user/OneDrive/Desktop/hexaware/etmsui/public/profile/image/'})
router.post('/add',addemployee);
router.get('/get',auth,getallemployees);
router.get('/getone',auth,getemployee);
router.post('/login',login);
router.delete('/delete/:eid',auth,Delete);
router.post('/uploadcv',upload.single('file'),auth,Uploadcv);
router.post('/profile',upload1.single('file'),auth,Profilepic);
module.exports=router;