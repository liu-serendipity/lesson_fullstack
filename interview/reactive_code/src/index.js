import { reactive } from './reactive'

// reactive(null)
let dummy
// reactive 应该返回 Proxy实例
// vue3 composition API
// 对象 Proxy
const counter = reactive({
    num1: 1,
    num2: 2
})
// 生命周期 mounted updated
effect(() => {
    dummy = counter.num1 + counter.num2
})
counter.num1++

// counter.num1
// counter.num1 ++
// 某项需要响应式的任务
// () => {
//     dummy = counter.num1 + counter.num2  // 关注 counter.num1 订阅
// }
