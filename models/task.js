const mongoose=require('mongoose');
const taskschema=mongoose.Schema({
    title: {type: String,required: true },
    shortDescription: {type: String,required: true },
    startDate: {type: Date , default: Date.now  },
    estimatedEndDate: {type: Date , default: Date.now },
    status:{type:String,default:'Active'},
    project:{ type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true}
});
const Task=mongoose.model("Task",taskschema);
module.exports=Task;