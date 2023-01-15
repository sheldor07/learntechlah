const Sequelize = require('sequelize')
let bcrypt = require('bcrypt');
//initialising database
const db = new Sequelize({
    dialect: 'mysql',
    database: 'techlinkedindb',
    username: 'collegeuser',
    password: 'collegepass',
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

Users.hasMany(Projects)
Projects.belongsTo(Users)

module.exports = {
    db, 
    Users,
    Projects
}
