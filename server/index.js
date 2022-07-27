const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express()

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'))
})
//get path C:\Users\ayusu\Desktop\DevMountain\6Week\3Day\deployment-demo\server\index.js
//dirname is directory name

const port = process.env.PORT || 4005

//Horuku's env where they store files

//4005 is local port for testing


app.listen(port, () => {console.log(`Listening on port ${port}`)})













