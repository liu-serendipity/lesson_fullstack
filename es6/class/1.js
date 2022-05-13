class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    // es6 在面向对象（class），让js更像C++ java 等大型面向对象语言，拥有完整的传统面向对象编程能力
    static info() {
        console.log('A dog is better than any other dog');
    }
    // 对象内部的get set操作，形式是方法，本质是读写
    get description() {  // description 读取属性
        return `${this.name} is a ${this.breed} type of dog`;
    }
    set nicknames(value) {
        this.nick = value.trim();
    }
    get nicknames() {
        return this.nick.toUpperCase();
    }
}

Dog.info();

const sunny = new Dog('sunny', 'Golden Doodle');
// console.log(sunny.description);
sunny.nicknames = 'water';
console.log(sunny.nicknames);
