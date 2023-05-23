const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
app.use("/addProduct", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='product'/><input type='text' name='description' /><button type='submit'>SEND</button></form>"
  );
});
app.use('/product',(req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})
app.use("/", (req, res, next) => {
  res.send("<h1>Welcome to Express</h1>");
});
app.listen(3000);
