const express = require('express')
const app =express();
app.use(express.json())
const mongoose =require('mongoose');
const user= require('./routes/userroute')
app.use('/user',user);
require('dotenv').config()
require('./db/connection')
app.listen((3000),(err,res)=>{
    if (err) throw err;
    else{
        console.log('listening at port 3000');
    }
})