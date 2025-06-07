const User = require('../models/userModel');
const bcrypt = require('bcryptjs')

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
        res.status(201).json({message:"User registered succesfully"});
    }
    else{
        res.status(201).json({message:"Ivalid user data"})
    }
};
      const loginUser = async(req,res)=>{
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(user&&(await bcrypt.compare(password, user.password))){
            res.status(200).json({message:"login successful", user})
        }
        else{
            res.status(401).json({message:"invalid Credentials"})
        }
    } 


module.exports = {registerUser, loginUser};