- node js 后端，模块化方案，commonjs require+module.exports =
- js es6 module  import + export default
- node 不支持 es6 import babel -> js 转译(babel)
- babel 的原理

- reactive 手写核心
    1. reactive vue3 composition API 响应式api 
        react 响应式一样 基于Proxy
    2. 是一个函数，返回proxy实例
        接受参数对象，对参数对象的访问代理
    3. 当函数式组件（复杂任务）{{counter.num1}}
        proxy 读操作 收集依赖
    4. set操作 组件重新运行
    5. reactive 函数只负责 返回proxy实例，handler 另外处理
        get set 常规操作该有的