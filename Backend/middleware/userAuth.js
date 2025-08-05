const jwt = require('jsonwebtoken')
require('dotenv').config()

const userAuth = async(req, res, next)=>{
    try{
        const {token} = req.cookies;
        console.log("token", token)
        console.log("----------------")
        console.log(req.cookies)
        if(!token){
            return res.status(401).json({message: "token not found"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId;

        next();
    }catch{
        res.status(401).json({message: "Unauthorized"})
    }
}

module.exports = userAuth;