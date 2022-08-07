//定义格式化时间的方法
function newTimes(lowTime) {
    const dt = new Date(lowTime);
    const Y = gt(dt.getFullYear());
    const M = gt(dt.getMonth() + 1);
    const D = gt(dt.getDay());

    const hh = gt(dt.getHours());
    const mm = gt(dt.getMinutes());
    const ss = gt(dt.getSeconds());

    return `${Y}-${M}-${D} ${hh}:${mm}:${ss}`;
}

//补零
function gt(newgt) {
    return newgt > 9 ? newgt : '0' + newgt;
}

module.exports={
    newTimes
}