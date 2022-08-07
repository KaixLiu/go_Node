const express=require('express');
const app=express();

//中间件函数
const mw=function(req,res,next){
    console.log("最简单的中间件");
    next();
}


app.listen(80,()=>{
    console.log("启动成功");
})