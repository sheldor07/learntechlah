const express = require('express')


const {db} = require('./src/db/models.js')
const {usersRoute} = require('./src/routes/users')
const {projectsRoute} = require('./src/routes/projects')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/users', usersRoute)
app.use('/api/projects', projectsRoute)
app.use('/',express.static(__dirname + '/src/public'))

const SERV_PORT = process.env.PORT || 8484
db.sync()
    .then(()=>{
        app.listen(SERV_PORT,()=>{
            console.log('server started on localhost:',SERV_PORT)
        })
    })
    .catch((err) => {
        console.error(new Error('Could not start database'))
        console.error(err)
      })

