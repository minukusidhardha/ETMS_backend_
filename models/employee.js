const mongoose=require('mongoose');
const employeeschema=mongoose.Schema({
     name:{type:String,required:true},
     jobTitle:{type:String,required:true},
     city:{type:String,required:true},
     salary:{type:Number,required:true},
     profilePic:{type:String},
     cv:{type:String},
     username:{type:String,required:true},
     password:{type:String,required:true},
     role:{type:String,default:'Role_Employee'}
});
const Employee=mongoose.model("Employee",employeeschema);
module.exports=Employee;