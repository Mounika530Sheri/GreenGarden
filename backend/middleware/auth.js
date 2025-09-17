const jwt=require("jsonwebtoken")

const verifyToken=async(req,res,next)=>{
    let token=req.headers["authorization"]
    if(token){
        token=token.split(" ")[1]
        jwt.verify(token,process.env.SECRETE_KEY,(err,decoded)=>{
            if(err){
                return res.status(400).json({message:"token invalid"})
            }
            else{
                req.user=decoded
            }
        })
        next()
    }else{
        return res.status(400).json({message:"token invalid"})
    }
}

module.exports={verifyToken}