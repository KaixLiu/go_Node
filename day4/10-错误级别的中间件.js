const express = require('express');
const app = express();



app.get('/', (req, res) => {
    throw new Error('服务器内部发生错误！');
    res.send('我来啦');
})
//定义错误级别中间件，捕获错误，防止崩溃
app.use(function (err, req, res, next) {
    console.log("发生了错误" + err.message);
    res.send("Error" + err.message);
})

app.listen(80, () => {
    console.log("启动成功");
})