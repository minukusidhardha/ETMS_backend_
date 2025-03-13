const Employee = require("../models/employee");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const Admins = require("../models/admin");
const fs=require('fs')
exports.addemployee=async(req,res)=>{
    try{
        let {name,jobTitle,city,salary,profilePic,cv,username,password}=req.body;
        let salt=10;
        const updatedpassword=await bcrypt.hash(password,salt);
        let employeeobj=new Employee({name,jobTitle,city,salary,profilePic,cv,username,'password':updatedpassword});
        employeeobj=await employeeobj.save();
        return res.json(employeeobj);
    }
    catch(err){
        res.status(400).json({'msg':'somthing wrong '+err.message});
    }
}
exports.getallemployees=async(req,res)=>{
    let obj = req.user; 
    let username = obj.username; 

    let admin = await Admins.findOne({'username': username})
    if(!admin)
        return res.status(401).json({'msg': 'Unauthorized'})
    const employees=await Employee.find();
    res.json(employees);


}
exports.getemployee=async(req,res)=>{
    let obj = req.user; 
    let username = obj.username; 

    let employee = await Employee.findOne({'username': username})
    if(!employee)
        return res.status(401).json({'msg': 'Unauthorized'})
    const employees=await Employee.findOne(employee._id);
    res.json(employees);


}
exports.login=async(req,res)=>{
    const {username,password}=req.body;
    let employee=await Employee.findOne({'username':username});
    if(employee === undefined || employee==null)
        return res.status(400).json({'msg': 'Invalid Credentials!!'})
    let isValid = await bcrypt.compare(password, employee.password); 
    if(isValid === undefined)
        return res.status(400).json({'msg':'Invalid Credentials!!!!'})
    const SECRET_KEY = '98765432108765';
    let employeeObj = {
        'username': employee.username,
    }
    const token = jwt.sign(employeeObj, SECRET_KEY, { 'expiresIn': '1h' });
    res.json({ 'token': token })
}
exports.Uploadcv=async(req,res)=>{
    try{
        console.log('hello')
    let id=req.user;
        let username = id.username;
        let employee = await Employee.findOne({ 'username': username })
        if (!employee)
            return res.status(400).json({ 'msg': 'Invalid Credencials!!' })
        if (!req.file)
            return res.status(400).json({ 'msg': 'file not found!!' })
        const file = req.file.filename;
        let mimetype = req.file.mimetype;
        const allowedextensions = ['docx', 'pdf']
        if (!allowedextensions.includes(mimetype.split('/')[1])) {
            return res.status(400).json({ 'msg': 'file not allowed!!allowed types: ' + allowedextensions })
        }
        employee.cv = file + '.' + mimetype.split('/')[1]

        const employeesaved = await employee.save(employee)
        res.json(employeesaved)
    }
    catch (err) {
        console.log(err)
    }



}
exports.Profilepic = async (req, res) => {
    try {
        console.log('hello')
        let id = req.user;
        let username = id.username;
        let employee = await Employee.findOne({ 'username': username })
        if (!employee) {
            return res.status(400).json({ 'msg': 'Invalid Credencials!!' })
        }
        if (!req.file) {
            return res.status(400).json({ 'msg': 'file not found!!' })
        }

        let multername = req.file.filename;
        let mimetype = req.file.mimetype.split('/')[1];
        let allowedextensions = ['jpeg', 'gif', 'png', 'pdf']
        if (!allowedextensions.includes(mimetype)) {
            return res.status(400).json({ 'msg': 'file not allowed!!allowed types: ' + allowedextensions })
        }

        employee.profilePic = multername + '.' + mimetype;
        employee = await employee.save(employee)
        res.json(employee)
    }
    catch (err) {
        console.log(err)
    }

}
exports.Delete=async(req,res)=>{
    try{
        let obj=req.user;
        let eid=req.params;
        let username=obj.username;
        let admin=await Admins.findOne({'username':username})
        if(!admin){
            return res.status(400).json({'msg':'Unauthorized Access'})
        }
        let employee=await Employee.deleteOne({'_id':eid})
        return res.status(200).json({'msg':'record deleted'})

    }
    catch(err){
        return res.status(400).json({'msg':'something wrong '+err})
    }
}
