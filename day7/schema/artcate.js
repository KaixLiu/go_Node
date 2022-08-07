//导入定义验证规则模块
const joi=require('joi');

//定义name 和alisa 
const name=joi.string().required();
const alias=joi.string().alphanum().required();

//验证id规则
const id=joi.number().integer().min(1).required();


//向外共享

exports.add_cate_schema={
    body:{
        name,
        alias,
    }
}

exports.delete_cat_schema={
    params:{
        id,
    }
}

exports.get_cate_schema={
    params:{
        id,
    }
}
exports.update_cate_schema={
    body:{
        Id:id,
        name,
        alias
    }
}