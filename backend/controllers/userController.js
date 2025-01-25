import userModel from '../models/userModel.js'
import validator from 'validator'
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

const createToken =(id) =>{
    return JWT.sign({id},process.env.JWT_SECRET)
}
const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false,message:"User doen't Exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(isMatch){
            const token = createToken(user._id)
            res.json({success:true , token})
        }else{
            res.json({success:false,message:"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}
const registerUser = async (req,res)=>{
    try {
        const {name,email,password}= req.body;
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"})
        }
        if(!validator.isEmail(email)){
            return res.json({success: false, message : "Please enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password"});
        }
        //hashing the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
export {loginUser,registerUser}