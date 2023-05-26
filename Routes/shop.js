const express=require('express');
const router=express.Router()
const controllers=require('../Controllers/handle')
router.get("/",controllers.getShop );
module.exports=router