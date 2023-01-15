const Router = require('express')
const {
    getUserbyUsername,
    createUser,
} = require('../../controllers/user')

const route = Router()
route.get('/:id', async (req, res) => {
    let user;
    if (isNaN(parseInt(req.params.id))) {
        user = await getUserbyUsername(req.params.id)
    } else {
        res.status(201).send({
            error: "username cannot be a number"
        })
    }

    if (user) {
        res.status(200).send(user)
    } else {
        res.status(404).send({
            error: "user not found"
        })
    }

})
route.get('/', async (req, res) => {
        const user = await createUser(req.body.username, req.body.password)
        if (user) {
            res.status(200).send(user)
        }
        else{
            res.status(201).send({
                error:"error adding user"
            })
        }
    }
)

module.exports = {
    usersRoute: route
}