//导入express 
const express = require('express');

const joi=require('joi');

const app = express();
//封装res.cc函数
app.use((req,res,next)=>{
    //status 默认为1表示失败
    res.cc=function(err,status=1){
        res.send({
            status,
            message:err instanceof Error ? err.message : err,
        })
    }
    next();
})

//在路由之前解析token
const expressJWT=require('express-jwt');
const config=require('./config');

app.use(expressJWT({secret:config.jwtSecreKey}).unless({path:[/^\/api/]}));

// 导入cors
const cors = require('cors');

// 配置全局中间件cors解决跨域问题
app.use(cors());
// 配置全局中间件解析表单数据
app.use(express.urlencoded({ extended: false }));

//导入用户模块
const userRouter=require('./router/user');
app.use('/api',userRouter);
const userinfoRouter=require('./router/userinfo');
app.use('/my',userinfoRouter);//以/my 开头的接口，都是有权限的接口
//导入并使用文章分类路由模块
const artCateRouter= require('./router/artate');
app.use('/my/article',artCateRouter);

//定义错误级别中间件
app.use((err,req,res,next)=>{
    //验证失败导致的错误
    if(err instanceof joi.ValidationError){
       return  res.cc(err);
    }
    //身份认证失败
    if(err.name==='UnauthorizedError') return res.cc('身份认证失败');
    //未知错误
    res.cc(err);
})

















app.listen(8080, () => {
    console.log("启动成功");
})