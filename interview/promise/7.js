let a = 0;
let b = async () => {
    a = a + await 10;
    console.log('2', a);
}

b();
a++;
console.log('1', a);