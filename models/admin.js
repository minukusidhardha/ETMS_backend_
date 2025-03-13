const mongoose=require('mongoose');
const adminschema=mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,default:'Admin_Role'}

})
const Admins=mongoose.model("Admin",adminschema);
module.exports=Admins;