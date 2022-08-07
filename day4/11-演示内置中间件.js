const express=require('express');
const app=express();
//除了错误级别中间件，其他的中间件必须在路由之前进行
app.use(express.json());

//默认写法 后面加extended:false
app.use(express.urlencoded({extended:false}));

app.post('/user',(req,res)=>{
    //在服务器可以使用  req.body 属性来接收客户端发送的请求体数据
    //默认情况下，如果不配置解析表单数据的中间件，则默认等于undefined
    console.log(req.body);


    res.send("ok");
})

app.post('/book',(req,res)=>{
    console.log(req.body);
    res.send("哇ok");
})

app.listen(80,()=>{
    console.log("启动成功");
})