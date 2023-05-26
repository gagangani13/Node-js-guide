const path=require('path')
const express=require('express');
const rootDir = require('../Helper/rootDir');
const router=express.Router()
router.get("/", (req, res, next) => {
    // res.sendFile(path.join(__dirname,'../','Views','shop.html'));
    res.sendFile(path.join(rootDir,'Views','shop.html'));
  });
module.exports=router