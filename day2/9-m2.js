
//一开始我们定义了exports 对象的属性与方法
module.exports.username = 'zx';

module.exports.sayhello = function () {
    console.log("hello");
}

//由于永远会以module.exports 指向的对象为准，
//所以最后的结果会是下面的

module.exports = {
    username: '小米',
    sayhi(){
        console.log("hi")
    }
}