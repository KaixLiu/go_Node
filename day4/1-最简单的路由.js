const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send('get来了');
})

app.post('/',(req,res)=>{
    res.send("post来了");
})



app.listen(80,()=>{
    console.log("启动成功");
})