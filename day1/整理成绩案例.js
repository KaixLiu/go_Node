const fs=require('fs');

fs.readFile('./file/成绩.txt','utf-8',function(err,dataStr){
    if(err){
        return console.log("获取成绩失败");
    }
    // console.log(dataStr);
    //将字符串以空格相隔成为新数组
    const data=dataStr.split(' ');
    const arrNew=[];//创建新的空白数组
    data.forEach(item=>{//循环把旧数组里的每一项经过把=换成：后添加到新数组中
        arrNew.push(item.replace('=','：'))
    })
    //创建一个新的变量来接收arr 并换行
   var newData= arrNew.join('\r\n');
    // console.log(newData);
    fs.writeFile('./file/成绩-ok.txt',newData,'utf-8',function(err){
        if(err){
            return console.log("写入失败");
        }
        console.log("写入成功");
    })
})