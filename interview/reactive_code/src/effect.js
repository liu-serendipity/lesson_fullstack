// 收集的对象集合 key
// map 和 对象字面量的区别 map的key可以是对象类型
// targetMap 全局的总扛把子 { key: [] }
// targetMap.set(counter, {'num1': effect})
// WeakMap 性能优化，垃圾回收
const targetMap = new WeakMap()

export const track = (target, type, key) => {

}

export const trigger = (target, type, key) => {
    
}

export const effect = (fn, options = {}) => {

}