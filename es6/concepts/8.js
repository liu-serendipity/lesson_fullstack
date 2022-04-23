const obj = {
    name: '刘利民',
    food: '甜品',
    sex:'男'
}
// const food = obj.food
// es6 提供了优雅的api解构
const { name,food } = obj;
console.log(name,food);
// const name = '123';

function introduce({name,food}) {
    console.log(`${name},旅梦的good firend,最喜欢吃${food}`);
}
introduce(obj);