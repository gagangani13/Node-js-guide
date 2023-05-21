const http=require('http');
function rqListener(request,response) {
    console.log("GANI")//this gets called only when the browser loads
}
const server=http.createServer(rqListener)
server.listen(3000)
