const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {

    let constent = '<h1>404 NOT</h1>'
    if (req.url === '/' || req.url === '/index.html') {
        constent = '<h1>首页</h1>';
    }
    else if (req.url === '/about.html') {
        constent = '<h1>关于页面</h1>';
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end(constent);
})
server.listen(80, () => {
    console.log("请求成功");
})