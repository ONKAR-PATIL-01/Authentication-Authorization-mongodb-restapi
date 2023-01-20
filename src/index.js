const express=require('express')
const mongoose=require('mongoose')
const userRouter = require('./routes/userRoutes')
const noteRouter=  require('./routes/noteRoutes')
const app=express()

app.use(express.json())
app.use("/users",userRouter)
app.use("/notes",noteRouter)
app.use((req,res,next)=>{
  console.log(" method"+ req.method+"url"+req.url)
  next()
})
app.get('/',(req,res)=>{
    res.send("Hello Onkar")
})
mongoose.connect('mongodb://127.0.0.1:27017/Customer')
.then(()=>{
  app.listen(5000,()=>{
    console.log("Server started on port 5000")
  })
}).catch((error)=>{
    console.log(error)
}) 

 