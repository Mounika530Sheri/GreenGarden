const express=require('express')
const app=express()
const dotenv=require("dotenv")
dotenv.config()
const cors=require("cors")


const connectDb=require('./config/connectionDb')
connectDb()

app.use(express.json())
app.use(cors({
  origin: "https://thunderous-salmiakki-e66a06.netlify.app" 
}));


app.use(express.json())

const PORT=process.env.PORT || 3000

app.use("/",require("./router/user.js"))
app.use("/addBooking",require("./router/booking.js"))
app.use("/availability",require("./router/availability.js"))

app.listen(PORT,(error)=>{
    console.log(`Server listen to the port ${PORT}`)
})
