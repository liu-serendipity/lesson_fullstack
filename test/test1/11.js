// const reg = /[0-9]{11}/;
// 指定第一位为1
const reg = /1\d{10}/g;
console.log(reg.test('17779737688'));
console.log('12jw12wk12d17779737688'.match(reg));
