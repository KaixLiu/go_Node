const express=require('express');

const app=express();

//必须在配置cors之前配置jsonp
app.get('/api/jsonp',(req,res)=>{
    //定义jsonp 接口的具体实现过程
    //1、得到函数名称
    const funcName=req.query.callback; 
    //2、定义要发送到客户端的数据对象
    const data={name:'zs',age:22};
    //3\拼接出一个函数的调用
    const scrop=`${funcName}(${JSON.stringify(data)})`;
    //4\把拼接字符串返回
    res.send(scrop);
})

const cors=require('cors');
app.use(cors());

app.use(express.urlencoded({extended:false}));
const router=require('./16-apirouter.js');


app.use('/api',router);


app.listen(80,()=>{
    console.log("启动成功");
})