const path=require('path');
const fs=require('fs');

var newPath=path.join('/a','/b/c','../','/d','e');
console.log(newPath);

fs.readFile(path.join(__dirname,'./file/1.txt'),'utf-8',function(err,dataStr){
    if(err){
        return 
    }
    console.log(dataStr);
})