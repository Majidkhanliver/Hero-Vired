const mongoose = require('mongoose');
let Course = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ImageUrl:{
        type:String,
        required:true,
    },
    UnivesityName:{
        type:String,
        required:true
    },
    facultyprofile:{
        type:String
    },
    learning:{
            type:String,
            required:true
    },
    price:mongoose.Types.Decimal128,
    Diploma:{
        type:String,
        required:true,
    },
    Eligibility:{
        type:String,
        required:true
    }
});
module.exports= new mongoose.model('Course',Course);