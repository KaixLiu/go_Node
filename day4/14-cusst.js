const qs = require('querystring');


function bodyParser(req, res, next) {

    let str = '';
    //监听req的data数据
    req.on('data', (chunk) => {
        str += chunk;
    })
    req.on('end', () => {
        //数据传输完毕后，str存放的是完整的请求体数据
        // console.log(str);

        //解析字符串为对象格式
        const body = qs.parse(str);
        req.body=body;
        next();
    })

}

module.exports=bodyParser;