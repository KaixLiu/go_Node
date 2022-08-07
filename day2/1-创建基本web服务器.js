//1、导入http 模块
const http=require('http');
//2、创建 web 服务器实例
const server=http.createServer();
//3、为服务器实例绑定 request 事件，监听客户端请求
server.on('request',(req,res)=>{
    console.log("请求成功");
});

//4、启动服务器
server.listen(8080,function(){
    console.log("调用成功");
})