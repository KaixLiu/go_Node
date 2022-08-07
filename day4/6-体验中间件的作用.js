const express=require('express');
const app=express();

app.use((req,res,next)=>{
    //获取到请求到达服务器时间
    const times=Date.now();
    req.starTime=times;
    next();
})

app.get('/',(req,res)=>{
    res.send("get飒飒"+req.starTime);
})

app.get('/user',(req,res)=>{
    res.send("get啊大大");
})

app.listen(80,()=>{
    console.log("启动成功");
})