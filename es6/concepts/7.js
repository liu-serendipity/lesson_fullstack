let var1 = {name: '罗前东'};
let var2 = var1;    // 不是值， 给的是地址
var2.name = '刘利民'
console.log(var2);
console.log(var1);  // 直觉不一样