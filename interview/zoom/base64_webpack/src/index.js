import './a.png'  // webpack 一切皆可打包

let a = 1
let b = 2
let d = 4  // tree shaking
let c = a + b
console.log(c);