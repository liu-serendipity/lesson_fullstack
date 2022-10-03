import { isObject } from './utils'
import {
    mutableHandlers
} from './baseHandlers'

export const reactive = (target) => {
    // console.log('手写响应式')
    // 严格性校验 入参
    // proxy
    if (!isObject(target)) {
        console.warn(`reactive ${target}必须是一个对象，否则ref`)
        return target
    }
    return new Proxy(target, mutableHandlers)
}