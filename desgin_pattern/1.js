// 创建单例  Singleton
let CreateSingleton = (function() {
    // console.log('创建单例');
    // 多了一层作用域  形成了作用域链
    let instance;  // 实例
    return function(name) {  // constructor
        if (instance) {  // 之前实例过的话
            return instance
        }
        this.name = name;
        return instance = this;
        // instance = this;
        // return this
    }
})();

CreateSingleton.prototype.getName = function() {
    console.log(this.name);
}
// 惰性？ 
let singleton = new CreateSingleton('帅哥');
let dalao = new CreateSingleton('帅哥a');
// console.log(singleton.name);
// console.log(dalao.name);
console.log(singleton === dalao);
console.log(singleton.getName());
console.log(dalao.getName());