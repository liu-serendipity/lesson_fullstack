// Animal 父类 -> Dog 子类
// 1. extends
// 2. supper
class Animal {
    constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }
    eat(food) {
        this.belly.push(food);
        return this
    }
    drink() {
        this.thirst -= 10;
        return this
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;  // 子类有的
    }
    bark() {
        console.log('bark bark bark!');
    }
}

const sunny = new Dog('sunny', '大黄');
// sunny.bark();
sunny  // 链式调用
    .eat('烤鱼')
    .drink()
    .eat('火锅')
    .drink();
console.log(sunny.thirst, sunny.belly);