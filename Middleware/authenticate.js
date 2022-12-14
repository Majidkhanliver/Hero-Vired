const  jwt  = require("jsonwebtoken");

const authenticate = async (req,res,next)=>{
    let token   
    
 
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        token =  req.query.token;
    }
    console.log(token)
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        console.log("in try block")
        const decoded =  jwt.verify(token, "SecretKey");
        console.log(decoded)
        req.user = decoded;
    } catch (err) {
        console.log(err)
        return res.status(401).send("Invalid Token");
    }
    return next();
}
module.exports = authenticate;