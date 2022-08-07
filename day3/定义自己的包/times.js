const itheima=require('./itheima-tools');//导入方法

const dt=itheima.newTimes(new Date());

console.log(dt);

const box='<p>伟大的</p>';

console.log(itheima.newHtml(box));

const newbox='&lt;p&gt;伟大的&lt;/p&gt;';

console.log(itheima.oldHtml(newbox));