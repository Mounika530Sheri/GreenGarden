const {userSignup,userLogin,getUser}=require("../controller/user")
const express=require("express")
const router=express.Router()

router.post("/signUp",userSignup)
router.post("/login",userLogin)
router.get("/user/:id",getUser)


module.exports=router