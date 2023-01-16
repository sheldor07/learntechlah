const {Users,Projects} = require('../db/models.js')
async function createNewProject(name,description,githubLink,demoLink,techStack){
    const project = await Projects.create({
        name:name,
        description:description,
        githubLink:githubLink,
        demoLink:demoLink,
        techStack:techStack,
    })
    return project
}
async function showAllProjects(){
    const projects = await Projects.findAll()//because of relationship defined in models between POsts and USers
    // const userProjects=[]
    // for(project of projects){
    //     if(project.user.userId === req.params.userId){
    //         userProjects.push(project)
    //     }
    // }
    return projects

}
//{include:[{model:Users}]}
module.exports = {
    createNewProject,
    showAllProjects,
}
