const target = {
    field1: 1, 
    field2: undefined, 
    field3: {
        child: 'child'
    },
    field4: [2, 3, 4]
}
// 1. 拷贝 for key in  typeof [] {}
// 2. 深 递归 value 对象
// 3. 循环引用 递归 死循环
target.target = target
console.log(target)
// target 对象
// map 可以接受对象作为key 弱引用
function clone(target, map = new WeakMap()) {
    if (typeof target === 'object') {  // [] {}
        let cloneTarget = Array.isArray(target) ? [] : {}
        if (map.get(target)) {  // 退出
            return map.get(target)
        }
        map.set(target, cloneTarget)
        for (const key in target) {  // {} [] 都支持 for key in
            cloneTarget[key] = clone(target[key], map)
        }
    } else {
        return target
    }
}