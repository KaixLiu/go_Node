const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {

    const str = `你请求的 url 地址是 ${req.url}，请求的类型为${req.method}`;
    //为了防止中文乱码，需要设置响应头
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    console.log(str);
    res.end(str);
});

server.listen(80, () => {
    console.log("请求成功");
})