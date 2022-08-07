const express=require('express');

const app=express();

app.use(express.urlencoded({extended:false}));

app.get('/api',(req,res)=>{
    res.send(req.query);
})

app.post('/api',(req,res)=>{
    res.send(req.body);
    console.log(req.body);
})

app.listen(80,()=>{
    console.log("启动成功");
})
