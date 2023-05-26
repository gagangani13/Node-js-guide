const express = require("express");
const app = express();
const path=require('path')
const adminRoute=require('./Routes/admin')
const shopRoute=require('./Routes/shop')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminRoute)
app.use(shopRoute)
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'Views','errorPage.html'))
})
app.listen(3000);