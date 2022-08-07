const http=require('http');

const server=http.createServer();

server.on('request',(req,res)=>{
    const str=`you request url is ${req.url},and request method is ${req.method}`;
    console.log(str);
    //调用 res.end() 方法 向客户端响应一些内容
    res.end(str);
});

server.listen(80,()=>{
    console.log("请求成功");
})