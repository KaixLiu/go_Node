const express=require('express');

const app=express();

// app.get('/user',function(req,res){
//     res.send({
//         name:'zs',
//         age:20,
//         gender:'男'
//     })
// })

app.post('/user',(req,res)=>{
    res.send("请求成功");
})

// app.get('/',(req,res)=>{
//     //req.query 默认是一个空对象
//     //他可以获取到客户端发送过来的 查询参数
//     console.log(req.query);
//     res.send(req,query)
// })
app.listen(80,()=>{
    console.log("启动成功");
})
//这里的 :id 是一个动态参数
app.get('/user/:id/:name',(req,res)=>{
    console.log(req.params);
    res.send(req.params);
})