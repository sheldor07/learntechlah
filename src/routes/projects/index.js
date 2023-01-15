const Router = require('express');
const {
    createNewProject,
    showAllProjects,
} = require('../../controllers/project')

const route = Router()
route.get('/:id', async (req, res) => {
    const projects = await showAllProjects()
    res.status(200).send(projects)

})
route.post('/', async (req, res) => {
        const project = await createNewProject(req.body.name, req.body.description,req.body.githubLink)
        if (project) {
            res.status(200).send(project)
        }
        else{
            res.status(201).send({
                error:"error adding project"
            })
        }
    }
)

module.exports = {
    projectsRoute: route
}