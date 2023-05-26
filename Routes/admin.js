const express=require('express')
const path=require('path')
const rootDir=require('../Helper/rootDir')
const router=express.Router()
router.get("/addProduct", (req, res, next) => {
    // res.sendFile(path.join(__dirname,'../','Views','addProduct.html'));
    res.sendFile(path.join(rootDir,'Views','addProduct.html'));
  });
router.post('/product',(req, res, next)=>{
    console.log(req.body)// This works bcz of body parser
    res.redirect('/')
})
router.get('/contactus',(req, res, next)=>{
  res.sendFile(path.join(rootDir,'Views','contact.html'))
})
router.post('/success',(req,res,next)=>{
  res.send('<h1>Form Submitted</h1>')
})
module.exports=router