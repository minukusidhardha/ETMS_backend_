const mongoose=require('mongoose');
const assignschema=mongoose.Schema({
    Employee:{type:mongoose.Types.ObjectId,ref:"Employee",required:true},
    task:{type:mongoose.Types.ObjectId,ref:"Task",required:true}
});
const Assign=mongoose.model("Assign",assignschema);
module.exports=Assign;