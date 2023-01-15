const express = require('express')


const {db} = require('./src/db/models.js')
const {usersRoute} = require('./src/routes/users')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/users', usersRoute)
app.use('/',express.static(__dirname + '/src/public'))


db.sync()
    .then(()=>{
        app.listen(8484,()=>{
            console.log('server started on localhost:8484')
        })
    })
    .catch((err) => {
        console.error(new Error('Could not start database'))
        console.error(err)
      })

