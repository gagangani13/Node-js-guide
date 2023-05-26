const express = require("express");
const app = express();
const adminRoute=require('./Routes/admin')
const shopRoute=require('./Routes/shop')
const controllers=require('./Controllers/handle')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminRoute)
app.use(shopRoute)
app.use(controllers.errorPage)
app.listen(3000);