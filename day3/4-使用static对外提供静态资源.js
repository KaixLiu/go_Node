const express=require('express');
const app=express();


//需要将clock文件对外静态资源
app.use(express.static('./files'));
//127.0.0.1/index.html
app.use(express.static('./clock'));
app.listen(80,()=>{
    console.log("启动成功");
})