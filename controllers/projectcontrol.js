const Admins = require("../models/admin");
const Admin = require("../models/admin");
const Project = require("../models/project");

exports.addproject = async (req, res) => {
    let user = req.user;
    let username = user.username;
    console.log("hello");
    let admin = await Admins.findOne({'username':username});
    console.log(admin);
    if(!admin)
        return res.status(401).json({ 'msg': `UnAuthorized access for user: ${username}` })

    let { title, shortDescription, estimatedEndDate, clientName, techStack } = req.body;
    let project = new Project({ title, shortDescription, estimatedEndDate, clientName, techStack });
    project = await project.save();
    res.json(project);

}
exports.getallprojects = async (req, res) => {
    let {page,size}=req.query;
    page=parseInt(page) || 1;
    size=parseInt(size)||2;
    let skip=(page-1)*size;
    let projects = await Project.find().skip(skip).limit(size);
    let totalrecords=await Project.countDocuments();
    let totalpages=Math.ceil(totalrecords/size);

    res.json(
        {
            'currentpage':page,
            'totalrecords':totalrecords,
            'data':projects,
            'totalpages':totalpages
        });

}