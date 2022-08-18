const express = require('express');
const bcrypt = require('bcrypt');
const router= express.Router();
const usermodal=require('../Models/Login')
router.post('/login',(req,res)=>{
    const name = req.query.name;
    var password="";
    const password1= req.query.password;
    bcrypt.hash(password1,10,(err,hash)=>{
        if(err){
            console.log(err)
        }
        else{
            const newUser= new usermodal({
                name:name,
                password:hash
            });
            newUser.save((err,doc)=>{
               if(err)
               {
                   console.log(err);

                   return  res.send(err)
               }
                console.log(doc)
                res.send(doc)
            })
        }
    })
 
})
router.get('/all',async(req,res)=>{
    try{
      let doc= await usermodal.find({'name':'Majid'},{'name':0});
      res.send(doc);
    }
    catch(error)
    {
        res.send(error);
    }
})
router.get('/find',async(req,res)=>{
    try{
        let doc = await usermodal.find({'_id':req.query.id});
        res.send(doc);
    }catch(err)
    {
        res.send(err);
    }
})
router.get('/findone',async(req,res)=>{
    try{
        let doc= await usermodal.findOne();
        res.send(doc);
    }catch(err)
    {
        res.send(err);
    }
})
router.get('/findAndDelete',async(req,res)=>{
    try{
        let doc= await usermodal.findOneAndDelete({_id:req.query.id});
        res.send(doc);
    }catch(err){
        res.send(err)
    }
})
router.post('/findAndReplace',async(req,res)=>{
    try{
        console.log(req.query)
        let doc = await usermodal.findOneAndUpdate({_id:req.query.id},{"Name":"Majid Khan","age":34})
        res.send(doc)
    }catch(err)
    {
        res.send(err);
    }
})
router.delete('/delete',async(req,res)=>{
    try{
        let doc = await usermodal.deleteOne({_id:req.query.id})
        console.log(doc.deletedCount);
        res.send(doc);
    }catch(err)
    {
        console.log(err)
        res.send(err)

    }
})
module.exports=router;
