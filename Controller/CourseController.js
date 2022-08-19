const usermodal=require('../Models/Login');
const jwt = require('jsonwebtoken')
const login = async(req,res)=>{
    const name = req.query.name;
    const Diploma = req.query.Diploma;
    try{
            let doc = await usermodal.find({name:name,Diploma:Diploma});
            if(doc != undefined)
            {
                const access = jwt.sign(req.query,"SecretKey");
                console.log(access)
               return res.send(access)
            }
            else{
             return   res.send({"message":"Invalid Credentails"});
            }
    }catch(err){
        console.log(err);
      return  res.send(err);
    }
  
}
const create = (req,res)=>{
    console.log(req.query)
    const newUser= new usermodal(req.query);
    newUser.save((err,doc)=>{
       if(err)
       {
           console.log(err);

           return  res.send(err)
       }
        console.log(doc)
        res.send(doc)
    })
};
const all = async(req,res)=>{
    console.log('request recieved')
    try{
      let doc= await usermodal.find({});
      console.log(doc)
      res.send(doc);
    }
    catch(error)
    {
        res.send(error);
    }
}
const find = async(req,res)=>{
    try{
        let doc = await usermodal.find({'_id':req.query.id});
        console.log("hello")
        
        console.log(doc)
        res.send(doc);
    }catch(err)
    {
        console.log(err)

        res.send(err);
    }
}
const findAndDelete= async(req,res)=>{
    try{
        let doc= await usermodal.findOneAndDelete({_id:req.query.id});
        res.send(doc);
    }catch(err){
        res.send(err)
    }
}
const deleteCourse = async(req,res)=>{
    try{
        let doc = await usermodal.deleteOne({_id:req.query.id})
        console.log(doc.deletedCount);
        res.send(doc);
    }catch(err)
    {
        console.log(err)
        res.send(err)

    }
}
const updateCourse= async(req,res)=>{
    console.log(req.query)
    try{
        let doc = await usermodal.updateOne({_id:req.params.id},{ $set: req.query});
        console.log(doc)
        return res.send(doc);
    }
    catch(err)
    {
        console.log(err);
      return  res.send(err);
    }
}
module.exports = { create,all,find,findAndDelete,deleteCourse,updateCourse,login};