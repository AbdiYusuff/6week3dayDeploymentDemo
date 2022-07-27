const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express()

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4005

app.listen(port, () => {console.log(`Listening on port ${port}`)})


//get path 

//dirname is directory name

// C:\Users\ayusu\Desktop\DevMountain\6Week\3Day\deployment-demo\server\index.js
//

//Horuku's env where they store files

//4005 is local port for testing


