const mongoose=require('mongoose')
const commentschema= new mongoose.Schema({
    username:{type:String,required:true},
    message:{type:String,required:true},
    Commentdate:{type:Date,default:Date.now},
    task:{type:mongoose.Types.ObjectId,ref:'Task',required:true},

})
const Comment=mongoose.model('Comment',commentschema)
module.exports=Comment;