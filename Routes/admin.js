const express=require('express')
const router=express.Router();
const controllers=require('../Controllers/handle')
router.get("/addProduct", controllers.getProduct);
router.post('/product',controllers.postProduct)
router.get('/contactus',controllers.getContact)
router.post('/success',controllers.postContact)
module.exports=router