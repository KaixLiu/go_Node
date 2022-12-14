
//导入数据库操作模块
const db = require('../db/index');

//导入
const bcrypt = require('bcryptjs');
const { route } = require('../router/user');
//获取用户信息的处理函数

exports.getUserInfo = (req, res) => {
    //定义查询用户信息的sql 语句
    const sql = 'select id,username,nickname,email,user_pic from ev_users where id=?';
    //jwt在7版本以上是req.auth
    db.query(sql, req.user.id, (err, results) => {
        //执行sql语句失败
        if (err) return res.cc(err);
        //执行成功，但是执行结果为空
        if (results.length !== 1) return res.cc("获取用户信息失败")
        res.send({
            status: 0,
            msg: "获取成功",
            data: results[0],
        })
    })
}

//更新用户基本信息
exports.updataUserInfo = (req, res) => {
    //更新数据
    const sql = 'update ev_users set ? where id=?';
    //执行update 这样一些属性产生了一个对象
    // 对象中包含着affectedRows 属性 表示影响了几条数据


    //执行sql 语句
    db.query(sql, [req.body, req.body.id], (err, results) => {
        //执行sql 语句失败
        if (err) return res.cc(err);
        //修改内容失败，影响行数不等于1
        if (results.affectedRows !== 1) return res.cc("修改失败");
        return res.cc("修改成功");
    })
}
//重置密码功能
exports.updatePassword = (req, res) => {
    // 定义根据 id 查询用户数据的 SQL 语句
    const sql = `select * from ev_users where id=?`

    // 执行 SQL 语句查询用户是否存在
    db.query(sql, req.user.id, (err, results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)

        // 检查指定 id 的用户是否存在
        if (results.length !== 1) return res.cc('用户不存在！')

        // TODO：判断提交的旧密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if (!compareResult) return res.cc('原密码错误！')


        // 定义更新用户密码的 SQL 语句
        const sql2 = `update ev_users set password=? where id=?`

        // 对新密码进行 bcrypt 加密处理
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)

        // 执行 SQL 语句，根据 id 更新用户的密码
        db.query(sql2, [newPwd, req.user.id], (err, results) => {
            // SQL 语句执行失败
            if (err) return res.cc(err)

            // SQL 语句执行成功，但是影响行数不等于 1
            if (results.affectedRows !== 1) return res.cc('更新密码失败！')

            // 更新密码成功
            res.cc('更新密码成功！', 0)
        })
    })
}

//更新用户头像
exports.updateAvatar = (req, res) => {
    const sql = 'update ev_users set user_pic=? where id=?';
    db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)

        // 执行 SQL 语句成功，但是影响行数不等于 1
        if (results.affectedRows !== 1) return res.cc('更新头像失败！')

        // 更新用户头像成功
        return res.cc('更新头像成功！', 0)
    })
}