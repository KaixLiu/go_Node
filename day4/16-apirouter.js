const express=require('express');

const apiRouter=express.Router()


apiRouter.get('/get',(req,res)=>{
    // req.query 获取数据
    const query=req.query;

    res.send({
        status:0,//0 表示成功，1 表示失败
        masg:'GET请求成功',
        data:query//响应给客户端的数据
    })
})

apiRouter.post('/post',(req,res)=>{
    const body=req.body;
    res.send({
        status:0,
        mas:"请求成功",
        data:body
    })
})

apiRouter.delete('/delete',(req,res)=>{
    res.send({
        status:0,
        mas:"请求成功"
    })
})

module.exports=apiRouter;