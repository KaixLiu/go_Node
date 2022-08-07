const fs=require('fs');

fs.writeFile('./file/4.txt','我写入成功了哦我就是内容哦',function(err){
    if(err){
        return console.log("写入失败哦，再检查检查"+err);
    }
    console.log("写入成功："+err);
})