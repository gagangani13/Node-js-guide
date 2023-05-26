const rootDir = require('../Helper/rootDir');
const path=require('path')
exports.getProduct=(req, res, next) => {
    res.sendFile(path.join(rootDir,'Views','addProduct.html'));
};
exports.getContact=(req, res, next)=>{
    res.sendFile(path.join(rootDir,'Views','contact.html'))
}
exports.postContact=(req,res,next)=>{
    res.send('<h1>Form Submitted</h1>')
}
exports.postProduct=(req, res, next)=>{
    res.redirect('/')
}
exports.getShop=(req, res, next) => {
    res.sendFile(path.join(rootDir,'Views','shop.html'));
}
exports.errorPage=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'Views','errorPage.html'))
}