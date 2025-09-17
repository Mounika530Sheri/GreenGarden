const express=require("express")
const router=express.Router()
const {addEvent}=require("../controller/booking")
const {verifyToken}=require("../middleware/auth")

router.post("/",verifyToken,addEvent)

module.exports=router