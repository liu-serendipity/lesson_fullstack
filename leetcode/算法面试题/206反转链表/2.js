// 1. {{}} 替换 replace 占位符
// 2. {{name}}  person.name
let template = '我是{{name}},年龄{{age}},性别{{sex}}';
let person = {
    name: 'John',
    age: 34,
    sex: '男'
}
// 写一个render函数，完成字符串模板的嵌入值
/**
 * @func 字符串模板所有{{}} 占位符替换成对象里的值
 * @param {string} template 
 * @param {object} data 
 * @return {string}
 */
function render(template, data) {
    // {{}}   \w [a-z] 所有小写字母
    const reg = /\{\{(\w+)\}\}/;
    // console.log(Object.prototype.toString.call(reg));  // [object RegExp]
    if (reg.test(template)) {  // 还有占位符没有被替换
        const name = reg.exec(template)[1];  // exec 正则的一个方法  match
        // console.log(name);
        // js replace 接受一个正则
        template = template.replace(reg, person[name]);
        // console.log(template);
        // 把一个大问题分成很多类型的小问题，退出条件 问题解决
        return render(template, data)  // 递归  函数调用自己
    }
    return template
}

console.log(render(template, person));