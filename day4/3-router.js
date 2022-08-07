//这是路由模块
var express=require('express');
//创建路由对象
const router=express.Router();
//挂载具体的路由
router.get('/user/list',(req,res)=>{
    res.send("get来了哦");
})
router.post('/user/add',(req,res)=>{
    res.send('post成功哦');
})

//向外导出路由对象

module.exports=router;