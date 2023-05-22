
const express=require('express')
const app=express()
app.use((req,res,next)=>{  //Middleware
    next()
})
app.use((req,res,next)=>{
    res.send('<h1>Welcome to Express</h1>')
})
app.listen(3000);
