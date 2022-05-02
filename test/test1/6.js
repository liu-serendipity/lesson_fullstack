const arr = [18, 'You', 777, 'breaking', 99, 'full'];
// console.log(Math.floor(Math.random()*arr.length));
const random = (arr) => arr[Math.floor(Math.random()*arr.length)];
const randomElement = random(arr);
console.log(randomElement);