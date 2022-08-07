const express=require('express');
const router=express.Router();

//导入路由处理函数模块
const userinfo_hanlder=require('../router_handler/userinfo');
//导入验证数据的中间件
const expressJoi=require('@escook/express-joi');
//导入需要验证的规则对象
const {update_userinfo_schema,update_password_schema}=require('../schema/index');
//导入头像验证
const { update_avatar_schema } = require('../schema/index');


//挂载路由
//获取用户基本信息
router.get('/userinfo',userinfo_hanlder.getUserInfo);

//更新用户信息路由
router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_hanlder.updataUserInfo);

//重置密码
router.post('/updatepwd',expressJoi(update_password_schema),userinfo_hanlder.updatePassword);

// 更新用户头像的路由
router.post('/update/avatar',expressJoi(update_avatar_schema), userinfo_hanlder.updateAvatar);

module.exports=router;