const db = require('../db/index');
//导入加密密码模块
const bcrypt = require('bcryptjs');
//导入生成token的包
const jwt=require('jsonwebtoken');
//导入全局的配置文件
const config=require('../config');

exports.regUser = (req, res) => {
    //获取客户端提交到服务器的用户信息
    const userinfo = req.body;
    //判断客户端提交的数据是否合法
    // if (!userinfo.username || !userinfo.password) {
    //     return res.cc(err);
    // }
    //定义查询的sql语句
    const sqlStr = `select * from ev_users where username=?`;
    //查询相同项
    db.query(sqlStr, userinfo.username, (err, results) => {
        if (err) {
            return res.cc(err);
        }
        if (results.length > 0) {
            return res.cc("用户名已被注册");
        }
        //用户名可以使用,加密密码
        //调用bcrypt.hashSync(带加密的明文，加密的长度)
        userinfo.password = bcrypt.hashSync(userinfo.password, 10);

        //定义插入新用户
        const sql = 'insert into ev_users set ?';
        db.query(sql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            if (err) {
                return res.cc(err);
            }
            //判断影响行数是否为1
            if (results.affectedRows !== 1) {
                return res.cc("注册用户失败");
            }
            res.cc("注册成功",0);
        })
    })
}





exports.login = (req, res) => {
    //接收表单数据
    const userinfo=req.body;
    //定义sql 语句
    const sql2='select * from ev_users where username=?';
    //执行语句
    db.query(sql2,userinfo.username,(err,results)=>{
        //执行sql 失败
        if(err) return res.cc(err);
        //执行sql 成功 但是没有该用户
        if(results.length!==1) return res.cc('登录失败');

        //判断密码是否正确
       const compareResult= bcrypt.compareSync(userinfo.password,results[0].password);
        if(!compareResult){ return res.cc("登录失败")}
        //在服务器生成token字符串
        const user={...results[0],password:'',user_pic:''};
        //对用户信息加密生成token字符串
        const tokenStr=jwt.sign(user,config.jwtSecreKey,{expiresIn:config.expiresIn})
        //调用res.send
        res.send({
            status:0,
            messages:'登录成功',
            token:'Bearer ' + tokenStr,
        })
    })
}