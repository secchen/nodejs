var http = require('http')
var server = http.createServer()
server.on('request',(req,res)=>{
  if(req.url==='/login')
    {res.end('login page')}
  else if(req.url==='/index')
    {res.end('index page')}
  else{
    res.end('404 not found')
  }
})
server.listen(3000,()=>{
  console.log('server created')
})