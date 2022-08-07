const express=require('express');
const app=express();

//app.use(express.static('./files))


//导入路由模块
const userRputer=require('./3-router');
//注册路由模块
// app.use(userRputer);

//添加前缀
app.use('/api',userRputer);

app.listen(80,()=>{
    console.log("启动成功");
})