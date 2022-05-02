const forest = {
    location: 'Sweden',
    animals: 3,
    animalsTypes: ['Lions', 'Tigers', 'Bears']
};
// es6 解构
const { location: lo, animals, animalsTypes, nickname= '未命名' } = forest;
console.log(lo, nickname);

const [lions, tigers, bears] = animalsTypes;
console.log(lions, tigers, bears);