const multer  = require('multer');
const path = require('path')
var storage = multer.diskStorage({

    destination:function(req,file,cb)
    {
        console.log(file);
        cb(null,path.join(__dirname,'../uploads/'));
    },
    filename:function(req,file,cb)
    {
        console.log(req.filename)
        req.query.ImageUrl= req.originalname+'.jpg';
        cb(null, file.originalname)
    }
})
var upload = multer({storage:storage});
module.exports = upload;