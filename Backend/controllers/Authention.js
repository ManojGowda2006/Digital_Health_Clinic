const Patient = require('../models/Patient')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const Register = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message: "All fields are required!"});
        }
        const existingUser = await Patient.findOne({email})
        if(existingUser){
            return res.status(409).json({message: "Email already exist"})
        }

        if(name.length < 3){
            return res.status(400).json({message: "name must be at least of 3 characters"})
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await Patient.create({
            name,
            email,
            password : hashPassword
        })
        const token = jwt.sign({userId: user._id} , process.env.JWT_SECRET, {expiresIn: "1h"});
        
        res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60*60*1000,
        sameSite:"None"
    
    }
        )

        res.status(200).json({message: "Registered successfully!"})
    }catch(err){
        res.status(500).json({message: `Internal Server Error: ${err.message}`})
    }
}

const Login = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: "All fields are required!"})
        }

        const user = await Patient.findOne({email: email})
        if(!user){
            return res.status(404).json({message: "No user found"})
        }

        const checkPass = await bcrypt.compare(password, user.password)
        if(!checkPass){
            return res.status(400).json({message: "Invalid Password"})
        }

        const token = jwt.sign({userId: user._id} , process.env.JWT_SECRET, {expiresIn: "1h"});

        res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60*60*1000,
        sameSite:"None"
    })
        res.status(200).json({message: "Login successfull"})

    }catch(err){
        res.status(500).json({message: `Internal server error: ${err.message}`})
    }
}

module.exports = {Register, Login};