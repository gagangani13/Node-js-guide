
const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");

  if (request.url === "/") {
    fs.readFile('message.txt',{encoding:'utf-8'},(err,data)=>{
        if(err){
            console.log(err);
        }
        response.write("<html>");
        response.write("<head><title>Backend</title></head>");
        response.write(`<body>`);
        response.write("<h1>Welcome to my Node Js project </h1>");
        response.write(`<h5>${data}</h5>`)
        response.write(
            "<form action='/message' method='POST'><input type='text' name='message' /><button type='submit'>Send</button></form>"
        );
        response.write("/<body>");
        response.write("</html>");
        return response.end()
    })
  }
  if (request.url === "/message" && request.method === "POST") {
    const body = [];
    request.on("data", (chunk) => {
      body.push(chunk);
    });
    request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    response.statusCode = 302;
    response.setHeader("Location", "/");
    return response.end();
  }
  //you can't edit response after this it will give error
});
server.listen(3000);
