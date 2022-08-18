const mongoose =require('mongoose');
const uri = "mongodb+srv://Majid:Majid123@cluster0.it6hin7.mongodb.net/TIF?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Connecton Successfull");

}).catch((err)=>console.log(err));