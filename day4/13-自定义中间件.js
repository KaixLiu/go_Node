const express = require('express');
const app = express();

const myBody = require('./14-cusst');
app.use(myBody);
app.post('/user', (req, res) => {
    console.log(req.body);
    res.send("成功")
})

app.listen(80, () => {
    console.log("启动成功");
})