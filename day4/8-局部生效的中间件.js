const express=require('express');

const app=express();

//定义一个中间件函数
const mw1=function(req,res,next){
    console.log("我是一个局部中间件函数哦");
    next();
}

//下面的路由调用了局部中间件函数 mw1
app.get('/',mw1,function(req,res){
    res.send("我调用了mw1 这个中间件哦")
})

//mw1 不会影响下面这个路由，因为他没有调用
app.get('/user',function(req,res){
    res.send("我啥也没调");
})


app.listen(80,()=>{
    console.log("启动成功");
})