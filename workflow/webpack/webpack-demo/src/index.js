require('./main.css')
const { toLowerCase, toUpperCase } = require('./b.js');
const a = 'hello world, yjj is best!!!'
// console.log(toLowerCase(a));
let oDiv = document.createElement('div');
oDiv.textContent='严锦洁真好';
document.body.appendChild(
    oDiv
)
module.exports = a  // commonjs 