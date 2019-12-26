var http = require('http')
var server = http.createServer()
server.on('request',()=>{
  console.log('接受请求成功')
})
server.listen(3000,()=>{
  console.log('server created')
})