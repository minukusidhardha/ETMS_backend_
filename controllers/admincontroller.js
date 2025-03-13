const bcrypt = require('bcryptjs');
const Admin = require('../models/admin');
const jwt=require('jsonwebtoken');
const Admins = require('../models/admin');
exports.signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        //console.log('hello')
        let salt=10;
        let hashedpassword =await bcrypt.hash(password,salt);
        let adminobj = new Admins({ username, 'password': hashedpassword })
        adminobj = await adminobj.save();
        res.json(adminobj);
    }
    catch (err) {
        res.status(400).json({ 'msg': 'something wrong ' + err.message });

    }

}
exports.login =async (req, res) => {
    try{
        const {username,password}=req.body;
        //console.log(usename)
        let admin=await Admins.findOne({'username':username});
        if(!admin)
            return res.status(400).json({ 'msg': 'invalid credencials' });
        
        let passwordpresent=await bcrypt.compare(password,admin.password);
        if(!passwordpresent)
            return res.status(400).json({ 'msg': 'invalid credencials' });

        let seckretkey='98765432108765';
        //console.log('hello')
        let adminObj = {
            'username' : admin.username,
           }
           const token = jwt.sign(adminObj, seckretkey , {'expiresIn' :'20h'});
           res.json({'token' : token})

    }
    catch(err){
        return res.status(400).json({ 'msg': 'something wrong ' + err.message });
    }

}