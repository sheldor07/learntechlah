const {Users} = require('../db/models.js')

async function createUser(username, password){
    console.log(username)
    console.log(password)
    const user = await Users.create({
        username:username,
        password:password,
    })
    return user
}
async function getUserbyId(id){
    return await Users.findOne({where:{id}})
}   
async function getUserbyUsername(username){
    return await Users.findOne({where:{username}})
}   
module.exports = {
    createUser,
    getUserbyId,
    getUserbyUsername
}
