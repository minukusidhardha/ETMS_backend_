const mongoose=require('mongoose');

const projectschema=mongoose.Schema({
    title: {type: String,required: true },
    shortDescription: {type: String,required: true },
    startDate: {type: Date , default: Date.now  },
    estimatedEndDate: {type: Date , default: Date.now },
    clientName: {type: String  },
    techStack: {type: String  }
});
const Project=mongoose.model("Project",projectschema);
module.exports=Project;