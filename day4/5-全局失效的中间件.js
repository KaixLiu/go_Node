const express=require('express');
const app=express();

// //中间件函数
// const mw=function(req,res,next){
//     console.log("最简单的中间件");
//     next();
// }
// //将mw注册为全局失效的中间件
// app.use(mw);

app.use((req,res,next)=>{
    console.log("这是最简单的全局中间件");
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