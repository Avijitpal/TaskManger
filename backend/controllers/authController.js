const User = require('../models/userModel');
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

//Now we have to generate the webtoken
//And We are doing this to secure the our API like /api/task

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    })
}

const registerUser = async (req,res)=>{
  const {name, email ,password} = req.body;
  if(!name||!email||!password){
    return res.status(400).json({message:"Please fill all the fields"})
  }

  const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json({message:"User already exists"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newuser = await User.create({name,email,password:hashedPassword});
    if(newuser){
        const token = generateToken(newuser._id);
        res.status(201).json({message:"User registered succesfully"},token);
    }
    else{
        res.status(201).json({message:"Ivalid user data"})
    }
};

  const loginUser = async(req,res)=>{
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(user&&(await bcrypt.compare(password, user.password))){
            const token = generateToken(user._id);
            res.status(200).json({message:"login successful", user:{
                      id:user._id,
                      name:user.name,
                      email:user.email,
            },token})
        }
        else{
            res.status(401).json({message:"invalid Credentials"})
        }
    } 


module.exports = {registerUser, loginUser};