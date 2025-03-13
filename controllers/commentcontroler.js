const Comment = require("../models/comment");
const Employee = require("../models/employee");
const Task = require("../models/task");

exports.addComment=async(req,res)=>{
    try{
    let obj=req.user
    let username=obj.username;
    const {message,task}=req.body
    let employee=await Employee.findOne({'username':username})
    if(!employee){
        return res.status(400).json({'msg':'invalid credemcials '})
    }
    let comment=new Comment({'username':username,'message':message,'task':task})
    comment=await comment.save()
    res.json(comment)
    }
    catch(err){
        return res.status(400).json({'msg':'something wrong '+err})
    }


}
exports.Getallcomments=async(req,res)=>{
    const {tid}=req.body;
    let task=await Task.findOne(tid)
    if(!task)
        return res.status(400).json({'msg':'Invalid Task'})
    let comments=await Comment.find()
    return res.json(comments)

}