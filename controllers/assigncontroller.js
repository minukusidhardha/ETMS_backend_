const Assign = require("../models/assingn");
const Employee = require("../models/employee");
const Task = require("../models/task");

exports.addassigntoemployee=async(req,res)=>{
    try{
    let {eid,tid}=req.body;
    let employee=await Employee.findById(eid);
    if(!employee)
        res.status(400).json({'msg':'ivalid employee id'});
    let task=await Task.findById(tid);
    if(!task)
        res.status(400).json({'msg':'ivalid task id'});
    let assign=new Assign({'Employee':eid,'task':tid});
    assign=await assign.save();
    res.json(assign);
    }
    catch(err){
        res.status(400).json({'msg':'something wrong '+err})
    }
}