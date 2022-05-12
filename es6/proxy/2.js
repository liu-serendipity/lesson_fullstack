const obj = {  // 被代理的对象
    name: '_island',
    score: 59
};

// const objProxy = new Proxy(obj, {});
// console.log(objProxy);

const objProxy = new Proxy(obj, {
    // handler 处理捕捉器
    get: function(target, key) {
        console.log(`捕获到对象获取${key}属性的值操作`);
        return target[key];
    },
    // 写操作
    // 对象的访问拦截，捕捉器
    set: function(target, key, value) {
        // target[key] = value;
        if (key == 'age') {
            if (typeof value == 'number') {
                target[key] = value;
            }else {
                throw new TypeError('该属性的值必须是number类型');
                // console.warn('该属性的值必须是number类型');
            }
        } else {
            target[key] = value;
        }
    }
});

console.log(objProxy.name);  // 有get则已经介入，默认返回undefined
try {
    objProxy.age = 'sss';
} catch(e) {
    console.log(e);
}
// objProxy.age = '好人';  // 犯错 抛出错误
console.log(objProxy.age);