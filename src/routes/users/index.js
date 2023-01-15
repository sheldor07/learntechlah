const Router = require('express')
const {
    createAnonUser,
    getUserbyId,
    getUserbyUsername,
    createUser
} = require('../../controllers/user')

const route = Router()
route.get('/:id', async (req, res) => {
    let user;
    console.log(req.params.id)
    if (isNaN(parseInt(req.params.id))) {
        user = await getUserbyUsername(req.params.id)
    } else {
        user = await getUserbyId(req.params.id)
    }
    console.log(user)
    if (user) {
        res.status(200).send(user)
    } else {
        res.status(404).send({
            error: "user not found"
        })
    }

})
route.get('/', async (req, res) => {
        console.log(req.body)
        const user = await createUser(req.body.username, req.body.password)
        console.log(user)
        if (user) {
            res.status(200).send(user)
        }
    }
)

module.exports = {
    usersRoute: route
}