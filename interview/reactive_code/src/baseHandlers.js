// const get = (target, key, receiver) => {
//     console.log(target, key, receiver, '--------')
//     return Reflect.get(target, key)
// }
import { isObject } from './utils'
import { track, trigger } from './effect'

const get = createGetter()  // 闭包
function createGetter(shallow = false) {  // 默认值
    // 深浅
    // shallow
    return function get(target, key, receiver) {
        const res = Reflect.get(target, key, receiver)
        // 收集依赖
        track(target, "get", key)
        if (isObject(res)) {
            // 递归
            return shallow ? res : reactive(res)
        }
        return res
    }
}

const set = createSetter()
function createSetter() {
    return function set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver)
        trigger(target, "set", key)
        return result
    }
}

export const mutableHandlers = {
    get,
    set
}