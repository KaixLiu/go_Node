//创建格式化函数
function dataFormat(dtStr){
    const dt=new Date(dtStr);
    const y=pad(dt.getFullYear());
    const m=pad(dt.getMonth()+1);
    const d=pad(dt.getDate());

    const hh=pad(dt.getHours());
    const mm=pad(dt.getMinutes());
    const ss=pad(dt.getSeconds());

    return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`;
}

//补零
function pad(n){
    return n>9 ? n :'0'+n;
}


module.exports={
    dataFormat
}