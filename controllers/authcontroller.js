const Admins = require("../models/admin");
const Employee = require("../models/employee");
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
exports.getuserInfo=async (req,res)=>{
    try{
        let obj=req.user;
        let username=obj.username;
        let admin=await Admins.findOne({'username':username})
        if(admin)
            return res.json(admin)
        let employee=await Employee.findOne({'username':username})
        if(employee)
            return res.json(employee)
        
        return res.status(400).json({'msg': 'invalid credencials'})

    }
    catch(err){
        return res.status(400).json({'msg': 'sothing wrong '+err.message})
    }
    

}
exports.login= async(req,res)=>{
    let {username,password}=req.body;
    let admin=await Admins.findOne({'username':username});
    if(admin){
        let isValid=await bcrypt.compare(password,admin.password)
        if(!isValid)
            return res.status(400).json({'msg':'Invalid password'})
        let SECRET_KEY='98765432108765';
        let adminObj={
            'username':admin.username,
        }
        const token=jwt.sign(adminObj,SECRET_KEY,{ 'expiresIn': '20h'})
        return res.json({
            'token':token,
            'role':admin.role
        })
    }
    let employee=await Employee.findOne({'username':username})
    if(employee){
   
        let isValid=await bcrypt.compare(password,employee.password)
        if(!isValid || isValid ===undefined)
            return res.status(400).json({'msg':'Invalid password'})
       
        let SECRET_KEY='98765432108765'
        let adminObj={
            'username':employee.username,
        }
        const token=jwt.sign(adminObj,SECRET_KEY,{ 'expiresIn': '24h' })
        
        res.json({
            'token':token,
            'role':employee.role
        })
    }
//res.status(400).json({"msg":'Invalid credencials!!! '})

}