function sayHi() {
    console.log('helle',this.name);
}
var person2 = {
    name:"Bill",
    sayHi: sayHi
}
var person1 = {
    name:"Steve",
    friend:person2
}
// 当函数作为对象的方法时，this指向对象，当前对象是person2
person1.friend.sayHi();