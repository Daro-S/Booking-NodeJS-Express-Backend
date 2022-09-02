import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
//import auth.js
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomRoute from "./routes/room.js"
import cookieParser from "cookie-parser"


const app =express()
dotenv.config()

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MONGODB")
    
    }catch(error){
        throw error
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!")
})

//middlewares
//to add json 
app.use(cookieParser())

app.use(express.json())

app.use("/api/auth" ,authRoute)
app.use("/api/users" ,usersRoute)
app.use("/api/hotels" ,hotelsRoute)
app.use("/api/rooms" ,roomRoute)

app.use((err,req,res,next)=>{
    const errorStatus =err.status || 500
    const errorMsg = err.message || "An error occured bro!"
    return res.status(errorStatus).json(
        {
            success: false,
            status: errorStatus,
            message: errorMsg,
            stack: err.stack,
        }
        )
})




app.listen(8800, ()=>
{
    connect()
    console.log("connected to backend.");
}
)

