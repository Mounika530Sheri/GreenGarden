const User=require("../model/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


const userSignup=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.json({message:"fields cann't be empty"}).status(400)
    }
    let existuser=await User.findOne({email})
    if(existuser){
        return res.json({message:"already Exists"}).status(400)
    }
    const hashpwd=await bcrypt.hash(password,10)
    const newuser=await User.create({email,password:hashpwd})
    let token=jwt.sign({email,id:newuser._id},process.env.SECRETE_KEY)
    return res.json({token,user:newuser}).status(200)
}

const userLogin=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.json({message:"fields cann't be empty"}).status(400)
    }
    let existuser=await User.findOne({email})
    if(existuser && await bcrypt.compare(password,existuser.password)){
        let token=jwt.sign({email,id:existuser._id},process.env.SECRETE_KEY)
        return res.json({token,user:existuser}).status(200)

    }else{
         return res.status(400).json({ error: "Invaild credientials" })
    }


}

const getUser=async(req,res)=>{
    const user=await User.findById(req.params.id)
    return res.json({email:user.email})
}

module.exports={userSignup,userLogin,getUser}