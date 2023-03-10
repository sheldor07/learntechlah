const Sequelize = require('sequelize')
const bcrypt = require('bcrypt');
//initialising database
const db = new Sequelize({
    dialect: 'mysql',
    database: 'heroku_2bad3fd73f80dd5',
    username: 'b7124b1733879f',
    password: '8b340a6f',
    host:'us-cdbr-east-06.cleardb.net',
})
// standard definitions for attributes
const COL_USERNAME_DEF = {
    type: Sequelize.DataTypes.STRING(100),
    unique: true,
    allowNull: false
}

//tables in db
const Users = db.define('user', {
    username: COL_USERNAME_DEF,
    password: {
        type: Sequelize.DataTypes.STRING,
        set(value) {
            // Storing passwords in plaintext in the database is terrible.
            // Hashing the value with an appropriate cryptographic hash function is better.
            this.setDataValue('password',bcrypt.hashSync('myPassword', 10))
        }
    },
    emailId:Sequelize.DataTypes.STRING,
    track:Sequelize.DataTypes.STRING,
    progress:{
        type:Sequelize.DataTypes.INTEGER,
    }
})

const Projects = db.define('project', {
    name:Sequelize.DataTypes.STRING,
    description:Sequelize.DataTypes.STRING,
    githubLink:Sequelize.DataTypes.STRING,
    demoLink:Sequelize.DataTypes.STRING,
    techStack:Sequelize.DataTypes.STRING,
})

// Users.hasMany(Projects,{
//     foreignKey: 'userId'
// })
// Projects.belongsTo(Users)


module.exports = {
    db, 
    Users,
    Projects
}
