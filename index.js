const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT

app.use(express.json());

app.listen(port, () =>{
    try{
        console.log(`Server running at http://localhost:${port}`);
    }catch(err){
        console.log(`error is ${err}`);
    }
})