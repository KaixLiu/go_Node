const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("我是老大");
    next();
})
app.use((req,res,next)=>{
    console.log("我是老二");
    next();
})
app.use((req,res,next)=>{
    console.log("我是老三");
    next();
})
app.use((req,res,next)=>{
    console.log("我是老四");
    next();
})
app.use((req,res,next)=>{
    console.log("我是老五");
    next();
})
app.use((req,res,next)=>{
    console.log("我是老六");
    next();
})

app.get('/',(req,res)=>{
    res.send("get飒飒");
})

app.get('/user',(req,res)=>{
    res.send("get啊大大");
})

app.listen(80,()=>{
    console.log("启动成功");
})