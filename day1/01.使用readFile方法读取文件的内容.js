 //导入fs模块
const fs=require('fs');
//第一个参数：读取文件的存储路径
//第二个参数：读取文件时采用的编码格式，一般默认是utf-8
//第三个参数：回调函数，拿到读取失败和成功的结果 err dataStr
fs.readFile('./file/1.txt','utf-8',function(err,dataStr){
    console.log(err);//读取成功为 null 
    //读取失败err的值为错误对象
    //dataStr的值为undefined
    console.log("---------");
    console.log(dataStr);
})