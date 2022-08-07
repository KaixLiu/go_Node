//获取fs和path
const fs=require('fs');
const path=require('path');

//定义正则表达式来筛选style 和script 标签
const styReg=/<style>[\s\S]*<\/style>/;
const scrReg=/<script>[\s\S]*<\/script>/;

//定义需要筛选的页面
fs.readFile(path.join(__dirname,'index.html'),'utf-8',function(err,dataStr){
    if(err){
        return console.log("读取页面失败");
    }
    // console.log("读取页面成功");
    recloveCss(dataStr);//调用分离css 方法
    recloveJS(dataStr);//调用分离js 方法
    recloveHtml(dataStr);//调用分离html 方法
})

//分离css
function recloveCss(htmlCss){
    //使用exec 检测页面这与正则表达式匹配的字符串
    const c1=styReg.exec(htmlCss);
    //将返回值中的标签语句替换为空白
    const newCss=c1[0].replace('<style>','').replace('</style>','');
    //写入数据
    fs.writeFile(path.join(__dirname,'file/index.css'),newCss,'utf-8',function(err){
        if(err){
            console.log("写入CSS失败");
        }
        console.log("写入CSS成功");
    })
}

//分离js
function recloveJS(htmlJS){
    //使用exec 检测页面这与正则表达式匹配的字符串
    const j1=scrReg.exec(htmlJS);
    //将返回值中的标签语句替换为空白
    const newJs=j1[0].replace('<script>','').replace('</script>','');
    //写入数据
    fs.writeFile(path.join(__dirname,'file/index.js'),newJs,'utf-8',function(err){
        if(err){
            console.log("写入JS失败");
        }
        console.log("写入JS成功");
    })
}

//分离html
function recloveHtml(Html){
    //将页面的script 和style 标签换位外链
    const newHtml=Html.replace(styReg,'<link rel="stylesheet" href="index.css">').replace(scrReg,'<script src=index.js></script>');
    //写入数据
    fs.writeFile(path.join(__dirname,'file/index.html'),newHtml,'utf-8',function(err){
        if(err){
            return console.log("写入html失败");
        }
        console.log("写入html成功");
    })
}