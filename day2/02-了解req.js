const http=require('http');

const server=http.createServer();

//req是请求对象，包含客户端的数据和属性

server.on('request',(req)=>{
    //req.url 是客户端请求的url地址
    const url=req.url;
    //req.method 是客户端请求的 method 类型
    const method=req.method;
    
    // const str='you request url is '+url+',and request method is '+method+'';

    const str=`you request url is ${url},and request method is${method}`;
    console.log(str);

})

server.listen(80,()=>{
    console.log('调用成功');
})