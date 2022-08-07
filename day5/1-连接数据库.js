//导入模块
const mysql = require('mysql');
//建立连接
const db = mysql.createPool({
    host: '127.0.0.1',//数据库 IP 地址
    user: 'root',     //登录用户名
    password: 'liuxiaoer123',//登录密码
    database: 'my_db01',     //库名
})

//测试mysql模块是否正常工作


// db.query('select 1',(err,results)=>{
//     //报错
//     if(err) return console.log(err.message);
//     //正常
//     console.log(results);
// })


//向users 表中新增一条数据


// const user={username:'spider-man',password:'poc19221'};
// //定义待执行sql语句
// const sqlStr1='insert into users (username,password) values(?,?)';
// //执行 insert into 则results 是一个对象
// db.query(sqlStr1,[user.username,user.password],(err,results)=>{
//     if(err) return console.log(err.message);
//     //通过results.affectedRows 判断是否成功
//     if(results.affectedRows===1){
//         console.log("插入成功");
//     }
// })


//演示插入数据的便捷方式


// const user={username:'spider-man222',password:'poc192dsa21'};
// //定义待执行语句
// const sqlStr2='insert into users set ?';
// //执行sql语句
// db.query(sqlStr2,user,(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows===1){
//         console.log("插入数据成功");
//     }
// })


// const user={id:7,username:'qwqwqw',password:'1010010'};
// //定义sql语句
// const sqlStr3='update users set username=?,password=? where id=?';
// //执行sql语句
// db.query(sqlStr3,[user.username,user.password,user.id],(err,results)=>{
//     if(err) return console.log(err.message);
//     //执行update 语句之后，结果也是一个对象
//     if(results.affectedRows===1){
//         console.log("更新成功");
//     }
// })


//演示更新的便捷方式

// const user={id:8,username:'qwdjsadia',password:'1010010'};
// const sqlStr4='update users set ? where id=?';
// db.query(sqlStr4,[user,user.id],(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows===1){
//         console.log("更新成功了");
//     }
// })


//删除数据

// const sqlStr5 = 'delete from users where id=?';
// db.query(sqlStr5, 7, (err, results) => {
//     if (err) return console.log(err.message);
//     //执行delete 之后 结果也是一个对象
//     if (results.affectedRows === 1) {
//         console.log("删除成功了");
//     }
// })


//标记删除

const sqlStr6='update users set status=? where id=?';
db.query(sqlStr6, [1,9], (err, results) => {
    if (err) return console.log(err.message);
    //执行update 之后 结果也是一个对象
    if (results.affectedRows === 1) {
        console.log("标记删除成功了");
    }
})











//查询users 表所以数据  执行select 返回的是数组
// const sqlStr = 'select * from users';
// db.query(sqlStr, (err, results) => {
//     if (err) return console.log(err.message);
//     console.log(results);
// })