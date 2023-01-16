const {Users,Projects} = require('../db/models.js')

async function createUser(username, password,emailId){
    // console.log(username)
    // console.log(password)
    const user = await Users.create({
        username:username,
        password:password,
        emailId:emailId,
    })
    return user
}
async function getUserbyUsername(username){
    return await Users.findOne({where:{username}})
}   
module.exports = {
    createUser,
    getUserbyUsername
}
