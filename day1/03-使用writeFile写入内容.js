const fs=require('fs');

//第一个参数是文件的存储位置
//第二个是文件的存入内容
//第三个是编码格式
//第四个是回调函数
fs.writeFile('./file/2.txt','我是写入的内容','utf-8',function(err){
    //如果文件写入成功，则err 的值等于null
    //写入失败则为错误对象
    console.log(err);
})