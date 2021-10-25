const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
//app base
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'../templates/views'))

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('/',(req,res)=>{

    res.render('index',{
        title: 'Clock',
        day: new Date().toLocaleDateString(),
        hour:new Date().toLocaleTimeString()
    })
})
app.listen(port,()=>{
    console.log("connected to port: %s",port)
})