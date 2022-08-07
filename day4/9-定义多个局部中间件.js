const express=require('express');

const app=express();

//定义一个中间件函数
const mw1=function(req,res,next){
    console.log("我是第一个局部中间件函数哦");
    next();
}
const mw2=function(req,res,next){
    console.log("我是第二个局部中间件函数哦");
    next();
}
const mw3=function(req,res,next){
    console.log("我是第三个局部中间件函数哦");
    next();
}
const mw4=function(req,res,next){
    console.log("我是第四个局部中间件函数哦");
    next();
}
//执行顺序和调用时的顺序有关
//下面的路由调用了局部中间件函数 mw1
app.get('/',[mw1,mw4],function(req,res){
    res.send("我调用了mw1，和mw4 这个中间件哦")
})

//mw1 不会影响下面这个路由，因为他没有调用
app.get('/user',mw2,mw3,mw4,function(req,res){
    res.send("我调用2-4");
})


app.listen(80,()=>{
    console.log("启动成功");
})