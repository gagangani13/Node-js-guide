const http=require('http');
const server=http.createServer((request,response)=> {
    console.log(request.url)
    let msg=''
    if (request.url==='/about'){
        msg='About'
    }else if(request.url==='/home'){
        msg="Home"
    }else if(request.url==='/node'){
        msg='my Node Js project'
    }else{
        msg='website'
    }
    response.setHeader('Content-Type','text/html');
    response.write('<html>');
    response.write('<head><title>Backend</title></head>');
    response.write(`<body><h1>Welcome to ${msg} </h1></body>`);
    response.write('</html>');
    response.end();
    //you can't edit response after this it will give error
})
server.listen(3000)
