// 数字 转手机号的问题？
// [1,2,3,4,5,6,7,8,9,0]    (123) 456-7890 
// 代理 翻墙   es6  非常重要的类 
const phoneHandler = {
    // 监听写操作
    set(target, name, value) {
        console.log(target, name, value);
        // 正则 []  匹配一个字符 /[0-9A-Z]/
        // console.log(value.match(/[0-9]/g), '|||');
        target[name] = value.match(/[0-9]/g).join('');
    },
    // 监听读操作
    get(target, name) {
        // 一个分组
        // console.log('---------------------');
        return target[name].replace(/([0-9]{3})(\d{3})(\d{4})/, '($1)$2-$3');
    }
};
// {} 
// let a = {};
const phoneNumbers = new Proxy({}, phoneHandler); 
// 写操作
phoneNumbers.phone = 'dddfdfd123fddfdfd4567fdfdf8ddd9aaa0';
// phoneNumbers.get('phone')
// 读操作
console.log(phoneNumbers.phone);