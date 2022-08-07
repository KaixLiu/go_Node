const time=require('./10-格式化时间');

const dt=new Date();

console.log(dt);
const newDT=time.dataFormat(dt);
console.log(newDT);