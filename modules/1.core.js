// How to create web server

const http = require('http')

http.createServer(function(request,response){
  response.writeHead(200, {'content-type':'text/html'})
  response.end("<h1>Hello World, Welcome to NodeJS</h1>")
}).listen(3001)