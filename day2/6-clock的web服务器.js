const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request', (req, res) => {
    //定义一个失败输出语句
    const fp='<h1>404 NOT</h1>';
    
    //定义用户输入的路径
    const url=req.url;
    //定义一个空白路径
    let fpath='';
    //判断用户输入
    if(url==='/'){
        fpath=path.join(__dirname,'./clock/index.html');
    }else {
        fpath=path.join(__dirname,'/clock',url);
    }
    //获得文件
    fs.readFile(fpath,'utf-8',function(err,dataStr){
        if(err){
            return res.end(fp);
        }
        res.end(dataStr);
    })

});

server.listen(80, () => {
    console.log("服务器开启成功");
})